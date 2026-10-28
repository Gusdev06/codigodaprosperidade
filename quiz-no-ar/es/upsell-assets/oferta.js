/* Shared presentation only. Purchase and decline remain inside the Hotmart widget. */
(() => {
  'use strict';
  const dialog = document.querySelector('.preview-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const image = dialog.querySelector('img');
    document.querySelectorAll('[data-preview]').forEach(button => {
      button.addEventListener('click', () => {
        image.src = button.dataset.preview;
        image.alt = button.querySelector('img').alt;
        dialog.showModal();
      });
    });
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  }

  const sticky = document.querySelector('.sticky-offer');
  const hero = document.querySelector('.hero');
  const offer = document.getElementById('comprar');
  if (sticky && hero && offer && 'IntersectionObserver' in window) {
    let heroVisible = true, offerVisible = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === offer) offerVisible = entry.isIntersecting;
      });
      sticky.hidden = heroVisible || offerVisible;
    }, { threshold: 0 });
    observer.observe(hero);
    observer.observe(offer);
  }

  const container = document.getElementById('hotmart-sales-funnel');
  const message = document.querySelector('.payment-state');
  if (!container || !message) return;
  // Hotmart forwards the purchase context in the query string. A direct public
  // visit has no such context and would otherwise embed an invalid_upsell error.
  // Keep unknown query keys intact so current/future Hotmart parameters work.
  const attributionKey = /^(utm_.*|fbclid|gclid|gbraid|wbraid|sck|src|sub[0-9]*|subid[0-9]*|qa)$/i;
  const hasPurchaseContext = Array.from(new URLSearchParams(window.location.search).keys())
    .some(key => !attributionKey.test(key));
  if (!hasPurchaseContext) {
    message.textContent = 'Para añadir este complemento, abre esta oferta desde la confirmación de tu compra. Las opciones de aceptar o continuar aparecen durante ese paso.';
    message.hidden = false;
    return;
  }
  function hasWidget() {
    return Array.from(container.querySelectorAll('iframe')).some(frame => {
      const src = frame.getAttribute('src') || '';
      return /https:\/\/[^/]*hotmart\.com\//.test(src);
    }) || !!container.querySelector('button, input[type="button"], input[type="submit"]');
  }
  const observer = new MutationObserver(() => { if (hasWidget()) message.hidden = true; });
  observer.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
  window.setTimeout(() => {
    if (!hasWidget()) {
      message.textContent = 'Para añadir este complemento, abre esta oferta desde la confirmación de tu compra. Si ya compraste y no aparecen las opciones, consulta el correo de tu compra para solicitar ayuda.';
      message.hidden = false;
    }
  }, 10000);

  const script = document.createElement('script');
  script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
  script.onload = () => {
    try {
      window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      if (hasWidget()) message.hidden = true;
    } catch (_) {
      message.textContent = 'No fue posible cargar las opciones de compra. Conserva esta página y consulta el correo de tu compra para solicitar ayuda.';
      message.hidden = false;
    }
  };
  script.onerror = () => {
    message.textContent = 'No fue posible cargar las opciones de compra. Revisa tu conexión o consulta el correo de tu compra para solicitar ayuda.';
    message.hidden = false;
  };
  document.head.appendChild(script);
})();

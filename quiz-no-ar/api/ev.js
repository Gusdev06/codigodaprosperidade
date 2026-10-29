/* Registro de eventos do funil /es/ (29/10/2026). Recebe {sid, ev, video, ad, campaign, adset} via sendBeacon
   e grava em cdp_ev no Neon (cdp-funil-db). Sem dado pessoal: só sessão aleatória, passo e UTMs do anúncio. */
let pronto = false;
module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).end(); return; }
  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};
  const ev = String(b.ev || '').slice(0, 40), sid = String(b.sid || '').slice(0, 40);
  if (!/^[a-z0-9_]+$/.test(ev) || !/^[a-z0-9]+$/.test(sid)) { res.status(400).end(); return; }
  const corta = (x, n) => String(x || '').slice(0, n);
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    if (!pronto) {
      await sql`CREATE TABLE IF NOT EXISTS cdp_ev (id bigserial PRIMARY KEY, ts timestamptz DEFAULT now(), sid text, ev text, video smallint, ad text, campaign text, adset text)`;
      await sql`CREATE INDEX IF NOT EXISTS cdp_ev_ts ON cdp_ev (ts)`;
      pronto = true;
    }
    await sql`INSERT INTO cdp_ev (sid, ev, video, ad, campaign, adset) VALUES (${sid}, ${ev}, ${b.video ? 1 : 0}, ${corta(b.ad, 200)}, ${corta(b.campaign, 200)}, ${corta(b.adset, 200)})`;
    res.status(204).end();
  } catch (e) {
    res.status(500).json({ erro: 'db' });
  }
};

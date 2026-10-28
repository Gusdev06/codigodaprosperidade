# codigodaprosperidade

Funil completo do Código da Prosperidade. Site estático, sem build.

## Correção de atribuição ES — 28/10/2026 (posterior ao redesign)

A venda chegou à UTMify sem origem. O funil mantinha o script genérico usado com Cakto (`data-utmify-prevent-xcod-sck`), que impedia gerar a codificação necessária à integração Hotmart. Nos cinco HTMLs de venda ES, os dois carregadores antigos foram substituídos por um único script oficial Hotmart, equivalente ao enviado pelo Gusta: `https://cdn.utmify.com.br/scripts/utms/latest.js`, com apenas `data-utmify-prevent-subids`, async/defer. O pixel UTMify original foi preservado.

Nenhuma campanha foi editada. O script transforma as cinco UTMs atuais em `xcod`/`sck` com separador `hQwK21wXxR`. Teste isolado no Chrome, sem pixel ou compra, confirmou origem, campanha, conjunto, anúncio, posicionamento, checkoutMode e bid nos três links. Visita pública com apenas `xcod` não é tratada como sessão de compra no componente de oferta. Atribuição de uma nova compra real ainda precisa ser acompanhada; a mudança não recupera automaticamente a origem da venda anterior.

## Atualização ES — 28/10/2026: upsells sem VSL

`quiz-no-ar/es/up1/` e `quiz-no-ar/es/upabs2/` foram reorganizados para vender com texto e prévias reais: oferta e preço no topo (US$ 27 / US$ 43), entregáveis, card de decisão, FAQ, imagens ampliáveis e, no UP1, amostra de 20 segundos do áudio. CSS/JS e prévias ficam em `quiz-no-ar/es/upsell-assets/`.

No ES, o pagamento usa o **widget oficial Hotmart** do funil 286258; aceite/recusa continuam na plataforma. O JS copia nenhuma credencial e não cria cobranças. Mantém parâmetros desconhecidos da query para o contexto Hotmart. Uma visita pública apenas com parâmetros de atribuição mostra a orientação de voltar pela confirmação da compra, em vez de montar um iframe de upsell inválido. O conteúdo é descrito como material digital espiritual; sem promessa de consulta individual, taxa NASA ou ganhos garantidos.

Entrega ES vigente: link por e-mail, conforme `../latam/hotmart-migracao-2026-10-28.md`. A descrição de Cakto nas seções históricas abaixo se refere ao funil PT/implementação anterior.

Deploy confirmado pelo CLI em 28/10: `dpl_3ELzjQfTMCHLgD9WcyBWLjtkYf7w`, alias `codigodaprosperidade-ivory.vercel.app`, projeto `codigodaprosperidade`, root directory `quiz-no-ar`. QA em 320/390/1440 px; prévias, FAQ, áudio e âncoras testados. **Compra real de teste/one-click continua pendente.** As VSLs ES dos upsells ficaram para 29/10 por decisão do Gusta.

## Rotas

| Rota | O que é |
|---|---|
| `/` | Quiz de 9 telas → VSL do front → checkout |
| `/up1` | Upsell 1 — Mapa Astral (one-click Cakto) |
| `/dow11` | Downsell do upsell 1 |
| `/upabs2` | Upsell 2 — Constelação Familiar |
| `/dowup02` | Downsell do upsell 2 |
| `/app`, `/app/onboarding.html`, `/app/jornada.html`, `/app/bonus.html` | App do comprador |
| `/oraculo` | Oráculo |
| `/mapa`, `/mapa/meu-mapa.html`, `/mapa/transito.html`, `/mapa/diario.html` | Mapa astral |

## Rodar local

```bash
python3 -m http.server 4322
```

## VSLs

| Página | Player | Estado |
|---|---|---|
| `/` | Vturb `vid-6aa567d5bc76189ae5a9ccc8` | trocado |
| `/up1` | Vturb `vid-6aa567c1b554c32c63a5e826` | trocado |
| `/dow11` | `<video>` + `vsl-dow11.mp4` (Vercel Blob) | **falta ID da Vturb** |
| `/upabs2` | `<video>` + `vsl-upabs2.mp4` (Vercel Blob) | **falta ID da Vturb** |
| `/dowup02` | `<video>` + `vsl-dowup02.mp4` (Vercel Blob) | **falta ID da Vturb** |

Conta Vturb: `8961d838-aff2-4dce-9b39-e84022d332ce`.

No `/` o script do player carrega só quando a tela 9 aparece, pra não dar play durante o quiz.
No `/up1`, como não existe mais o `<video>` nativo, a liberação dos botões engancha no
`timeupdate` da API do smartplayer e, se a API não responder em ~20 s, cai pro relógio
de parede contado do carregamento da página.

## Tempos de liberação dos botões

Em produção. Nenhuma página está em modo teste.

| Arquivo | Variável | Botão aparece aos |
|---|---|---|
| `index.html` | `var espera=1020000` | **17:00** |
| `up1/index.html` | `SECONDS_TO_DISPLAY = 385` | **6:25** |
| `dow11/index.html` | `SECONDS_TO_DISPLAY = 75` | **1:15** |
| `upabs2/index.html` | `SECONDS_TO_DISPLAY = 545` | **9:05** |
| `dowup02/index.html` | `SECONDS_TO_DISPLAY = 90` | **1:30** |

⚠️ Esses tempos foram calibrados pelo pitch das VSLs antigas. O `/` e o `/up1` já rodam
VSLs novas da Vturb — reconferir em que minuto o pitch entra nelas e ajustar o número.

## Rastreamento

O `index.html` repassa a query string de entrada (utm_*, fbclid, gclid, sck, src, o que
vier) para o link do checkout da Cakto, para a venda não chegar sem origem na Cakto/UTMify.
Guarda em `sessionStorage` (`cp_qs`) para sobreviver a um reload no meio do quiz. Não
sobrescreve parâmetro que já exista no link do checkout.

UTMify: instalado no `<head>` das 5 páginas do funil (`/`, `/up1`, `/dow11`, `/upabs2`,
`/dowup02`). O snippet é ofuscado; decodificado, ele injeta
`https://cdn.utmify.com.br/scripts/utms/latest.js` com os atributos
`data-utmify-prevent-xcod-sck` e `data-utmify-prevent-subids`. Não está nas páginas
pós-compra (`/app`, `/oraculo`, `/mapa`), onde não há venda.

Pixel Meta: **pendente**. Nenhuma página tem fbq/GTM/GA.

## Checkouts (Cakto)

- Front: `pay.cakto.com.br/utxai3d_1105878` (R$ 77)
- Upsell 1 one-click: oferta `39craow` · downsell `h46677q` · Pix `faptqy9`
- Upsell 2 one-click: oferta `3gc6tmu` · downsell `4kxvpc5` · Pix `33y2caz`

O "SIM" dos upsells é one-click da Cakto: depende de `upsellToken` na query string,
injetado pela Cakto após a compra do front. Abrindo a URL direto, sem token, o botão
falha e cai no `upsell-reject-url` (o downsell) — isso é esperado, não é bug.

## Deploy

Feito pelo CLI, a partir desta pasta:

```bash
vercel --prod
```

O projeto da Vercel **não** está ligado ao repositório do GitHub: `git push` sozinho
não publica.

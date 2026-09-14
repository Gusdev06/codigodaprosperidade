# codigodaprosperidade

Funil completo do Código da Prosperidade. Site estático, sem build.

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

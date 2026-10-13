# Subida feita (2026-09-13) — tudo aponta para os ativos do Nícolas

## Cakto — produtos (produtor: "Íris Monteiro", categoria Desenvolvimento Pessoal)
| Produto | ID | Ofertas | Checkout |
|---|---|---|---|
| Código da Prosperidade🔐 | c638fdc7-c537-40f1-bf76-9433dc228303 | R$ 77,00 (principal) · R$ 57,00 "Código da Prosperidade.🔐(30% OFF)" (back-redirect) | https://pay.cakto.com.br/utxai3d_1105878 · https://pay.cakto.com.br/kgdpt7n |
| NUMEROLOGIA JUDAICA!🧘🏼‍♀️🔓 (bump 1) | 556756ef | R$ 27,70 | ligado no checkout do front, ordem 1, desmarcado |
| 🗺️CHAVE DOS CAMINHOS FINANCEIROS (bump 2) | 3fd4e8b3 | R$ 27,00 | ligado no checkout do front, ordem 2, desmarcado |
| Mapa Astral da Prosperidade 🗺️ (OTO1) | 44e5223c-7803-443b-9d26-2dfbaa828060 | R$ 127 (39craow) · R$ 97 "(DESCONTO EXCLUSIVO 30% OFF)" (h46677q) · R$ 51,30 "(ULTIMA CHANCE 60% OFF)" (faptqy9) | https://pay.cakto.com.br/39craow_1105889 · /h46677q · /faptqy9 |

Capas: front = arquivo original Payt (1254x1254, MD5 6a126a690c042506baf910c67b163390); Mapa Astral = ENTREGA/capas/capa-mapa-astral.png.

## Fluxo pós-compra (Cakto Upsell one-click)
- Página de obrigado do front → https://quizprosperidade.vercel.app/up1 (faixa + headline + VSL up1 + botões aos 385 s; aceite = oferta 39craow → área de membros; recusa → /dow11)
- https://quizprosperidade.vercel.app/dow11 (VSL dow11 + botões aos 75 s; aceite = oferta h46677q; recusa → checkout Pix R$ 51,30 faptqy9)
- Snippets gerados pela Cakto: `_tools/cakto-upsell-oto1.html`, `_tools/cakto-downsell-dow11.html`. VSLs no Vercel Blob (faststart): vsl-up1.mp4, vsl-dow11.mp4.
- OTO2 (Constelação Familiar R$ 197 / downsell R$ 147): NÃO criado — entrega não observada na referência ([LACUNA]).

## Quiz (LP)
- Literal: https://quizprosperidade.vercel.app/quizprosperidade · Homologada: /hquizprosperidade — ambos já com o link do checkout (utxai3d_1105878). Pixel Meta: pendente (precisa do ID do pixel).

## Cakto Members — workspace "Íris Monteiro" (https://aluno.cakto.com.br/app/iris-monteiro)
- Curso "Código da Prosperidade! ⭐" (cmtzsdd9r0003gm0agpluoxcz) — 9 módulos / 19 aulas, texto literal, 6 PDFs originais (m04–m09), associado ao produto c638fdc7. Publicado.
- Curso "MAPA ASTRAL DA PROSPERIDADE! 🗺️" (cmtzsuggj000bgm0bb52mho9e) — 2 módulos / 4 aulas, PDF + áudio 10 min, associado ao produto 44e5223c. Publicado.
- Links do concorrente trocados: apps → /app e /mapa; GPT → /oraculo; CTA "ASSISTIR A AULA GRATUITA AGORA" → checkout 39craow_1105889.

## App próprio (Vercel)
- /app (Home) · /app/jornada.html · /app/bonus.html · /app/onboarding.html · /oraculo · /mapa · /mapa/meu-mapa.html · /mapa/transito.html · /mapa/diario.html
- Conteúdo dos 7 dias e cálculo do mapa: não capturados na referência (atrás de login) → botões levam à área de membros.

## Pendente
1. Pixel Meta (ID) → colar no quiz e nos checkouts (Integrações → Pixel).
2. Campanha Meta: `LITERAL/anuncios-1080p/` + `LITERAL/subida-literal/meta-campanha.md`.
3. Bumps sem entrega na referência (não comprados) — criar conteúdo ou deixar como estão.

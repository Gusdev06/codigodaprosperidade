> REFERÊNCIA LITERAL — montado em 2026-09-13 a partir dos dossiês do run. Não é texto novo.

# ÍNDICE LITERAL — tudo que é cópia palavra por palavra da referência "A Fórmula da Prosperidade" (Código da Prosperidade🔐)

Run: `/Users/nicolas/squads/clone-low-ticket/output/2026-09-12-130611` (`<run>`). Caminhos abaixo são relativos ao run, salvo quando absolutos. Decisão do usuário (2026-09-13): TUDO na versão literal. Nada aqui foi reescrito; onde a fonte não tem o trecho está `[LACUNA]`. A versão homologada (texto novo, `v1/clone/`, `subida/`, `produto-homologado/`, `_deploy3/hquizprosperidade/`) fica como plano B para o que o literal não cobre (lista no fim).

## 1. Mapa do literal (o que existe, onde está, de onde veio)

| Peça | Caminho (literal) | Tamanho | Fonte de origem (dossiê / captura) |
|---|---|---|---|
| Quiz de 9 telas (página de vendas) `/quizprosperidade` — HTML publicável | `_deploy3/quizprosperidade/index.html` (+ `cartas/`, `iris.jpg`, `sensitiva.jpg`, `selo-consulta.png`) | 14.0 KB | `v1/funil-completo.md` Seções 01–09 + VSL (linhas 62–196), lido do `funil-definicao.json` do xquiz; placeholder `{{CHECKOUT_URL}}` |
| Quiz — texto literal tela a tela (markdown) | `v1/clone-original/clone-pagina.md` · `v1/clone-original/clone-pagina.html` | 11.1 KB · 11.8 KB | `v1/funil-completo.md` 62–196 |
| VSL do front 20:06 — vídeo original 720p | `criativos/originais/vsl-quiz-vsl2-braco-live.mp4` (embutida no quiz literal como `vsl-original-2006.mp4` no Vercel Blob) | 89.1 MB | playlist vturb reconstruída (`_tools/pagina/playlists/`), `ffmpeg -c copy` |
| VSL do front — ficha do player, beats, fala completa em blocos + SRT | `v1/clone-original/clone-vsl-front.md` | 61.0 KB | `v1/funil-completo.md` 190–196 e 404–424 · `_tools/vsl-vsl-quiz-vsl2-braco-live.blocks.md` · `criativos/transcricoes/vsl-quiz-vsl2-braco-live.srt` |
| 15 vídeos de anúncio — original 720x1280 (byte-a-byte da Biblioteca) | `LITERAL/anuncios-720p-originais/{slug}.mp4` (15 arquivos) = `criativos/originais/{id}.mp4` | 266 MB | download da Biblioteca de Anúncios em 2026-09-12 13:16 |
| 15 vídeos de anúncio — upscale 1080x1920 | `LITERAL/anuncios-1080p/{slug}-1080p.mp4` (15 arquivos presentes em 2026-09-13; conferir que o último terminou de gravar) | 1,1 GB | gerados a partir dos 720p |
| Capas dos 15 anúncios 1080x1920 | `criativos/originais/{id}-capa.jpg` | — | Biblioteca de Anúncios |
| Anúncios leva 1 (6) — ficha literal + transcrição com timestamps + SRT | `v1/clone-original/clone-anuncios.md` | 48.4 KB | `v1/anuncios-referencia.md` + `v1/decupagem-criativos.md` + `criativos/transcricoes/{id}.srt` |
| Anúncios leva 1 (6) — tabela de cenas, ficha de voz, observações de edição | `v1/clone-original/clone-roteiros-video.md` | 43.2 KB | `v1/decupagem-criativos.md` |
| **Anúncios leva 2 (9) — ficha literal + transcrição com timestamps + cenas + voz + edição + SRT** | `LITERAL/anuncios-leva2-literal.md` | 157.4 KB | `v1/anuncios-referencia.md` 117–276 · `v1/decupagem-criativos.md` 217–589 · `criativos/transcricoes/{id}.srt` (tabela de linhas no fim do arquivo) |
| Checkout 1, bumps, todos os checkouts, pós-compra, OTO1 + VSL 10:20, downsell 1 + VSL 1:44, OTO2/downsell 2 + VSLs, escadas | `v1/clone-original/clone-bump-upsell.md` | 62.6 KB | `v1/funil-completo.md` 197–362, 441–518, 787–803 · `_tools/vsl-vsl-up1.blocks.md`, `vsl-vsl-dow11`, `vsl-vsl-upabs2`, `vsl-vsl-dowup02` |
| **OTO2 `/upabs2/` e Downsell 2 `/dowup02/` — páginas, botões, preços, fala completa + SRT com timestamps** | `LITERAL/oto2-downsell2-literal.md` | 56.7 KB | `v1/clone-original/clone-bump-upsell.md` 64–79, 208–270 · `_tools/pagina/upsell-upabs2.json`, `upsell-dowup02.json` · `criativos/transcricoes/vsl-upabs2.srt`, `vsl-dowup02.srt` |
| VSLs de upsell — vídeos originais 540x720 | `criativos/originais/vsl-up1.mp4` (10:20) · `vsl-dow11.mp4` (1:44) · `vsl-upabs2.mp4` (11:25) · `vsl-dowup02.mp4` (2:00) | 52.6 MB · 11.9 MB · 60.2 MB · 11.5 MB | playlists vturb, `ffmpeg -c copy` |
| Produto do front — 6 PDFs originais | `produto-literal/front/m04-fases-da-lua.pdf` · `m05-elevacao-vibracao-7-dias.pdf` · `m06-casa-ima-de-manifestacao.pdf` · `m07-guia-de-cristais.pdf` · `m08-protecao-energetica.pdf` · `m09-7-presentes.pdf` | 13,4 MB | anexos baixados da área de membros Payt (`criativos/originais/produto/`) |
| Produto do front — texto literal das 19 aulas (9 módulos) | `_tools/lessons-text.md` · `v1/clone-original/clone-produto.md` · `LITERAL/subida-literal/cakto-produto.md` seção 9 | 11.6 KB · 71.3 KB | dump Inertia da área de membros (`_tools/lesson-codigo-*.txt`), prints `capturas/pagina/produto-codigo-*.png` |
| Produto do OTO1 — PDF 8 p. + MP3 10:04 + texto das 4 aulas | `produto-literal/oto1/mapa-astral-da-prosperidade.pdf` · `produto-literal/oto1/audio-frequencia-10min.mp3` · texto em `_tools/lessons-text.md` (mapa-*) | 0.0 MB · 18.4 MB | área de membros Payt, curso `0ZGNOO1E` |
| Texto extraído dos PDFs | `_tools/pdf-codigo-m09-a01-lesson-attachment-69dd37142adca-8499.txt` (7 Presentes) · `_tools/pdf-mapa-m02-a01-MAPA_ASTRAL_DA_PROSPERIDADE.pd.txt` (Mapa Astral) | 18.4 KB · 12.2 KB | pdftotext; os outros 5 PDFs são só imagem (Gamma), sem texto extraível |
| Índice do produto literal | `produto-literal/INDICE.md` | 1.6 KB | — |
| **Subida — Cakto (produto, checkout, bumps, OTO1, downsell, OTO2, back-redirect, área de membros com texto literal das aulas)** | `LITERAL/subida-literal/cakto-produto.md` | 48.8 KB | molde `subida/cakto-produto.md`; valores de `v1/funil-completo.md`, `clone-bump-upsell.md`, `_tools/lessons-text.md`, `_tools/pagina/upsell-*.json` |
| **Subida — Meta (15 anúncios: slug, headline, CTA, display link, URL, vídeo 1080p)** | `LITERAL/subida-literal/meta-campanha.md` | 38.6 KB | molde `subida/meta-campanha.md`; valores de `v1/anuncios-referencia.md` e `_memory/anuncios-registro.md` |
| **Subida — checklist** | `LITERAL/subida-literal/checklist-subida.md` | 11.2 KB | molde `subida/checklist-subida.md` |
| Índice do pacote literal leva 1 | `v1/clone-pacote-original.md` | 8.2 KB | — |
| Obrigado / e-mails — o que o dossiê registra (LACUNA declarada) | `v1/clone-original/clone-obrigado-emails.md` | 1.5 KB | `v1/funil-completo.md` 519–522, 784–786 |
| Criativos estáticos | `v1/clone-original/clone-criativos-estaticos.md` (a referência não tem imagem estática) | 0.4 KB | `v1/decupagem-criativos.md` 590–592 |
| Dossiês de origem (não editar) | `v1/anuncios-referencia.md` · `v1/decupagem-criativos.md` · `v1/funil-completo.md` · `v1/pagina-e-funil-referencia.md` | 50.3 KB · 162.5 KB · 99.4 KB · 46.5 KB | capturas de 2026-09-12 |
| Capturas (prints) | `capturas/anuncios/{id}.png` (15) · `capturas/pagina/*.png` (83: quiz, checkouts 1–10, bumps, upsells, produto) | — | Playwright, 2026-09-12 |

## 2. Os 15 anúncios (slug → arquivo literal)

| # | Library ID | Slug | Dur. | Headline literal | CTA | Display link | Ficha + transcrição | Vídeo 1080p |
|---|---|---|---|---|---|---|---|---|
| 01 | 971223535998283 | `01-afirmacao-deposito-por-engano-cravos-88s` | 1:28 | [ausente] | Ver detalhes | HTTPS://FREQUENCIADIVINA.COM.BR | `v1/clone-original/clone-anuncios.md` + `clone-roteiros-video.md` | `LITERAL/anuncios-1080p/01-afirmacao-deposito-por-engano-cravos-88s-1080p.mp4` (ok) |
| 02 | 1387749862852694 | `02-curiosidade-novela-jantar-sogro-101s` | 1:41 | Descubra o que pode estar impedindo você de vencer | Saiba mais | codigosdebencaos.com | `v1/clone-original/clone-anuncios.md` + `clone-roteiros-video.md` | `LITERAL/anuncios-1080p/02-curiosidade-novela-jantar-sogro-101s-1080p.mp4` (ok) |
| 03 | 1034161386284829 | `03-beneficio-pix-45mil-bola-de-cristal-76s` | 1:16 | Descubra o que pode estar impedindo você de vencer | Saiba mais | HTTPS://CODIGOSDEBENCAOS.COM | `v1/clone-original/clone-anuncios.md` + `clone-roteiros-video.md` | `LITERAL/anuncios-1080p/03-beneficio-pix-45mil-bola-de-cristal-76s-1080p.mp4` (ok) |
| 04 | 1113476378035980 | `04-afirmacao-sao-miguel-carta-ouro-5-horas-122s` | 2:02 | Descubra o que está impedindo você de avançar | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR | `v1/clone-original/clone-anuncios.md` + `clone-roteiros-video.md` | `LITERAL/anuncios-1080p/04-afirmacao-sao-miguel-carta-ouro-5-horas-122s-1080p.mp4` (ok) |
| 05 | 1036730742562449 | `05-urgencia-universo-te-encontrou-zodiaco-138s` | 2:18 | Descubra o que está impedindo você de avançar | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR | `v1/clone-original/clone-anuncios.md` + `clone-roteiros-video.md` | `LITERAL/anuncios-1080p/05-urgencia-universo-te-encontrou-zodiaco-138s-1080p.mp4` (ok) |
| 06 | 1075528602000857 | `06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s` | 1:59 | ⭐⭐⭐⭐⭐ | Saiba mais | frequenciadivina.com.br | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s-1080p.mp4` (ok) |
| 07 | 1327497469461669 | `07-beneficio-oracao-crianca-ajoelhada-106s` | 1:46 | ⭐⭐⭐⭐⭐ | Saiba mais | codigodaprosperid.com.br | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/07-beneficio-oracao-crianca-ajoelhada-106s-1080p.mp4` (ok) |
| 08 | 4435978860052405 | `08-afirmacao-sao-bento-moeda-atras-da-porta-113s` | 1:53 | Descubra o que está impedindo você de avançar | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/08-afirmacao-sao-bento-moeda-atras-da-porta-113s-1080p.mp4` (ok) |
| 09 | 1735350944394298 | `09-curiosidade-objeto-amaldicoado-tarot-150s` | 2:30 | Descubra o que está impedindo você de avançar | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/09-curiosidade-objeto-amaldicoado-tarot-150s-1080p.mp4` (ok) |
| 10 | 2069028650653450 | `10-afirmacao-carta-da-riqueza-5-of-cups-129s` | 2:09 | Descubra o que está impedindo você de avançar | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/10-afirmacao-carta-da-riqueza-5-of-cups-129s-1080p.mp4` (ok) |
| 11 | 910321935107125 | `11-afirmacao-arruda-espada-sao-jorge-77s` | 1:17 | Descubra o que pode estar impedindo você de vencer | Saiba mais | codigosdagraca.com | `v1/clone-original/clone-anuncios.md` + `clone-roteiros-video.md` | `LITERAL/anuncios-1080p/11-afirmacao-arruda-espada-sao-jorge-77s-1080p.mp4` (ok) |
| 12 | 1136473299078186 | `12-pergunta-inveja-antiga-alho-15s-116s` | 1:56 | Descubra o que pode estar impedindo você de vencer | Saiba mais | codigosdagraca.com | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/12-pergunta-inveja-antiga-alho-15s-116s-1080p.mp4` (ok) |
| 13 | 1333202536540714 | `13-curiosidade-chave-bmw-concessionaria-95s` | 1:35 | Descubra o que pode estar impedindo você de vencer | Saiba mais | codigosdagraca.com | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/13-curiosidade-chave-bmw-concessionaria-95s-1080p.mp4` (ok) |
| 14 | 1618190073029406 | `14-afirmacao-maquete-casa-sao-miguel-152s` | 2:32 | ⭐⭐⭐⭐⭐ | Saiba mais | frequenciadivina.com.br | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/14-afirmacao-maquete-casa-sao-miguel-152s-1080p.mp4` (ok) |
| 15 | 1741748180279919 | `15-afirmacao-arrume-as-malas-chave-de-ouro-156s` | 2:36 | Descubra o que está impedindo você de avançar | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR | `LITERAL/anuncios-leva2-literal.md` | `LITERAL/anuncios-1080p/15-afirmacao-arrume-as-malas-chave-de-ouro-156s-1080p.mp4` (ok) |

URL final de todos na referência: `https://codigodaprosperidades.online/aba` (concorrente) → no clone: `https://quizprosperidade.vercel.app/quizprosperidade` (placeholder). Texto primário e descrição: ausentes em todos.

## 3. Preços literais da escada (checkout ou fala da VSL)

| Etapa | Nome literal | Preço | Onde está o literal |
|---|---|---|---|
| Front | Código da Prosperidade🔐 | R$ 77,00 (1x–12x R$ 7,96; Pix R$ 77) | `LITERAL/subida-literal/cakto-produto.md` §1 |
| Back-redirect | Código da Prosperidade.🔐(30% OFF) | R$ 57,00 Pix | §6 |
| Bump 1 | NUMEROLOGIA JUDAICA!🧘🏼‍♀️🔓 | de R$ 59,90 por R$ 27,70 | §2 |
| Bump 2 | 🗺️CHAVE DOS CAMINHOS FINANCEIROS | de R$ 39,90 por R$ 27,00 | §3 |
| OTO1 `/up1/` | Mapa Astral da Prosperidade 🗺️ | R$ 127 Pix ou 12x R$ 13,00 (falado) / 12x R$ 13,13 (checkout 9) | §4 · `clone-bump-upsell.md` |
| Downsell 1 `/dow11/` | Mapa Astral com desconto | R$ 97 (12x R$ 10,00) → "Não" Pix R$ 51,30 | §5 |
| OTO2 `/upabs2/` | Constelação Familiar da Abundância💫 | R$ 197 Pix ou 12x R$ 20,37 | `LITERAL/oto2-downsell2-literal.md` |
| Downsell 2 `/dowup02/` | Constelação guiada | R$ 147 (12x R$ 15,20) → "Não" 12x R$ 5,90 | idem |
| Upsell de membros | Mapa Astral | 12x R$ 13,13 | `cakto-produto.md` §9c |
| Downsell de membros | Mapa Astral "De R$127 por R$67" | R$ 67 Pix | §9c (texto literal completo) |

## 4. O que NÃO existe no literal (e o plano B)

| Item | Por que não existe | Plano B (versão homologada) |
|---|---|---|
| Página de obrigado | não observada (compra não finalizada; usuário não enviou print) | `subida/cakto-produto.md` §7 |
| E-mails pós-compra (acesso, D1, D3) | não observados (caixa de e-mail fora do escopo) | `subida/cakto-produto.md` §8 (D0/D1/D3) |
| Áudios de ritual (3 x 5 min prometidos na VSL front) | a referência não entrega: 0 áudios na área de membros | `produto-homologado/front/` (roteiros TTS em `v1/clone/clone-produto.md` Parte 2) |
| Entrega dos bumps (Numerologia Judaica, Chave dos Caminhos) | não comprados | `produto-homologado/bump1/`, `bump2/` |
| Entrega do OTO2 (21 simpatias, corte de cordão, mapa de padrões) e do Downsell 2 | não comprados; só as VSLs literais existem | `v1/clone/clone-oto2-downsell2.md` (páginas + VSLs novas) e `v1/clone/clone-produto-leva2.md` (21 dias, texto novo); sem PDF gerado em `produto-homologado/` |
| Entrega do Downsell 1 ("áudio por signo") | o one-click libera o mesmo curso do OTO1; nada separado | `produto-homologado/oto1/` (12 áudios por signo) |
| Lip-sync / voz nova / apresentadora própria nos 15 vídeos | o literal são os vídeos originais com os apresentadores do concorrente | `criativos/clone/video/` (leva 1: A01–A05, A11 com voz nova) + `v1/clone/clone-roteiros-video-leva2.md` |
| Capas (front 1254x1254, bump 1 382x382, bump 2 1240x1240) | não baixadas; só URL e print | produzir (direção em `v1/clone/clone-bump-upsell.md`) |
| Apps externos (sensitivaprospera.vercel.app, codigo-de-prosperidade.lovable.app, astral-prosperity-path.lovable.app) e GPT "GPTarot IA" | são do concorrente; um pede e-mail, o GPT é inacessível deslogado | omitir as aulas ou criar app/GPT próprio |
| Estrutura de campanha Meta (público, orçamento, posicionamentos, pixel) | a Biblioteca de Anúncios não mostra | `subida/meta-campanha.md` §1–3 |
| Garantia do front | ausente na referência | 7 dias (Cakto exige) |
| Título dentro do frame dos players de `/dow11/`, `/upabs2/`, `/dowup02/` | não transcrito do print (só o do `/up1/` foi lido) | — |
| Os ~60 anúncios restantes da Biblioteca (~75 no total) | escopo limitado ao HTML inicial (rate limit) | próximo run |

## 5. Aviso
O pacote literal é cópia integral de material de terceiros (vídeos com os apresentadores do concorrente, nome de produto igual, depoimentos não verificados, PDFs assinados "Cassandra Montenegro", apps e domínios alheios). Publicar assim é decisão do usuário; o `checklist-subida.md` literal marca o que tem de ser trocado obrigatoriamente (URL final, display link, links de apps).

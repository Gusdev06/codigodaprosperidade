## 4. Upsell one-click (OTO1): Mapa Astral da Prosperidade 🗺️ — página `/up1/`

Antes: criar como produto separado (área de membros; entrega literal = curso "MAPA ASTRAL DA PROSPERIDADE! 🗺️", 2 módulos / 4 aulas, anexos em `produto-literal/oto1/`; ver seção 9b).

| Campo Cakto (upsell) | Valor literal | Observação |
|---|---|---|
| Nome do produto | `[colar]` Mapa Astral da Prosperidade 🗺️ | (32 car.) Nome nos checkouts 5, 6, 9, 10; na área de membros "MAPA ASTRAL DA PROSPERIDADE! 🗺️". |
| Preço | R$ 127,00 no Pix ou 12x de R$ 13,00 (falado na VSL 06:01–06:33); checkout 9 mostra 12x de R$ 13,13 | Sem preço riscado na página; âncora falada "cobro R$ 6 mil por este serviço". |
| Tipo de fluxo | Upsell pós-compra one-click (Payt `payt_action="oneclick_buy" data-object="RWD2B4-RAZ97D"`) | Cakto: "Upsell one-click". Recusa → downsell (item 5). |
| Página do upsell | WordPress/Elementor `https://codigodaprosperidades.online/up1/` (`<title>` "UPSELL 1 – .") → no clone: página própria com a VSL e os dois botões | Estrutura: faixa → player vturb 3:4 (`6a46eca3d275919e5180106f`, "VSL_UPSELL_01_V02_OF075 - 127$ - 1,1x - ON") → botões ocultos em `div.esconder`. |
| Faixa de aviso (topo) | `[colar]` Atenção! Para não ocorrer erros na sua compra, não volte, não atualize e não feche esta página! | (97 car.) Vermelha, texto branco. |
| Título sobre o vídeo (dentro do frame/thumbnail) | `[colar]` O que aconteceu depois que você fez a sua compra não estava previsto na sua leitura! 👇 | (88 car.) Lido no print. Overlay do player: "Tenho algo pra te dizer!" / "Clique para ouvir". |
| Headline (abaixo do vídeo) | `[LACUNA: não existe headline em HTML — a página é só faixa + player + botões]` | |
| Corpo | `[LACUNA: não existe]` | |
| Stack em tela | `[LACUNA: não existe em texto; falado na VSL 06:33–08:05: 3 presentes — Decreto de Ativação ao Acordar; Termômetro de Frequência; Leitura dos Pentáculos]` | |
| Botão de aceite | `[colar]` SIM, QUERO O MAPA DA PROSPERIDADE! → `{{OTO1_ACCEPT_URL}}` | (34 car.) Aparece aos 385 s (06:25) — `SECONDS_TO_DISPLAY = 385`, `localStorage` 14 dias. Estilo: verde `#22c55e`, branco 700, 20–21 px, `border-radius 32px`, largura total. |
| Botão de recusa | `[colar]` Não, Obrigado. → `{{DOWNSELL_URL}}` (referência: `/dow11/`) | (14 car.) Botão Elementor pequeno cinza. |
| Back-redirect | → Checkout 5 (`src=upback`): "Mapa Astral da Prosperidade 🗺️ (DESCONTO EXCLUSIVO 30% OFF)", faixa "CUPOM APLICADO 25%", R$ 97,00 (1x 97,00 … 12x 10,03) | Na Cakto: oferta R$ 97 do OTO1 no back-redirect (se o campo existir). |
| Garantia | falada (contraditória): "em até 10 dias, se não manifestar pelo menos R$ 1.000…"; "você tem 60 dias de garantia total, 7 dias para testar" (VSL 08:05–09:09); nada escrito na página | Na Cakto: campo obrigatório → 7 dias. |
| Vídeo | `criativos/originais/vsl-up1.mp4` (10:20, 540x720) — fala completa em `v1/clone-original/clone-bump-upsell.md` ("Transcrição literal completa da VSL do OTO1") e `criativos/transcricoes/vsl-up1.srt` | Vídeo do concorrente (apresentadora "Cassandra Montenegro"). |
| Print | `capturas/pagina/upsell-up1.png` | |

---

## 5. Downsell 1: Mapa Astral com desconto — página `/dow11/`

| Campo Cakto (downsell) | Valor literal | Observação |
|---|---|---|
| Nome do produto | Mesmo produto do OTO1 ("Mapa Astral da Prosperidade 🗺️"); falado: "áudio de elevação de frequência para cada um dos 12 signos" | O one-click libera o mesmo curso (`RAZ97D`); o "áudio por signo" não existe como entregável observado. |
| Preço | R$ 97,00 ou 12x de R$ 10,00 (falado 01:08–01:39); âncora falada "sairia por R$ 127,00" | one-click Payt `data-object="RDBEXL-RAZ97D"`. |
| Tipo de fluxo | Downsell da recusa do OTO1, aceite em 1 clique; recusa → Checkout 6 (Pix R$ 51,30) | |
| Faixa de aviso | nenhuma (`/dow11/` sem faixa; `<title>` "DOWNSELL UP 1 – .") | |
| Headline / Corpo / Preço em tela | `[LACUNA: não existe texto em HTML; só player + botões]` | |
| Botão de aceite | `[colar]` SIM, QUERO O MAPA COM DESCONTO! → `{{DOWNSELL_ACCEPT_URL}}` | (31 car.) Aparece aos 75 s (01:15). |
| Botão de recusa | `[colar]` Não, obrigado. → Checkout 6: Payt `4cf090c1…?payment=pix&src=backdoBackUp01codigo`, "Mapa Astral da Prosperidade 🗺️ (ULTIMA CHANCE 60% OFF)", "CUPOM APLICADO 60%", contador começa em 14:54, aba Cartão com selo "DESCONTO 10%", **R$ 51,30 no Pix** | Na Cakto: oferta Pix R$ 51,30 do OTO1 como destino do "Não". |
| Back-redirect | → Checkout 6 (`src=backdoBackUp01`) | |
| Garantia | nenhuma falada | |
| Vídeo | `criativos/originais/vsl-dow11.mp4` (1:44) — fala completa em `clone-bump-upsell.md` ("Transcrição literal completa da VSL do downsell") · `criativos/transcricoes/vsl-dow11.srt` | |
| Print | `capturas/pagina/upsell-dow11.png` | |

---

## 5b. OTO2: Constelação Familiar da Abundância💫 — página `/upabs2/` (R$ 197) e Downsell 2 `/dowup02/` (R$ 147)

Ficha completa, fala das VSLs com timestamps e botões literais: `LITERAL/oto2-downsell2-literal.md`. Resumo dos campos:

| Campo Cakto | OTO2 (`/upabs2/`) | Downsell 2 (`/dowup02/`) |
|---|---|---|
| Nome do produto | `[colar]` Constelação Familiar da Abundância💫 (checkouts 7 e 8) | mesmo produto ("Constelação guiada", falado) |
| Preço | R$ 197,00 no Pix ou 12x de R$ 20,37 (falado 09:02–09:34); one-click Payt `LJE9P4-L8MZ25` | R$ 147,00 ou 12x de R$ 15,00 (falado); Checkout 7 mostra 12x de R$ 15,20 ("ÚLTIMA CHANCE 30% DE DESCONTO", "CUPOM APLICADO 30%") |
| Faixa de aviso | `[colar]` Para evitar e erros na sua compra, não volte, não atualize nem feche esta página. (83 car., [sic]) | nenhuma |
| Botão de aceite | `[colar]` SIM, QUERO A CONSTELAÇÃO FAMILIAR! (aos 545 s = 09:05) | `[colar]` ✨ Sim, Quero Com o Desconto! (aos 90 s = 01:30) → Checkout 7 |
| Botão de recusa | `[colar]` Não, obrigado. → `/dowup02/` | `[colar]` Não, obrigado. → Checkout 8: "Constelação Familiar da Abundância💫 (70% DE DESCONTO)", "CUPOM APLICADO 70%", 12x de R$ 5,90 |
| Back-redirect | → Checkout 5 (`src=backredirectup02`) | → Checkout 6 (`src=backdoBackUp01`) |
| Garantia | falada: reembolso integral "sem perguntas dentro de sete dias após a sua confirmação" (10:05–10:37) | nenhuma falada |
| Vídeo | `criativos/originais/vsl-upabs2.mp4` (11:25) | `criativos/originais/vsl-dowup02.mp4` (2:00) |
| Entrega | `[LACUNA: não comprado]` — prometido: 21 simpatias (1/dia, 21 dias), Ritual do corte de cordão ancestral, Mapa de padrões de linhagem, constelação "ao vivo" com 50 vagas | `[LACUNA: não comprado]` — prometido: as mesmas 21 simpatias gravadas |

---


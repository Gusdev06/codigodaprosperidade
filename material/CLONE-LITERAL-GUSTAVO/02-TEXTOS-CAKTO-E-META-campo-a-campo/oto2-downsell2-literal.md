> REFERÊNCIA LITERAL — montado em 2026-09-13 a partir dos dossiês do run. Não é texto novo.

# OTO2 (`/upabs2/`) e Downsell 2 (`/dowup02/`) — versão literal da referência

Fontes: `v1/clone-original/clone-bump-upsell.md` (já literal; seções "Páginas pós-compra", "OTO2", "Downsell 2" e as duas transcrições completas, copiadas sem alteração), `v1/funil-completo.md` (mesmas seções, origem), `_tools/pagina/upsell-upabs2.json` e `upsell-dowup02.json` (texto/links/botões lidos do HTML das páginas), `criativos/transcricoes/vsl-upabs2.srt` e `vsl-dowup02.srt` (Whisper large-v3-turbo, legenda completa com timestamps). Vídeos: `criativos/originais/vsl-upabs2.mp4` (540x720, 11:25) e `criativos/originais/vsl-dowup02.mp4` (540x720, 2:00).

Produto entregue pelo OTO2 e pelo Downsell 2: `[LACUNA: não capturado — a usuária não comprou; ver funil-completo.md, Tabela final da escada]`.

## 1. Páginas — o que está escrito no HTML (literal)

### OTO2 · `/upabs2/`
- **URL:** https://codigodaprosperidades.online/upabs2/
- **`<title>`:** "UPSELL 2 – ."
- **Texto visível na página (fora do player):** "Para evitar e erros na sua compra, não volte, não atualize nem feche esta página."
- **Headings (h1–h6):** nenhum
- **Título dentro do frame do player / thumbnail:** [LACUNA: não lido no print `capturas/pagina/upsell-upabs2.png`; o dossiê só registra o título do frame do `/up1/`]
- **Player vturb:** `vid-6a459f558cd449dcae5819ec` · script `https://scripts.converteai.net/37209f46-f3bf-4549-a72e-f25bf0388e60/players/6a459f558cd449dcae5819ec/v4/player.js`
- **Botões ocultos até:** `SECONDS_TO_DISPLAY = 545` s (classe `.esconder`, `localStorage` por 14 dias)
- **Links/botões (texto literal → destino):**
  - "SIM, QUERO A CONSTELAÇÃO FAMILIAR!" → `https://codigodaprosperidades.online/upabs2/#` (oculto até o tempo acima)
  - "Não, obrigado." → `https://codigodaprosperidades.online/dowup02/?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=` (oculto até o tempo acima)
- **Print:** capturas/pagina/upsell-upabs2.png · HTML bruto: `_tools/pagina/wp-upabs2.html`

### Downsell 2 · `/dowup02/`
- **URL:** https://codigodaprosperidades.online/dowup02/
- **`<title>`:** "DOWNSELL UP 2 – ."
- **Texto visível na página (fora do player):** nenhum (página só com player e botões)
- **Headings (h1–h6):** nenhum
- **Título dentro do frame do player / thumbnail:** [LACUNA: não lido no print `capturas/pagina/upsell-dowup02.png`; o dossiê só registra o título do frame do `/up1/`]
- **Player vturb:** `vid-6a4c68d8486ec3a44b98718c` · script `https://scripts.converteai.net/37209f46-f3bf-4549-a72e-f25bf0388e60/players/6a4c68d8486ec3a44b98718c/v4/player.js`
- **Botões ocultos até:** `SECONDS_TO_DISPLAY = 90` s (classe `.esconder`, `localStorage` por 14 dias)
- **Links/botões (texto literal → destino):**
  - "Sim, Quero Com o Desconto!" → `https://checkout.payt.com.br/1ef10e2c14b93723d04f75a09d65d88d?split=12&src=backredirectup02&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=` (oculto até o tempo acima)
  - "Não, obrigado." → `https://checkout.payt.com.br/117164c17de9189b2e747a86836eaefa?split=12&src=backdobackup02&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=&sck=` (oculto até o tempo acima)
- **Imagens:** `https://s.w.org/images/core/emoji/17.0.2/svg/2728.svg` (alt "✨")
- **Print:** capturas/pagina/upsell-dowup02.png · HTML bruto: `_tools/pagina/wp-dowup02.html`

Observação lida do dossiê (literal): o botão "SIM, QUERO A CONSTELAÇÃO FAMILIAR!" do `/upabs2/` é one-click da Payt (`<a href="#" payt_action="oneclick_buy" data-object="LJE9P4-L8MZ25">`), cobra no cartão já usado, sem novo checkout. O `/dowup02/` não usa one-click: os dois botões vão para checkouts Payt (7 e 8).

## 2. Escada pós-compra (tabela literal do dossiê — linhas de OTO2 e Downsell 2 em contexto)

As 7 páginas WordPress/Elementor em `codigodaprosperidades.online` abrem sem compra (HTTP 200). Estrutura idêntica: faixa de aviso no topo (quando há), player vturb 3:4 com o **título da página dentro do frame do vídeo/thumbnail** (não há headline em HTML), botão "SIM" e botão "Não" escondidos numa `div.esconder` até `SECONDS_TO_DISPLAY`. O "SIM" dos upsells 1 e 2 é **one-click da Payt** (`<a href="#" payt_action="oneclick_buy" data-object="…">`, cobra no cartão já usado, sem novo checkout). Escada resultante:

| Etapa | URL | Vídeo (player / nome interno / duração) | Botão aparece | CTA SIM → destino | CTA NÃO → destino | Back-redirect | Print |
|---|---|---|---|---|---|---|---|
| Upsell 1 | `/up1/` (título "UPSELL 1") | `6a46eca3d275919e5180106f` / "VSL_UPSELL_01_V02_OF075 - 127$ - 1,1x - ON" / 10:20 (620 s) | 385 s = 6min25 | "SIM, QUERO O MAPA DA PROSPERIDADE!" → one-click Payt `data-object="RWD2B4-RAZ97D"` (R$ 127, valor lido no nome do player e no `/dowareademembros/`: "De R$127") | "Não, Obrigado." → `/dow11/` (com UTMs repassadas) | → Checkout 5 (`src=upback`) | upsell-up1.png |
| Downsell 1 | `/dow11/` ("DOWNSELL UP 1") | `6a4c661b486ec3a44b987030` / "OF075_VSL_DOWNSELL_V01_UPSELL_01 - 127 POR 97  - ON" / 1:44 (104 s) | 75 s = 1min15 | "SIM, QUERO O MAPA COM DESCONTO!" → one-click Payt `data-object="RDBEXL-RAZ97D"` (R$ 97) | "Não, obrigado." → Checkout 6 (Pix R$ 51,30, `src=backdoBackUp01codigo`) | → Checkout 6 (`src=backdoBackUp01`) | upsell-dow11.png |
| Upsell 2 | `/upabs2/` ("UPSELL 2") | `6a459f558cd449dcae5819ec` / "VSL_UPSELL_02_V01_OF075 - R$ 197 - 1,1x - ON" / 11:25 (685 s) | 545 s = 9min05 | "SIM, QUERO A CONSTELAÇÃO FAMILIAR!" → one-click Payt `data-object="LJE9P4-L8MZ25"` (R$ 197) | "Não, obrigado." → `/dowup02/` | → Checkout 5 (`src=backredirectup02`) | upsell-upabs2.png |
| Downsell 2 | `/dowup02/` ("DOWNSELL UP 2") | `6a4c68d8486ec3a44b98718c` / "OF075_VSL_DOWNSELL_V01_UPSELL_02 - 197 POR 147 - ON" / 2:00 (120 s) | 90 s = 1min30 | "✨ Sim, Quero Com o Desconto!" → Checkout 7 (12x R$ 15,20 ≈ R$ 147) | "Não, obrigado." → Checkout 8 (12x R$ 5,90, "70% DE DESCONTO") | → Checkout 6 (`src=backdoBackUp01`) | upsell-dowup02.png |
| Upsell na área de membros | `/upareademmembros/` ("UPSELL MEMBERS") | mesmo player do Upsell 1 (`6a46eca3…`) | 365 s = 6min05 | "Sim, Quero o Mapa Da Prosperidade!" → Checkout 9 (12x R$ 13,13 ≈ R$ 127) | "Não, obrigado." → `/dowareademembros/` | → Checkout 5 (`src=upbackmembers`) | upsell-upareademmembros.png |
| Downsell da área de membros | `/dowareademembros/` | sem vídeo (página de texto) | imediato | "✨ Quero meu Mapa Astral da Prosperidade por R$67" e "🌟 Sim, quero aproveitar essa janela por R$67" → Checkout 10 (Pix R$ 67,00) | "Não, prefiro fechar essa janela e perder essa oportunidade." → `#` (sem destino) | nenhum | upsell-dowareademembros.png |
| Split de entrada | `/aba/` | sem vídeo | — | redireciona para o quiz | — | → Checkout 4 (`src=backpv`) | aba-redirect-resultado.png |

Faixas literais no topo: `/up1/` "Atenção! Para não ocorrer erros na sua compra, não volte, não atualize e não feche esta página!" (vermelha, texto branco) · `/upabs2/` "Para evitar e erros na sua compra, não volte, não atualize nem feche esta página." · `/upareademmembros/` "Para evitar cobranças duplicadas e erros no pedido, não volte, não atualize nem feche esta página." · `/dow11/` e `/dowup02/` sem faixa. Título dentro do frame do Upsell 1 (lido no print): "O que aconteceu depois que você fez a sua compra não estava previsto na sua leitura! 👇". Overlay do player: "Tenho algo pra te dizer!" / "Clique para ouvir".

Botões dos upsells (estilo lido no HTML): verde `#22c55e`, texto branco 700, 20–21 px, `border-radius 32px`, largura total; "Não" = botão Elementor pequeno cinza.

## 3. Checkouts ligados ao OTO2/Downsell 2 (linhas literais da tabela "Todos os checkouts")

| # | Origem | Plataforma / URL | Produto (nome no checkout) | Preço | Parcelas | Bumps | Print |
| 1 | VSL 2 braço ao vivo | Payt `2b77fbea…?&src=F2` | Código da Prosperidade🔐 | R$ 77,00 | 1x–12x (12x R$ 7,96) | Numerologia Judaica 59,90→27,70; Chave dos Caminhos 39,90→27,00 (ambos desmarcados, ocultos até digitar e-mail) | checkout-1.png, order-bump-1.png |
| 5 | Back-redirect de `/up1/` (`src=upback`) e `/upareademmembros/` (`src=upbackmembers`) e `/upabs2/` (`src=backredirectup02`) | Payt `ff5f1683…` | Mapa Astral da Prosperidade 🗺️ (DESCONTO EXCLUSIVO 30% OFF) · faixa "CUPOM APLICADO 25%" | R$ 97,00 | 1x 97,00 · 2x 51,05 · 3x 34,62 · 4x 26,40 · 5x 21,48 · 6x 18,20 · 7x 15,86 · 8x 14,11 · 9x 12,74 · 10x 11,66 · 11x 10,77 · 12x 10,03 | nenhum | checkout-5.png |
| 6 | "Não, obrigado." de `/dow11/` e back-redirect de `/dow11/` e `/dowup02/` | Payt `4cf090c1…?payment=pix&src=backdoBackUp01codigo` | Mapa Astral da Prosperidade 🗺️ (ULTIMA CHANCE 60% OFF) · "CUPOM APLICADO 60%" · aba Cartão com selo "DESCONTO 10%" | **R$ 51,30** no Pix | — | nenhum | checkout-6.png |
| 7 | "✨ Sim, Quero Com o Desconto!" de `/dowup02/` | Payt `1ef10e2c…?split=12&src=backredirectup02` | Constelação Familiar da Abundância💫 (ÚLTIMA CHANCE 30% DE DESCONTO) · "CUPOM APLICADO 30%" | 12x de R$ 15,20 (≈ R$ 147) | padrão 12x | nenhum | checkout-7.png |
| 8 | "Não, obrigado." de `/dowup02/` | Payt `117164c1…?split=12&src=backdobackup02` | Constelação Familiar da Abundância💫 (70% DE DESCONTO) · "CUPOM APLICADO 70%" | 12x de R$ 5,90 | padrão 12x | nenhum | checkout-8.png |

Todos os checkouts Payt (1, 2, 4–10) usam o mesmo esqueleto: barra colorida no topo com contador, imagem + nome do produto, E-mail, Telefone, abas Cartão/Pix, botão verde, depoimentos (só nos de produto principal), selo "AMBIENTE SEGURO", rodapé legal Payt, notificação "N pessoas estão comprando… agora". Os de upsell (5–10) escondem Nome/CPF do mesmo jeito. Compra não finalizada em nenhum.

## 4. Preços (linhas literais da escada observada)

| Degrau | Oferta | Preço | Âncora declarada |
| Front | Código da Prosperidade🔐 | R$ 77,00 | nenhuma (Lastlink: "Em até 9x de R$ 10,04") |
| Upsell 2 | Constelação Familiar da Abundância | R$ 197 (one-click) | — |
| Downsell 2 | Constelação (197 por 147) | 12x R$ 15,20 | R$ 197 |
| "Não" do downsell 2 | Constelação (70 % OFF) | 12x R$ 5,90 | — |

## 5. Fichas e fala completa (copiadas de `clone-bump-upsell.md`)

### OTO2 — ficha
- Origem: link em https://codigodaprosperidades.online/upabs2/ (público, step 04) + vídeo `criativos/originais/vsl-upabs2.mp4` transcrito neste step. **Produto não comprado pelo usuário → entrega = LACUNA.**
- Nome: "Constelação Familiar da Abundância" (falado; checkouts: "Constelação Familiar da Abundância💫") | Preço: **R$ 197,00 no Pix ou 12x de R$ 20,37** (falado 09:02–09:34) | Preço riscado: nenhum na página; **âncora falada: presencial "pagam 3 mil reais"; "cada vaga… poderia facilmente ser avaliada em 2 mil, 3 mil reais ou até 5 mil reais"** (08:27–09:02) → 15x sobre R$ 3.000 | Parcelas: 12x R$ 20,37
- Vídeo: sim, 11:25 (player `6a459f55…`, "VSL_UPSELL_02_V01_OF075 - R$ 197 - 1,1x - ON") | Botão aparece aos: 09:05 (545 s)
- Aceite: "SIM, QUERO A CONSTELAÇÃO FAMILIAR!" → one-click Payt `data-object="LJE9P4-L8MZ25"` (a VSL chama o botão de "quero dissolver minha linhagem agora" — texto real do botão é o registrado no step 04) | Recusa: "Não, obrigado." → https://codigodaprosperidades.online/dowup02/
- Back-redirect: → Checkout 5 (`src=backredirectup02`)
- Fala do vídeo (11:25) — linha do tempo (completa em `criativos/transcricoes/vsl-upabs2.txt`):

| Tempo | Beat |
|---|---|
| 00:00–01:32 | Parabéns pelo Mapa; promessa "manifestação real em até sete dias", dinheiro "multiplicar dez vezes, vinte vezes, trinta vezes"; "não saia deste vídeo" |
| 01:32–03:39 | Revelação: "87% das receptoras" plantam mas perdem → **"bloqueio de linhagem"** / "DNA energético" herdado |
| 03:39–04:44 | Consequência e promessa: 3 dias após eliminar, "Pics misteriosos", bilhetes premiados, ganhos 2x–7x; "18 anos" guiando |
| 04:44–05:47 | Mecanismo: "constelação familiar da abundância", "uma das 100 pessoas no mundo" que aprendeu; **"21 simpatias feitas com base no seu mapa astral… uma por dia"**; elimina em 14 dias |
| 05:47–06:50 | "5 minutos, durante 21 dias"; mensagem diária com a simpatia; escassez: não consegue atender todas |
| 06:50–07:21 | **Escassez**: constelação "ao vivo" "essa semana", **50 vagas** ("uma das primeiras 50 guiadas") |
| 07:21–08:27 | Depoimento Carla Mendonça (dívida resolvida em menos de 10 dias) |
| 08:27–09:34 | **Âncora e preço**: presencial R$ 3.000 com lista de espera; vaga "2 mil, 3 mil… até 5 mil"; "não vendemos vagas. Escolhemos receptoras"; **"por apenas R$197,00 no Pix ou… 12 vezes de apenas R$20,37"**; CTA |
| 09:34–10:05 | **2 presentes**: Ritual do corte de cordão ancestral; Mapa de padrões de linhagem |
| 10:05–10:37 | **Garantia falada: reembolso integral "sem perguntas dentro de sete dias após a sua confirmação"** |
| 10:37–11:25 | Urgência "somente aqui e agora"; CTA "quero dissolver minha linhagem agora" |

- Print: capturas/pagina/upsell-upabs2.png

### Downsell 2 (`/dowup02/`) — "Constelação guiada" — ficha
- Nome: "Constelação guiada" (falado) / "Constelação Familiar da Abundância💫" (checkout) | Preço: **R$ 147,00 ou 12x de R$ 15,00** (falado 01:03–01:34; checkout 7 mostra 12x R$ 15,20) | Riscado falado: "A constelação ao vivo… sairia por R$197" → 1,3x
- Vídeo: sim, 2:00 (player `6a4c68d8…`) | Botão aos 01:30 (90 s)
- Aceite: "✨ Sim, Quero Com o Desconto!" → Checkout 7 (Payt `1ef10e2c…?split=12&src=backredirectup02`) | Recusa: "Não, obrigado." → Checkout 8 (Payt `117164c1…`, "70% DE DESCONTO", 12x R$ 5,90)
- Fala (2:00; completa em `criativos/transcricoes/vsl-dowup02.txt`): 00:00–00:33 "Espera, preciso te dizer mais uma coisa"; entende que "entrar na constelação ao vivo dessa semana não era pra você agora"; retoma "bloqueio de linhagem" · 00:33–01:03 **produto**: "as mesmas 21 simpatias… Só que em vez de eu te conduzir ao vivo, você recebe tudo gravado, passo a passo, para fazer uma por dia" = "constelação guiada" · 01:03–01:34 âncora R$ 197 e preço "por apenas R$ 147,00, ou parcelado em 12 vezes de apenas R$ 15,00" · 01:34–01:59 urgência ("a energia que o seu mapa astral ativou hoje não fica forte para sempre"), CTA "garante a sua constelação guiada". Sem garantia falada.
- Print: capturas/pagina/upsell-dowup02.png

### Transcrição literal completa da VSL do OTO2 (`/upabs2/`, 11:25)

- **[00:00–00:31]** Olá, minha querida receptora, aqui a Sensitiva mais uma vez, e como a sua guia, vou te pedir com carinho que não feche e nem atualize essa página. Estou elaborando o seu mapa astral da prosperidade, e qualquer interrupção pode afetar a nossa conexão divina. Após você ver esse vídeo, em menos de dois minutos, o mapa astral da prosperidade estará pronto, e finalmente as manifestações de prosperidade começarão a chegar na sua vida. Antes de qualquer coisa, eu quero te parabenizar. O passo que você deu hoje é sagrado. Como a sua guia, eu posso te garantir, hoje um canal direto entre você e o universo foi aberto.
- **[00:31–01:01]** O mapa astral da prosperidade é a leitura das estrelas sendo direcionada para a sua vida, alinhando seus desejos com uma manifestação real em até sete dias. Eu espero que você não se impressione se em sete dias você me enviar o seu depoimento dizendo que a sua vida financeira mudou completamente. Que aquele peso constante de ver dinheiro entrar e sumir mês após mês, agora é tomada pela alegria de ver o dinheiro entrar e multiplicar dez vezes, vinte vezes, trinta vezes mais. Que a sensação de que nada dá certo pra você agora é tomada pela sensação de parecer que você é uma filha mimada do universo.
- **[01:01–01:32]** Que tudo que pede tem. E eu sei que isso vai acontecer nos próximos sete dias, porque eu recebo depoimentos assim diariamente. E como a sua guia, posso te afirmar que isso não será diferente com você. Eu vou te pedir que não saia deste vídeo. Sair desse vídeo vai quebrar a conexão que criamos aqui. E eu preciso que você fique pra te orientar sobre o passo a passo de como tudo vai funcionar. Mas, antes eu preciso te revelar uma verdade. Uma verdade reservada apenas para receptoras, e por isso eu não comentei antes. 87% das receptoras fazem de tudo, elas plantam, afirmam, elevam a frequência,
- **[01:32–02:04]** acreditam com fé total. E mesmo assim nada flui, as manifestações travam, as portas permanecem fechadas, e a abundância, o amor e a paz nunca parece chegar. E o motivo disso é 10 vezes pior do que elas imaginam. Essas receptoras estão carregando um bloqueio de linhagem ativo. Você já reparou que o médico sempre pergunta ao histórico de doenças na sua família? Essa pergunta não vem do acaso. O seu DNA é uma herança da sua mãe e do seu pai. 50% da sua mãe e 50% do seu pai. O DNA é quem diz como será o formato do seu rosto, a cor dos seus olhos, a sua predisposição genética e até mesmo se você herdará as mesmas doenças dos seus pais.
- **[02:05–02:35]** Tudo que é seu vem do seu pai e da sua mãe. Como tudo que é do seu pai e da sua mãe vem dos seus avós. A primeira fase da conexão de vocês é feita pelo DNA. Mas junto com o DNA físico, você herda também o DNA energético de todos que vieram antes de você. Ele funciona igual ao DNA que você conhece. Você vai herdar as crenças de sua mãe sobre o dinheiro, o medo do seu pai de nunca ter o suficiente, a escassez criada em períodos de guerra vivida pelos seus bisavós. E se você ouviu durante a sua vida frases como dinheiro não cai do céu, rico não entra no céu, você não ouviu apenas palavras.
- **[02:35–03:07]** Você ouviu frequências do bloqueio de linhagem ativo. Você já se perguntou de onde vem a sensação de isso está bom demais para ser verdade, tem algo errado aqui? Essa sensação sempre acontece quando existe um bloqueio de linhagem ativo. Ele impede que as manifestações na sua vida sejam duradouras, e por isso essa sensação toma conta de você. O verdadeiro bloqueio está na raiz do seu DNA energético. Você vai até conseguir manifestar a quantia de dinheiro que você tanto queria, mas enquanto este bloqueio de linhagem estiver ativo, tudo isso não será duradouro. E o motivo disso é que o bloqueio de linhagem te fez repetir padrões de escassez.
- **[03:07–03:38]** E o universo não é feito de escassez, é feito de abundância e prosperidade. E você é filha do Criador do Universo, e como filha dele, o Universo te deseja e emana uma vida próspera e abundante para você. O nosso Messias uma vez disse, eu vim para que tenham vida e a tenham em abundância. João 10, 10. Eu posso te garantir, esse vídeo não chegou até você por um acaso. Eu sempre peço para o Criador que os meus vídeos cheguem em quem tem que chegar. Enquanto você seguir o mapa astral da prosperidade, você vai ganhar sim valores que nunca ganhou antes e a abundância que antes você nunca tinha conseguido.
- **[03:39–04:10]** Mas, enquanto o bloqueio de linhagem estiver ativo, tudo isso será perdido dias depois de ter sido conquistado. E eu sei que isso não é sua culpa. Você não pediu para herdar esse DNA energético um bloqueio de linhagem, mas preciso ser direta e sincera com você. Você não é culpada de ter o bloqueio, mas se tornará culpada se escolher permanecer com ele. E tudo muda quando você elimina esse bloqueio. Você muda a sua vida, da sua família e das próximas gerações. Depois de três dias que o bloqueio de linhagem é eliminado, o universo começa a te enviar, com juros, tudo que já era seu por direito.
- **[04:10–04:44]** Pics misteriosos aparecem, seus bilhetes começam a ser premiados em tudo que fizer. Aquela oportunidade de ganhar 2 vezes, 5 vezes, 7 vezes mais aparece por uma indicação misteriosa ou por uma ação sua de anos atrás. O universo começa a retribuir com juros tudo que estava travado te esperando. E o mais importante, toda a prosperidade e abundância que você vai ganhar continuará para sempre na sua vida. Tem 18 anos que eu guio pessoas para eliminar o bloqueio de linhagem através da constelação familiar da abundância. E o universo não cansa de me impressionar como a vida muda em questão de dias.
- **[04:44–05:15]** para os que têm o bloqueio eliminado. Quando eu vi a técnica da constelação familiar da abundância, pela primeira vez, eu fiquei impressionada. Os terapeutas holísticos de linhagem familiar que me ensinaram já não estão mais entre nós. Eu sou uma das 100 pessoas no mundo que aprendeu com eles este conhecimento. É uma técnica milenar perdida, que identifica e elimina os padrões energéticos familiares que bloqueiam a prosperidade. O processo é simples. São 21 simpatias feitas com base no seu mapa astral da prosperidade e você irá realizar apenas uma delas por dia nos primeiros sete dias.
- **[05:16–05:47]** As simpatias vão mapear o seu código energético e nos próximos 14 dias elas vão eliminar de uma vez o seu bloqueio de linhagem. Assim que o bloqueio de linhagem é eliminado, o universo age com juros e a receptora começa a receber tudo em dois vezes, três vezes ou até cinco vezes mais. Ciclos de escassez serão quebrados. O dinheiro vai multiplicar e começar a vir por diversas fontes e vão ficar contigo para multiplicar dez vezes mais. Sem mais ciclos de angústia, de falta de dinheiro, a sua decisão vai salvar uma geração. Você será a libertação da sua linhagem. Nikola Tesla uma vez disse,
- **[05:47–06:17]** se você quiser encontrar os segredos do universo, pense em termos de energia, frequência e vibração. Em outras palavras, você vai vibrar tão forte que o seu único trabalho será escolher qualquer coisa que quiser para a sua vida. Porque tudo que você desejar será manifestado. Você vai viver a vida de uma filha mimada do universo. E a melhor parte, você não precisa fazer absolutamente nada. Apenas 5 minutos, durante 21 dias, para viver a vida que você tanto sonhou. E esses sonhos não são um acaso. É o universo mostrando o que tem reservado para você.
- **[06:17–06:50]** Sem esforço, sem obrigação, sem exigência. Eu vou te guiar, vou identificar o padrão exato que a sua família carregou por gerações. E todos os dias irei te enviar uma mensagem com a simpatia para eliminar cada bloqueio na raiz do seu DNA energético. Esse trabalho é sagrado, reservado e absolutamente profundo. E por isso eu não falei antes. E como você pode imaginar, muitas receptoras me procuram todos os dias pedindo para ter a sua linhagem trabalhada. Mas infelizmente eu não consigo atender a todas. Em uma leitura recente das cartas das minhas egrégoras, recebi a orientação de incluir apenas 50 receptoras na próxima constelação,
- **[06:51–07:21]** que acontece exatamente essa semana. Esse é o máximo absoluto que a minha energia comporta, porque se a constelação fosse aberta a todas, a profundidade do campo seria comprometida, e eu não faço trabalho incompleto. Por isso decidi oferecer essa oportunidade àquelas que confiaram no mapa astral da prosperidade como ponto de partida para a manifestação real. E você, como uma das primeiras 50 guiadas dessa jornada sagrada, terá a chance de ter o seu bloqueio de linhagem eliminado na constelação familiar da abundância. Essa oportunidade não se repetirá e em breve todas as vagas serão preenchidas.
- **[07:21–07:55]** Mas primeiro veja o testemunho de Carla Mendonça, que teve o campo da sua linhagem dissolvido na constelação. Sensitiva, quando eu recebi meu mapa astral, senti que algo estava finalmente se movendo. Mas o dinheiro continuava entrando e saindo no mesmo dia. Foi quando você me falou sobre o bloqueio de linhagem. E eu entendi tudo. Era exatamente isso. No dia em que a constelação aconteceu, senti uma energia me tomar e tudo que consegui fazer foi chorar. Mas chorar de alegria. Sentir o universo fazendo algo em mim naquela noite. Em menos de 10 dias, uma dívida que eu tinha esquecido foi paga do nada.
- **[07:55–08:27]** Uma oportunidade que eu achei que tinha fechado se abriu e o dinheiro que entrou dessa vez ficou. Não some mais. Incrível, não é? E a melhor parte é que Carla não foi a única a vivenciar isso. Também tivemos Renata, Patrícia e Simone, receptoras que enfrentavam ciclos de escassez que se repetiam há gerações. Desde dificuldades financeiras até padrões de relacionamento que drenavam tudo o que construíam. Hoje elas já estão testemunhando transformações poderosas em suas vidas. E você também fará parte disso. É importante que você compreenda. Essa participação é rara, exclusiva e transformadora.
- **[08:27–09:02]** Tão especial que receptoras que me procuram presencialmente pagam 3 mil reais. E entram em lista de espera apenas para ter esse trabalho feito. Para você ter uma ideia, cada vaga na constelação familiar da abundância poderia facilmente ser avaliada em 2 mil, 3 mil reais ou até 5 mil reais. E ainda haveria fila. Mas aqui, dinheiro não é o fator decisivo. Nunca foi. A minha missão não é lucrar, mas verdadeiramente libertar linhagens. Por isso não vendemos vagas. Escolhemos receptoras que o universo nos trouxe num momento de abertura cósmica real. Hoje eu tomei uma decisão especial. Você que confiou no poder do mapa astral da prosperidade e plantou sua semente energética
- **[09:02–09:34]** terá a oportunidade única de garantir o seu lugar. Entre as 50 escolhidas por apenas R$197,00 no Pix ou para ficar ainda mais leve para você. Eu vou dividir esse valor em 12 vezes de apenas R$20,37. Um pagamento único, sem mensalidades nem cobranças ocultas. O campo da sua linhagem vai estar entre os dissolvidos na constelação que acontece essa semana. Aperte no botão abaixo agora para garantir o seu lugar entre as 50 escolhidas enquanto ainda há tempo. assim que sua participação for confirmada.
- **[09:34–10:04]** Você receberá dois presentes espirituais exclusivos. O ritual do corte de cordão ancestral para dissolver os vínculos energéticos que ainda te prendem à história financeira da sua mãe. Para que você possa se conectar com a sua própria frequência de abundância, livre de qualquer herança que não é sua. Um mapa de padrões de linhagem para que você enxergue com clareza o que é seu e o que é herdado. Finalmente capaz de separar as crenças que são suas das frequências que vieram de gerações que você nunca chegou a conhecer. Isso não é apenas uma inscrição, é um chamado,
- **[10:05–10:37]** uma chance de estar espiritualmente presente no momento em que a sua linhagem é libertada de uma vez por todas. Não é um custo, é um compromisso com a sua própria libertação. E se por qualquer razão você sentir que a constelação não trouxe leveza, clareza ou movimento real na sua vida, os seus sentimentos serão plenamente respeitados e você terá direito ao reembolso integral do valor pago. Sem perguntas dentro de sete dias após a sua confirmação. Ou seja, risco zero. Apenas a chance de receber algo muito maior, sem precisar fazer nada, além de autorizar e aguardar as manifestações se moverem.
- **[10:37–11:08]** Mas, por favor, preste muita atenção. Essa oportunidade que o universo colocou diante de você está disponível somente aqui e agora. Ao sair dessa página, a oportunidade desaparece para sempre. Portanto, não espere. Por respeito ao trabalho e a todas as receptoras que estão nessa lista, não consigo incluir linhagens posteriormente. Clique no botão abaixo que diz quero dissolver minha linhagem agora. E garanta que o seu campo seja trabalhado na constelação que acontece essa semana. Repito, toda a força do universo será direcionada para dissolver o bloqueio da sua linhagem.
- **[11:08–11:25]** Liberar as manifestações que estavam presas e garantir que elas permaneçam na sua vida mesmo enquanto você dorme. Essa é a sua oportunidade de dissolver o bloqueio de uma vez por todas, ativar o fluxo de abundância e deixar o que o universo quer te entregar finalmente chegar. Com isso é tudo por agora. Até breve!

### Transcrição literal completa da VSL do downsell 2 (`/dowup02/`, 2:00)

- **[00:00–00:33]** Espera, preciso te dizer mais uma coisa. Não fecha essa página ainda. Eu entendo que entrar na constelação ao vivo dessa semana não era pra você agora. As vagas são poucas e o compromisso é grande. E o universo respeita o seu tempo. Mas eu não posso te deixar ir embora carregando o bloqueio de vinhagem ativo. Lembra do que eu te expliquei? Enquanto esse bloqueio herdado estiver ativo, tudo que você manifestar vai escapar pelas suas mãos dias depois. O dinheiro chega, mas não fica. porque a raiz do problema está no DNA emergético, que veio de gerações antes de você.
- **[00:33–01:03]** Na constelação ao vivo, eu conduzo isso pessoalmente junto com você. Mas existe outra forma de dissolver esse bloqueio. No seu tempo, sozinha, com as minhas orientações gravadas, são as mesmas 21 simpatias da constelação familiar da abundância, as mesmas que eu uso para dissolver o bloqueio de linhagem. Só que em vez de eu te conduzir ao vivo, você recebe tudo gravado, passo a passo, para fazer uma por dia no conforto da sua casa. Eu chamo isso de constelação guiada.
- **[01:03–01:34]** Você faz no seu ritmo, sem horário marcado, sem precisar de vaga, a mesma técnica, a mesma profundidade, conduzida por você mesma com o meu direcionamento. A constelação ao vivo, com o meu acompanhamento pessoal, sairia por R$197. Mas a constelação guiada, para você fazer sozinha, eu vou liberar agora com um desconto promocional, por apenas R$ 147,00, ou parcelado em 12 vezes de apenas R$ 15,00 por mês.
- **[01:34–01:59]** O mesmo poder de libertar a sua linhagem por uma fração do valor. Mas eu preciso ser sincera, a energia que o seu mapa astral ativou hoje não fica forte para sempre. Panto antes de você começar a dissolver esse bloqueio, mais rápido a abundância vai poder fluir e ficar. Pica no botão abaixo, garante a sua constelação guiada e liberta a sua linhagem de uma vez por todas. Você nasceu para ser a virada da sua família. Esse é o primeiro passo.

## 6. Legenda Whisper completa com timestamps

<details><summary>vsl-upabs2 (11:25) — criativos/transcricoes/vsl-upabs2.srt (221 cues)</summary>

```
1
00:00:00,000 --> 00:00:07,360
Olá, minha querida receptora, aqui a Sensitiva mais uma vez, e como a sua guia, vou te pedir com carinho que não feche e nem atualize essa página.

2
00:00:07,480 --> 00:00:13,820
Estou elaborando o seu mapa astral da prosperidade, e qualquer interrupção pode afetar a nossa conexão divina.

3
00:00:13,960 --> 00:00:21,600
Após você ver esse vídeo, em menos de dois minutos, o mapa astral da prosperidade estará pronto, e finalmente as manifestações de prosperidade começarão a chegar na sua vida.

4
00:00:21,740 --> 00:00:26,180
Antes de qualquer coisa, eu quero te parabenizar. O passo que você deu hoje é sagrado.

5
00:00:26,180 --> 00:00:31,260
Como a sua guia, eu posso te garantir, hoje um canal direto entre você e o universo foi aberto.

6
00:00:31,380 --> 00:00:35,700
O mapa astral da prosperidade é a leitura das estrelas sendo direcionada para a sua vida,

7
00:00:35,980 --> 00:00:39,280
alinhando seus desejos com uma manifestação real em até sete dias.

8
00:00:39,420 --> 00:00:44,080
Eu espero que você não se impressione se em sete dias você me enviar o seu depoimento

9
00:00:44,080 --> 00:00:47,020
dizendo que a sua vida financeira mudou completamente.

10
00:00:47,020 --> 00:00:50,600
Que aquele peso constante de ver dinheiro entrar e sumir mês após mês,

11
00:00:50,780 --> 00:00:55,180
agora é tomada pela alegria de ver o dinheiro entrar e multiplicar dez vezes, vinte vezes, trinta vezes mais.

12
00:00:55,180 --> 00:01:01,300
Que a sensação de que nada dá certo pra você agora é tomada pela sensação de parecer que você é uma filha mimada do universo.

13
00:01:01,520 --> 00:01:02,580
Que tudo que pede tem.

14
00:01:02,780 --> 00:01:08,280
E eu sei que isso vai acontecer nos próximos sete dias, porque eu recebo depoimentos assim diariamente.

15
00:01:08,620 --> 00:01:12,160
E como a sua guia, posso te afirmar que isso não será diferente com você.

16
00:01:12,360 --> 00:01:14,240
Eu vou te pedir que não saia deste vídeo.

17
00:01:14,440 --> 00:01:16,920
Sair desse vídeo vai quebrar a conexão que criamos aqui.

18
00:01:17,080 --> 00:01:21,000
E eu preciso que você fique pra te orientar sobre o passo a passo de como tudo vai funcionar.

19
00:01:21,100 --> 00:01:22,960
Mas, antes eu preciso te revelar uma verdade.

20
00:01:22,960 --> 00:01:26,540
Uma verdade reservada apenas para receptoras, e por isso eu não comentei antes.

21
00:01:26,780 --> 00:01:32,140
87% das receptoras fazem de tudo, elas plantam, afirmam, elevam a frequência,

22
00:01:32,400 --> 00:01:33,780
acreditam com fé total.

23
00:01:33,980 --> 00:01:37,700
E mesmo assim nada flui, as manifestações travam, as portas permanecem fechadas,

24
00:01:37,860 --> 00:01:40,060
e a abundância, o amor e a paz nunca parece chegar.

25
00:01:40,220 --> 00:01:42,740
E o motivo disso é 10 vezes pior do que elas imaginam.

26
00:01:42,960 --> 00:01:45,900
Essas receptoras estão carregando um bloqueio de linhagem ativo.

27
00:01:46,060 --> 00:01:49,420
Você já reparou que o médico sempre pergunta ao histórico de doenças na sua família?

28
00:01:49,600 --> 00:01:51,020
Essa pergunta não vem do acaso.

29
00:01:51,020 --> 00:01:53,760
O seu DNA é uma herança da sua mãe e do seu pai.

30
00:01:54,040 --> 00:01:56,840
50% da sua mãe e 50% do seu pai.

31
00:01:57,000 --> 00:02:02,160
O DNA é quem diz como será o formato do seu rosto, a cor dos seus olhos, a sua predisposição genética

32
00:02:02,160 --> 00:02:04,880
e até mesmo se você herdará as mesmas doenças dos seus pais.

33
00:02:05,220 --> 00:02:07,580
Tudo que é seu vem do seu pai e da sua mãe.

34
00:02:07,840 --> 00:02:10,700
Como tudo que é do seu pai e da sua mãe vem dos seus avós.

35
00:02:10,860 --> 00:02:13,500
A primeira fase da conexão de vocês é feita pelo DNA.

36
00:02:13,720 --> 00:02:18,800
Mas junto com o DNA físico, você herda também o DNA energético de todos que vieram antes de você.

37
00:02:18,800 --> 00:02:21,840
Ele funciona igual ao DNA que você conhece.

38
00:02:21,960 --> 00:02:24,160
Você vai herdar as crenças de sua mãe sobre o dinheiro,

39
00:02:24,440 --> 00:02:26,500
o medo do seu pai de nunca ter o suficiente,

40
00:02:26,760 --> 00:02:29,620
a escassez criada em períodos de guerra vivida pelos seus bisavós.

41
00:02:29,740 --> 00:02:31,940
E se você ouviu durante a sua vida frases como

42
00:02:31,940 --> 00:02:34,400
dinheiro não cai do céu, rico não entra no céu,

43
00:02:34,520 --> 00:02:35,720
você não ouviu apenas palavras.

44
00:02:35,960 --> 00:02:38,360
Você ouviu frequências do bloqueio de linhagem ativo.

45
00:02:38,480 --> 00:02:40,560
Você já se perguntou de onde vem a sensação de

46
00:02:40,560 --> 00:02:43,480
isso está bom demais para ser verdade, tem algo errado aqui?

47
00:02:43,660 --> 00:02:48,460
Essa sensação sempre acontece quando existe um bloqueio de linhagem ativo.

48
00:02:48,460 --> 00:02:51,340
Ele impede que as manifestações na sua vida sejam duradouras,

49
00:02:51,420 --> 00:02:53,320
e por isso essa sensação toma conta de você.

50
00:02:53,480 --> 00:02:56,140
O verdadeiro bloqueio está na raiz do seu DNA energético.

51
00:02:56,260 --> 00:02:59,760
Você vai até conseguir manifestar a quantia de dinheiro que você tanto queria,

52
00:02:59,980 --> 00:03:02,320
mas enquanto este bloqueio de linhagem estiver ativo,

53
00:03:02,680 --> 00:03:03,460
tudo isso não será duradouro.

54
00:03:04,080 --> 00:03:07,620
E o motivo disso é que o bloqueio de linhagem te fez repetir padrões de escassez.

55
00:03:07,740 --> 00:03:11,160
E o universo não é feito de escassez, é feito de abundância e prosperidade.

56
00:03:11,300 --> 00:03:13,740
E você é filha do Criador do Universo, e como filha dele,

57
00:03:13,920 --> 00:03:17,380
o Universo te deseja e emana uma vida próspera e abundante para você.

58
00:03:17,380 --> 00:03:22,280
O nosso Messias uma vez disse, eu vim para que tenham vida e a tenham em abundância.

59
00:03:22,520 --> 00:03:23,320
João 10, 10.

60
00:03:23,580 --> 00:03:27,440
Eu posso te garantir, esse vídeo não chegou até você por um acaso.

61
00:03:27,560 --> 00:03:30,940
Eu sempre peço para o Criador que os meus vídeos cheguem em quem tem que chegar.

62
00:03:31,100 --> 00:03:36,060
Enquanto você seguir o mapa astral da prosperidade, você vai ganhar sim valores que nunca ganhou antes

63
00:03:36,060 --> 00:03:38,920
e a abundância que antes você nunca tinha conseguido.

64
00:03:39,080 --> 00:03:44,860
Mas, enquanto o bloqueio de linhagem estiver ativo, tudo isso será perdido dias depois de ter sido conquistado.

65
00:03:45,140 --> 00:03:46,620
E eu sei que isso não é sua culpa.

66
00:03:46,620 --> 00:03:49,820
Você não pediu para herdar esse DNA energético um bloqueio de linhagem,

67
00:03:49,980 --> 00:03:52,140
mas preciso ser direta e sincera com você.

68
00:03:52,320 --> 00:03:57,400
Você não é culpada de ter o bloqueio, mas se tornará culpada se escolher permanecer com ele.

69
00:03:57,560 --> 00:03:59,560
E tudo muda quando você elimina esse bloqueio.

70
00:03:59,800 --> 00:04:02,820
Você muda a sua vida, da sua família e das próximas gerações.

71
00:04:03,100 --> 00:04:06,080
Depois de três dias que o bloqueio de linhagem é eliminado,

72
00:04:06,360 --> 00:04:10,400
o universo começa a te enviar, com juros, tudo que já era seu por direito.

73
00:04:10,640 --> 00:04:15,560
Pics misteriosos aparecem, seus bilhetes começam a ser premiados em tudo que fizer.

74
00:04:15,560 --> 00:04:19,540
Aquela oportunidade de ganhar 2 vezes, 5 vezes, 7 vezes mais

75
00:04:19,540 --> 00:04:23,300
aparece por uma indicação misteriosa ou por uma ação sua de anos atrás.

76
00:04:23,600 --> 00:04:27,960
O universo começa a retribuir com juros tudo que estava travado te esperando.

77
00:04:28,080 --> 00:04:31,700
E o mais importante, toda a prosperidade e abundância que você vai ganhar

78
00:04:31,700 --> 00:04:34,040
continuará para sempre na sua vida.

79
00:04:34,360 --> 00:04:37,940
Tem 18 anos que eu guio pessoas para eliminar o bloqueio de linhagem

80
00:04:37,940 --> 00:04:40,440
através da constelação familiar da abundância.

81
00:04:40,560 --> 00:04:44,360
E o universo não cansa de me impressionar como a vida muda em questão de dias.

82
00:04:44,360 --> 00:04:46,120
para os que têm o bloqueio eliminado.

83
00:04:46,480 --> 00:04:49,580
Quando eu vi a técnica da constelação familiar da abundância,

84
00:04:49,740 --> 00:04:52,080
pela primeira vez, eu fiquei impressionada.

85
00:04:52,260 --> 00:04:55,640
Os terapeutas holísticos de linhagem familiar que me ensinaram

86
00:04:55,640 --> 00:04:57,140
já não estão mais entre nós.

87
00:04:57,320 --> 00:05:01,520
Eu sou uma das 100 pessoas no mundo que aprendeu com eles este conhecimento.

88
00:05:01,680 --> 00:05:03,380
É uma técnica milenar perdida,

89
00:05:03,520 --> 00:05:06,480
que identifica e elimina os padrões energéticos familiares

90
00:05:06,480 --> 00:05:07,740
que bloqueiam a prosperidade.

91
00:05:07,880 --> 00:05:08,820
O processo é simples.

92
00:05:09,040 --> 00:05:12,320
São 21 simpatias feitas com base no seu mapa astral da prosperidade

93
00:05:12,320 --> 00:05:15,840
e você irá realizar apenas uma delas por dia nos primeiros sete dias.

94
00:05:16,020 --> 00:05:18,680
As simpatias vão mapear o seu código energético

95
00:05:18,680 --> 00:05:23,500
e nos próximos 14 dias elas vão eliminar de uma vez o seu bloqueio de linhagem.

96
00:05:23,780 --> 00:05:26,940
Assim que o bloqueio de linhagem é eliminado, o universo age com juros

97
00:05:26,940 --> 00:05:31,400
e a receptora começa a receber tudo em dois vezes, três vezes ou até cinco vezes mais.

98
00:05:31,660 --> 00:05:33,300
Ciclos de escassez serão quebrados.

99
00:05:33,480 --> 00:05:36,260
O dinheiro vai multiplicar e começar a vir por diversas fontes

100
00:05:36,260 --> 00:05:38,920
e vão ficar contigo para multiplicar dez vezes mais.

101
00:05:39,060 --> 00:05:41,320
Sem mais ciclos de angústia, de falta de dinheiro,

102
00:05:41,320 --> 00:05:43,480
a sua decisão vai salvar uma geração.

103
00:05:43,700 --> 00:05:45,640
Você será a libertação da sua linhagem.

104
00:05:45,860 --> 00:05:47,160
Nikola Tesla uma vez disse,

105
00:05:47,300 --> 00:05:49,460
se você quiser encontrar os segredos do universo,

106
00:05:49,740 --> 00:05:52,560
pense em termos de energia, frequência e vibração.

107
00:05:52,840 --> 00:05:54,800
Em outras palavras, você vai vibrar tão forte

108
00:05:54,800 --> 00:05:58,160
que o seu único trabalho será escolher qualquer coisa que quiser para a sua vida.

109
00:05:58,340 --> 00:06:00,740
Porque tudo que você desejar será manifestado.

110
00:06:00,860 --> 00:06:04,000
Você vai viver a vida de uma filha mimada do universo.

111
00:06:04,240 --> 00:06:06,980
E a melhor parte, você não precisa fazer absolutamente nada.

112
00:06:07,140 --> 00:06:10,440
Apenas 5 minutos, durante 21 dias,

113
00:06:10,440 --> 00:06:12,700
para viver a vida que você tanto sonhou.

114
00:06:12,860 --> 00:06:14,660
E esses sonhos não são um acaso.

115
00:06:14,820 --> 00:06:17,300
É o universo mostrando o que tem reservado para você.

116
00:06:17,500 --> 00:06:20,500
Sem esforço, sem obrigação, sem exigência.

117
00:06:20,620 --> 00:06:25,540
Eu vou te guiar, vou identificar o padrão exato que a sua família carregou por gerações.

118
00:06:25,920 --> 00:06:29,640
E todos os dias irei te enviar uma mensagem com a simpatia

119
00:06:29,640 --> 00:06:33,080
para eliminar cada bloqueio na raiz do seu DNA energético.

120
00:06:33,240 --> 00:06:36,740
Esse trabalho é sagrado, reservado e absolutamente profundo.

121
00:06:36,880 --> 00:06:38,240
E por isso eu não falei antes.

122
00:06:38,240 --> 00:06:42,880
E como você pode imaginar, muitas receptoras me procuram todos os dias pedindo para ter a sua linhagem trabalhada.

123
00:06:42,980 --> 00:06:44,660
Mas infelizmente eu não consigo atender a todas.

124
00:06:44,860 --> 00:06:47,240
Em uma leitura recente das cartas das minhas egrégoras,

125
00:06:47,340 --> 00:06:50,900
recebi a orientação de incluir apenas 50 receptoras na próxima constelação,

126
00:06:51,020 --> 00:06:52,700
que acontece exatamente essa semana.

127
00:06:52,920 --> 00:06:55,060
Esse é o máximo absoluto que a minha energia comporta,

128
00:06:55,160 --> 00:06:59,260
porque se a constelação fosse aberta a todas, a profundidade do campo seria comprometida,

129
00:06:59,360 --> 00:07:00,920
e eu não faço trabalho incompleto.

130
00:07:01,100 --> 00:07:05,700
Por isso decidi oferecer essa oportunidade àquelas que confiaram no mapa astral da prosperidade

131
00:07:05,700 --> 00:07:08,060
como ponto de partida para a manifestação real.

132
00:07:08,240 --> 00:07:11,520
E você, como uma das primeiras 50 guiadas dessa jornada sagrada,

133
00:07:11,680 --> 00:07:15,980
terá a chance de ter o seu bloqueio de linhagem eliminado na constelação familiar da abundância.

134
00:07:16,200 --> 00:07:21,140
Essa oportunidade não se repetirá e em breve todas as vagas serão preenchidas.

135
00:07:21,500 --> 00:07:23,880
Mas primeiro veja o testemunho de Carla Mendonça,

136
00:07:24,000 --> 00:07:27,580
que teve o campo da sua linhagem dissolvido na constelação.

137
00:07:27,880 --> 00:07:32,640
Sensitiva, quando eu recebi meu mapa astral, senti que algo estava finalmente se movendo.

138
00:07:32,880 --> 00:07:35,380
Mas o dinheiro continuava entrando e saindo no mesmo dia.

139
00:07:35,540 --> 00:07:37,940
Foi quando você me falou sobre o bloqueio de linhagem.

140
00:07:38,240 --> 00:07:41,100
E eu entendi tudo. Era exatamente isso.

141
00:07:41,340 --> 00:07:44,580
No dia em que a constelação aconteceu, senti uma energia me tomar

142
00:07:44,580 --> 00:07:46,940
e tudo que consegui fazer foi chorar.

143
00:07:47,160 --> 00:07:48,200
Mas chorar de alegria.

144
00:07:48,480 --> 00:07:50,640
Sentir o universo fazendo algo em mim naquela noite.

145
00:07:51,140 --> 00:07:55,040
Em menos de 10 dias, uma dívida que eu tinha esquecido foi paga do nada.

146
00:07:55,240 --> 00:07:57,440
Uma oportunidade que eu achei que tinha fechado se abriu

147
00:07:57,960 --> 00:07:59,920
e o dinheiro que entrou dessa vez ficou.

148
00:08:00,320 --> 00:08:01,280
Não some mais.

149
00:08:01,560 --> 00:08:02,340
Incrível, não é?

150
00:08:02,480 --> 00:08:06,240
E a melhor parte é que Carla não foi a única a vivenciar isso.

151
00:08:06,240 --> 00:08:12,060
Também tivemos Renata, Patrícia e Simone, receptoras que enfrentavam ciclos de escassez que se repetiam há gerações.

152
00:08:12,280 --> 00:08:17,380
Desde dificuldades financeiras até padrões de relacionamento que drenavam tudo o que construíam.

153
00:08:17,520 --> 00:08:20,960
Hoje elas já estão testemunhando transformações poderosas em suas vidas.

154
00:08:21,080 --> 00:08:23,080
E você também fará parte disso.

155
00:08:23,220 --> 00:08:24,620
É importante que você compreenda.

156
00:08:24,720 --> 00:08:27,360
Essa participação é rara, exclusiva e transformadora.

157
00:08:27,560 --> 00:08:31,220
Tão especial que receptoras que me procuram presencialmente pagam 3 mil reais.

158
00:08:31,420 --> 00:08:35,200
E entram em lista de espera apenas para ter esse trabalho feito.

159
00:08:35,200 --> 00:08:38,640
Para você ter uma ideia, cada vaga na constelação familiar da abundância

160
00:08:38,640 --> 00:08:42,580
poderia facilmente ser avaliada em 2 mil, 3 mil reais ou até 5 mil reais.

161
00:08:42,680 --> 00:08:43,540
E ainda haveria fila.

162
00:08:43,660 --> 00:08:46,000
Mas aqui, dinheiro não é o fator decisivo.

163
00:08:46,180 --> 00:08:46,760
Nunca foi.

164
00:08:46,940 --> 00:08:50,340
A minha missão não é lucrar, mas verdadeiramente libertar linhagens.

165
00:08:50,480 --> 00:08:51,640
Por isso não vendemos vagas.

166
00:08:51,740 --> 00:08:55,760
Escolhemos receptoras que o universo nos trouxe num momento de abertura cósmica real.

167
00:08:55,940 --> 00:08:57,280
Hoje eu tomei uma decisão especial.

168
00:08:57,480 --> 00:09:02,420
Você que confiou no poder do mapa astral da prosperidade e plantou sua semente energética

169
00:09:02,420 --> 00:09:05,240
terá a oportunidade única de garantir o seu lugar.

170
00:09:05,400 --> 00:09:09,760
Entre as 50 escolhidas por apenas R$197,00 no Pix

171
00:09:09,760 --> 00:09:12,280
ou para ficar ainda mais leve para você.

172
00:09:12,420 --> 00:09:16,340
Eu vou dividir esse valor em 12 vezes de apenas R$20,37.

173
00:09:16,640 --> 00:09:19,960
Um pagamento único, sem mensalidades nem cobranças ocultas.

174
00:09:20,100 --> 00:09:22,600
O campo da sua linhagem vai estar entre os dissolvidos

175
00:09:22,600 --> 00:09:24,360
na constelação que acontece essa semana.

176
00:09:24,520 --> 00:09:28,200
Aperte no botão abaixo agora para garantir o seu lugar

177
00:09:28,200 --> 00:09:32,140
entre as 50 escolhidas enquanto ainda há tempo.

178
00:09:32,140 --> 00:09:34,620
assim que sua participação for confirmada.

179
00:09:34,780 --> 00:09:37,300
Você receberá dois presentes espirituais exclusivos.

180
00:09:37,480 --> 00:09:40,680
O ritual do corte de cordão ancestral para dissolver os vínculos energéticos

181
00:09:40,680 --> 00:09:42,780
que ainda te prendem à história financeira da sua mãe.

182
00:09:42,900 --> 00:09:46,560
Para que você possa se conectar com a sua própria frequência de abundância,

183
00:09:46,720 --> 00:09:48,800
livre de qualquer herança que não é sua.

184
00:09:48,940 --> 00:09:52,820
Um mapa de padrões de linhagem para que você enxergue com clareza

185
00:09:52,820 --> 00:09:54,560
o que é seu e o que é herdado.

186
00:09:54,760 --> 00:09:57,920
Finalmente capaz de separar as crenças que são suas

187
00:09:57,920 --> 00:10:02,300
das frequências que vieram de gerações que você nunca chegou a conhecer.

188
00:10:02,560 --> 00:10:04,840
Isso não é apenas uma inscrição, é um chamado,

189
00:10:05,060 --> 00:10:07,000
uma chance de estar espiritualmente presente

190
00:10:07,000 --> 00:10:10,160
no momento em que a sua linhagem é libertada de uma vez por todas.

191
00:10:10,400 --> 00:10:14,420
Não é um custo, é um compromisso com a sua própria libertação.

192
00:10:14,560 --> 00:10:18,380
E se por qualquer razão você sentir que a constelação não trouxe leveza,

193
00:10:18,560 --> 00:10:21,060
clareza ou movimento real na sua vida,

194
00:10:21,260 --> 00:10:23,640
os seus sentimentos serão plenamente respeitados

195
00:10:23,640 --> 00:10:26,360
e você terá direito ao reembolso integral do valor pago.

196
00:10:26,360 --> 00:10:29,400
Sem perguntas dentro de sete dias após a sua confirmação.

197
00:10:29,560 --> 00:10:30,780
Ou seja, risco zero.

198
00:10:31,000 --> 00:10:34,340
Apenas a chance de receber algo muito maior, sem precisar fazer nada,

199
00:10:34,460 --> 00:10:37,080
além de autorizar e aguardar as manifestações se moverem.

200
00:10:37,220 --> 00:10:38,780
Mas, por favor, preste muita atenção.

201
00:10:39,340 --> 00:10:44,440
Essa oportunidade que o universo colocou diante de você está disponível somente aqui e agora.

202
00:10:44,580 --> 00:10:47,680
Ao sair dessa página, a oportunidade desaparece para sempre.

203
00:10:47,880 --> 00:10:48,980
Portanto, não espere.

204
00:10:49,120 --> 00:10:52,940
Por respeito ao trabalho e a todas as receptoras que estão nessa lista,

205
00:10:53,420 --> 00:10:55,360
não consigo incluir linhagens posteriormente.

206
00:10:56,120 --> 00:10:57,280
Clique no botão abaixo que diz

207
00:10:57,280 --> 00:10:58,720
quero dissolver minha linhagem agora.

208
00:10:58,900 --> 00:11:00,760
E garanta que o seu campo seja trabalhado

209
00:11:00,760 --> 00:11:02,620
na constelação que acontece essa semana.

210
00:11:02,820 --> 00:11:04,620
Repito, toda a força do universo

211
00:11:04,620 --> 00:11:07,020
será direcionada para dissolver

212
00:11:07,020 --> 00:11:08,600
o bloqueio da sua linhagem.

213
00:11:08,820 --> 00:11:11,320
Liberar as manifestações que estavam presas

214
00:11:11,320 --> 00:11:13,620
e garantir que elas permaneçam na sua vida

215
00:11:13,620 --> 00:11:15,200
mesmo enquanto você dorme.

216
00:11:15,360 --> 00:11:17,460
Essa é a sua oportunidade de dissolver o bloqueio

217
00:11:17,460 --> 00:11:19,920
de uma vez por todas, ativar o fluxo de abundância

218
00:11:19,920 --> 00:11:21,660
e deixar o que o universo quer te entregar

219
00:11:21,660 --> 00:11:22,520
finalmente chegar.

220
00:11:22,700 --> 00:11:23,980
Com isso é tudo por agora.

221
00:11:23,980 --> 00:11:25,260
Até breve!
```

</details>

<details><summary>vsl-dowup02 (2:00) — criativos/transcricoes/vsl-dowup02.srt (30 cues)</summary>

```
1
00:00:00,000 --> 00:00:02,160
Espera, preciso te dizer mais uma coisa.

2
00:00:02,340 --> 00:00:03,760
Não fecha essa página ainda.

3
00:00:03,960 --> 00:00:07,760
Eu entendo que entrar na constelação ao vivo dessa semana não era pra você agora.

4
00:00:07,940 --> 00:00:10,700
As vagas são poucas e o compromisso é grande.

5
00:00:10,840 --> 00:00:13,040
E o universo respeita o seu tempo.

6
00:00:13,160 --> 00:00:17,700
Mas eu não posso te deixar ir embora carregando o bloqueio de vinhagem ativo.

7
00:00:17,800 --> 00:00:19,020
Lembra do que eu te expliquei?

8
00:00:19,160 --> 00:00:21,520
Enquanto esse bloqueio herdado estiver ativo,

9
00:00:21,680 --> 00:00:25,060
tudo que você manifestar vai escapar pelas suas mãos dias depois.

10
00:00:25,360 --> 00:00:27,060
O dinheiro chega, mas não fica.

11
00:00:27,060 --> 00:00:33,160
porque a raiz do problema está no DNA emergético, que veio de gerações antes de você.

12
00:00:33,460 --> 00:00:38,120
Na constelação ao vivo, eu conduzo isso pessoalmente junto com você.

13
00:00:38,280 --> 00:00:41,160
Mas existe outra forma de dissolver esse bloqueio.

14
00:00:41,380 --> 00:00:45,860
No seu tempo, sozinha, com as minhas orientações gravadas,

15
00:00:46,100 --> 00:00:50,300
são as mesmas 21 simpatias da constelação familiar da abundância,

16
00:00:50,420 --> 00:00:53,600
as mesmas que eu uso para dissolver o bloqueio de linhagem.

17
00:00:53,600 --> 00:00:58,600
Só que em vez de eu te conduzir ao vivo, você recebe tudo gravado, passo a passo,

18
00:00:58,800 --> 00:01:01,380
para fazer uma por dia no conforto da sua casa.

19
00:01:01,520 --> 00:01:03,600
Eu chamo isso de constelação guiada.

20
00:01:03,760 --> 00:01:08,300
Você faz no seu ritmo, sem horário marcado, sem precisar de vaga,

21
00:01:08,500 --> 00:01:14,380
a mesma técnica, a mesma profundidade, conduzida por você mesma com o meu direcionamento.

22
00:01:14,560 --> 00:01:20,600
A constelação ao vivo, com o meu acompanhamento pessoal, sairia por R$197.

23
00:01:21,160 --> 00:01:27,660
Mas a constelação guiada, para você fazer sozinha, eu vou liberar agora com um desconto promocional,

24
00:01:27,780 --> 00:01:34,260
por apenas R$ 147,00, ou parcelado em 12 vezes de apenas R$ 15,00 por mês.

25
00:01:34,420 --> 00:01:38,880
O mesmo poder de libertar a sua linhagem por uma fração do valor.

26
00:01:39,120 --> 00:01:44,760
Mas eu preciso ser sincera, a energia que o seu mapa astral ativou hoje não fica forte para sempre.

27
00:01:45,000 --> 00:01:50,080
Panto antes de você começar a dissolver esse bloqueio, mais rápido a abundância vai poder fluir e ficar.

28
00:01:50,080 --> 00:01:55,860
Pica no botão abaixo, garante a sua constelação guiada e liberta a sua linhagem de uma vez por todas.

29
00:01:56,080 --> 00:01:58,320
Você nasceu para ser a virada da sua família.

30
00:01:58,520 --> 00:01:59,440
Esse é o primeiro passo.
```

</details>

## 7. O que a referência entrega (linhas literais da "Tabela final da escada")

| Etapa | Nome | Preço | Âncora | O que entrega |
| Front | Código da Prosperidade🔐 (quiz de 5 perguntas + 3 cartas fixas + VSL 20:06, botão aos 17:00) | R$ 77,00 (1x–12x; 12x R$ 7,96) · back-redirect Pix R$ 57,00 | nenhuma escrita; **falada: R$ 3.000 presencial (39x)**; Lastlink "Em até 9x de R$ 10,04" | Área de membros Payt: 9 módulos / 19 aulas (9 vazias), 0 vídeos, 0 áudios, 6 PDFs (61 págs; 5 são slides Gamma), 2 apps externos (1 exige e-mail, 1 com "Jornada" de 7 dias atrás de onboarding), 1 GPT no ChatGPT (inacessível deslogado). Promessa da VSL (3 áudios de 5 min + 4 complementos) não aparece como mídia entregue |
| OTO2 | Constelação Familiar da Abundância💫 "ao vivo, 50 vagas" (VSL 11:25, botão aos 9:05, one-click) | R$ 197,00 Pix ou 12x R$ 20,37 (falado) | **falada: R$ 3.000 presencial (15x)**; vaga "2 a 5 mil" | LACUNA (não comprado). Prometido: 21 simpatias (1/dia), 2 presentes (corte de cordão, mapa de padrões), reembolso em 7 dias |
| Downsell 2 | Constelação guiada (gravada) (VSL 2:00, botão aos 1:30) → recusa cai em 70% OFF | R$ 147,00 ou 12x R$ 15,00 (falado) / 12x R$ 15,20 (checkout 7) · recusa: 12x R$ 5,90 | R$ 197 falado (1,3x) | LACUNA (não comprado) |

## Lacunas
- Produto entregue no OTO2 (21 simpatias, ritual do corte de cordão, mapa de padrões de linhagem) e no Downsell 2 (constelação guiada gravada): `[LACUNA: não comprado, não observado]`.
- Título dentro do frame/thumbnail do player em `/upabs2/` e `/dowup02/`: `[LACUNA: não transcrito do print]`.
- Texto da página de obrigado após o "Não" do `/dowup02/` (Checkout 8): `[LACUNA: compra não finalizada]`.

## De onde veio cada trecho (fonte + linhas)

| Trecho | Fonte (relativa ao run) | Linhas |
|---|---|---|
| página `/upabs2/`: title, texto, links, botões, SECONDS_TO_DISPLAY | `_tools/pagina/upsell-upabs2.json` | arquivo inteiro |
| página `/dowup02/`: title, texto, links, botões, SECONDS_TO_DISPLAY | `_tools/pagina/upsell-dowup02.json` | arquivo inteiro |
| tabela das páginas pós-compra + faixas literais + estilo dos botões | `v1/clone-original/clone-bump-upsell.md` | 64–80 |
| checkouts 5, 6, 7 e 8 (back-redirect do /upabs2/, back dos downsells, SIM e NÃO do /dowup02/) | `v1/clone-original/clone-bump-upsell.md` | 48–63 (linhas 5–8 da tabela) |
| escada de preços (linhas Upsell 2 / Downsell 2 / Não do downsell 2) | `v1/clone-original/clone-bump-upsell.md` | 129–144 |
| OTO2 ficha + beats; Downsell 2 ficha; fala completa em blocos de ~30 s (vsl-upabs2, vsl-dowup02) | `v1/clone-original/clone-bump-upsell.md` | 208–270 |
| origem dos blocos de fala | `_tools/vsl-vsl-upabs2.blocks.md · _tools/vsl-vsl-dowup02.blocks.md` | 1–22 · 1–4 |
| legenda SRT completa vsl-upabs2 | `criativos/transcricoes/vsl-upabs2.srt` | 1–883 |
| legenda SRT completa vsl-dowup02 | `criativos/transcricoes/vsl-dowup02.srt` | 1–119 |
| tabela final da escada (linhas OTO2 e Downsell 2) | `v1/clone-original/clone-bump-upsell.md` | 271–285 |

## 1. Produto principal (front)

| Campo Cakto | Valor literal | Fonte / observação |
|---|---|---|
| Nome do produto | `[colar]` Código da Prosperidade🔐 | (24 car.) Nome no checkout Payt 1. Na área de membros o curso se chama "Código da Prosperidade! ⭐"; no back-redirect "Código da Prosperidade.🔐(30% OFF)"; na Lastlink (braço órfão) "Código da Prosperidade". |
| Tipo de produto | Curso / Área de membros | Referência: Payt Academy (texto + anexos; 0 vídeos, 0 áudios). |
| Categoria | `[LACUNA: categoria da Payt não visível]` | Escolher na lista da Cakto (Espiritualidade). |
| Descrição curta (aparece no checkout) | `[LACUNA: o checkout Payt 1 não tem descrição do produto — só nome, imagem e subtítulo "✅ Último passo: informe seus dados e conclua!"]` | Se a Cakto exigir o campo, usar o texto oculto da própria Payt: `[colar]` Este é um produto ou serviço digital, você receberá os dados para acessá-lo via internet. (98 car.) |
| Descrição longa (página do produto) | `[LACUNA: não existe página de produto em texto na referência; a oferta é falada na VSL 20:06 — ver `v1/clone-original/clone-vsl-front.md`]` | |
| Preço | R$ 77,00 | Checkout 1; sem preço riscado. |
| Parcelamento | Até 12x, juros ao comprador: 1x R$ 77,00 · 2x R$ 40,53 · 3x R$ 27,48 · 4x R$ 20,96 · 5x R$ 17,05 · 6x R$ 14,45 · 7x R$ 12,59 · 8x R$ 11,20 · 9x R$ 10,12 · 10x R$ 9,25 · 11x R$ 8,55 · 12x R$ 7,96 | Seletor "Parcelamento", padrão "1x de R$ 77,00". Na Cakto: marcar 12x com juros ao cliente (a Cakto calcula a parcela; o valor exato de cada parcela não é replicável 1:1). |
| Formas de pagamento | Cartão + Pix (Pix R$ 77,00, botão "Gerar Pix copia e cola") | Boleto: não existe na referência. |
| Imagem de capa | `[LACUNA: arquivo não baixado]` — referência: 1254x1254, `content.payt.com.br/app/uploads/6a126a690c042506baf910c67b163390.png` (capa dourada "Código da Prosperidade!" com chave, moedas, cristais) | Print: `capturas/pagina/checkout-1.png`. Baixar a imagem antes de subir ou fazer arte própria. |
| Garantia | ausente na referência (nenhuma no quiz, na VSL front nem no checkout 1) | **Não replicável na Cakto** (a plataforma exige um prazo de garantia): alternativa em 1 linha: marcar o mínimo que a Cakto permitir (7 dias). A única garantia escrita da referência é no `/dowareademembros/` ("Garantia de 60 dias"). |
| Página de vendas (URL) | referência: `https://codigodaprosperidades.online/aba/` (split → quiz `/quizprosperidade` do xquiz) → **no clone: https://quizprosperidade.vercel.app/quizprosperidade** | Quiz literal em `_deploy3/quizprosperidade/index.html` (placeholder `{{CHECKOUT_URL}}` = link do checkout Cakto). |
| Suporte (e-mail exibido no checkout) | `[LACUNA: o checkout Payt 1 não exibe e-mail de suporte]` | Definir `{{LINK_SUPORTE}}`. |

### Checkout do front (configuração)
| Campo Cakto | Valor literal | Referência / observação |
|---|---|---|
| Subtítulo / texto do topo | `[colar]` ✅ Último passo: informe seus dados e conclua! | (46 car.) Checkout 1. |
| Contador regressivo | Ligado, **06:54**, texto `[colar]` Preencha os dados: | (19 car.) Barra laranja fixa no topo "Preencha os dados:" com "00 horas 06 minutos 54 segundos"; recomeça a cada carga, não persiste. Cakto: contador nativo (também não persiste). Nos checkouts com cupom o texto é "CUPOM APLICADO:"; o de 60% OFF começa em 14:54. |
| Campos do formulário | Referência: só E-mail ("Digite seu e-mail") + Telefone ("(00) x0000-0000") + abas Cartão / Pix; Cartão: Número do cartão ("Digite somente os números"), Titular do cartão ("Digite o nome impresso no cartão"), Validade ("MM/AA"), CVV ("3 ou 4 digitos"), Parcelamento | "Nome completo" recebe o valor fixo "Sua compra sem nome" e "CPF/CNPJ do titular" recebe `029.963.961-46`, ambos escondidos por script (`_tools/pagina/checkout-1-custom-scripts.txt`). **Não replicável na Cakto** (sem script no checkout): alternativa: campos padrão da Cakto (e-mail, telefone, nome, CPF). |
| Order bumps | Ocultos (`html[data-bump-locked]`) até o lead começar a digitar o e-mail; ordem 1 → 2; ambos desmarcados | **Não replicável na Cakto**: alternativa: bumps nativos sempre visíveis, na mesma ordem. |
| Depoimentos (3, com avatar e 5 estrelas) `[depoimentos da referência — não verificados]` | `[colar]` Camila, de São Paulo (São Paulo) — "comprei o código da prosperidade muita expectativa, mas em poucas semanas percebi mudanças bruscas na minha vida dividas estavam travadas começaram a se resolver e novas oportunidades apareceram" · `[colar]` Rafael, de Uberlândia (Minas Gerais) — "Comecei a fazer o código da prosperidade, minha mentalidade mudou completamente. Fechei dois contratos importantes no meu negócio e finalmente senti que a prosperidade começou a fluir na vida" · `[colar]` Gabriela, de Aracaju (Sergipe) — "Eu fiz o código da prosperidade durante 21 dias e algo incrível aconteceu. Surgiu uma oportunidade de trabalho que aumentou minha renda em quase 40% pode parecer coincidência mas aumentou🤩🤩" | Literal do checkout 1 (`v1/funil-completo.md`, "Prova social no checkout"). Aparecem só nos checkouts do produto principal. A Cakto tem bloco de depoimentos no checkout; se não tiver, deixar de fora. |
| Selo de segurança | `[colar]` Você está em AMBIENTE SEGURO 🔒 SSL Criptografia 128 bits | (56 car.) Verde, rodapé + badge reCAPTCHA. Na Cakto o selo é o padrão da plataforma ("Pagamento protegido"); texto não editável → **não replicável**, alternativa: selo padrão da Cakto. |
| Texto do botão | `[colar]` Confirmar Pagamento | (19 car.) Verde, largura total. Pix: "Gerar Pix copia e cola". |
| Texto da garantia (abaixo do botão) | ausente na referência | ver "Garantia" acima. |
| Rodapé legal | `[colar]` Ao comprar, declaro ciência de que a Payt é apenas a tecnologia utilizada em nome do vendedor do produto Código da Prosperidade🔐, sem responsabilidade ou controle prévio sobre produto, conteúdo ou oferta, e aceito os Termos de Compra, Uso e Política de Privacidade. | Texto da Payt (links payt.com.br/termos-de-compra, /termos-de-uso, /politica-de-privacidade) + texto oculto "Este é um produto ou serviço digital, você receberá os dados para acessá-lo via internet." **Não replicável** (cita a Payt): alternativa: rodapé padrão da Cakto. |
| Cupom | Campo visível: `[colar]` Possui cupom de desconto? | (26 car.) Link azul acima do botão. |
| Notificação "N pessoas comprando" | `[colar]` 272 pessoas estão comprando Código da Prosperidade! ⭐ agora. | Rodapé Payt, número varia 272–276 entre cargas; não aparece na 1ª carga do checkout 1, só nos checkouts 2 e 4–10 (nos de upsell: "275 pessoas estão comprando MAPA ASTRAL DA PROSPERIDADE! 🗺️ agora."). **Não replicável na Cakto** com número fixo (a notificação da Cakto usa compras reais): alternativa: ligar a notificação nativa de compras reais ou deixar desligada. |
| Rastreamento | Payt: GTM `GTM-5M8C5B4T` + reCAPTCHA; WordPress: Google tag `GT-TNLLT3GF` (Site Kit) + `cdn.utmify.com.br/scripts/utms/latest.js`; quiz: `headerScript` ofuscado (base64 + XOR), `cloaker: false`, `tracking: true` | Pixel Meta da referência: `[LACUNA: não lido]`. No clone: Pixel próprio (Integrações → Pixel), ver `checklist-subida.md`. |
| Print | `capturas/pagina/checkout-1.png` (desktop) · `checkout-1-mobile.png` · `checkout-1-pix.png` · `checkout-1-bumps-destravados.png` · `order-bump-1.png` | |

---

## 9. Área de membros (Cakto Members): módulos → aulas → texto → anexo

Curso: **Código da Prosperidade! ⭐ (nome do curso na área de membros Payt; no checkout: Código da Prosperidade🔐)**. Ordem exata da referência. Texto = literal de `_tools/lessons-text.md` (dump da área de membros Payt), colar integralmente; aulas vazias na referência ficam vazias. Anexos = arquivos originais em `produto-literal/`.

| # | Módulo (nome literal) | Aula (nome literal) | Texto | Anexo a subir |
|---|---|---|---|---|
| codigo-m01-a01 | 1. Acesse Aqui Nosso Aplicativo | Acesso na Descrição | literal abaixo | nenhum |
| codigo-m02-a01 | 2. Boas Vindas | Aula 1 | literal abaixo | nenhum |
| codigo-m03-a01 | 3. Respostas Personalizadas Sob Demanda | Aula 1 | literal abaixo | nenhum |
| codigo-m03-a02 | 3. Respostas Personalizadas Sob Demanda | Aula 2 | (vazia) | nenhum |
| codigo-m04-a01 | 4. Orientação por Fases da Lua | Aula 1 | literal abaixo | `produto-literal/front/m04-fases-da-lua.pdf` (10 p., PDF-imagem Gamma) — original `criativos/originais/produto/codigo-m04-a01-lesson-attachment-69dd2fcf2f757-8499.pdf` |
| codigo-m04-a02 | 4. Orientação por Fases da Lua | Aula 2 | (vazia) | nenhum |
| codigo-m04-a03 | 4. Orientação por Fases da Lua | Aula 3 | (vazia) | nenhum |
| codigo-m05-a01 | 5. Elevação de Vibração Energética Inicial | Aula 1 | literal abaixo | `produto-literal/front/m05-elevacao-vibracao-7-dias.pdf` (10 p.) — original `…/codigo-m05-a01-lesson-attachment-69dd30428af59-8499.pdf` |
| codigo-m05-a02 | 5. Elevação de Vibração Energética Inicial | Aula 2 | (vazia) | nenhum |
| codigo-m06-a01 | 6. Transformação da Casa em Ímã de Manifestação | Aula 1 | literal abaixo | `produto-literal/front/m06-casa-ima-de-manifestacao.pdf` (10 p.) — original `…/codigo-m06-a01-lesson-attachment-69dd30d746254-8499.pdf` |
| codigo-m06-a02 | 6. Transformação da Casa em Ímã de Manifestação | Aula 2 | (vazia) | nenhum |
| codigo-m07-a01 | 7. Guia de Cristais Personalizados | Aula 1 | literal abaixo | `produto-literal/front/m07-guia-de-cristais.pdf` (10 p.) — original `…/codigo-m07-a01-lesson-attachment-69dd31166c632-8499.pdf` |
| codigo-m07-a02 | 7. Guia de Cristais Personalizados | Aula 2 | (vazia) | nenhum |
| codigo-m08-a01 | 8. Técnicas de Proteção Energética Completa | Aula 1 | literal abaixo | `produto-literal/front/m08-protecao-energetica.pdf` (10 p.) — original `…/codigo-m08-a01-lesson-attachment-69dd36d0b2e05-8499.pdf` |
| codigo-m08-a02 | 8. Técnicas de Proteção Energética Completa | Aula 2 | (vazia) | nenhum |
| codigo-m08-a03 | 8. Técnicas de Proteção Energética Completa | Aula 3 | (vazia) | nenhum |
| codigo-m08-a04 | 8. Técnicas de Proteção Energética Completa | Aula 4 | (vazia) | nenhum |
| codigo-m09-a01 | 9. Presentes Exclusivos | Aula 1 | literal abaixo | `produto-literal/front/m09-7-presentes.pdf` (11 p., texto; `_tools/pdf-codigo-m09-a01-lesson-attachment-69dd37142adca-8499.txt`) — original `…/codigo-m09-a01-lesson-attachment-69dd37142adca-8499.pdf` |
| codigo-m09-a02 | 9. Presentes Exclusivos | Aula 2 | (vazia) | nenhum |

Total: 9 módulos, 19 aulas (10 vazias na referência). Contagem feita no dump `_tools/lessons-text.md` e nos `_tools/lesson-*.txt`; o resumo de `v1/funil-completo.md` diz "10 com conteúdo, 9 vazias" — a contagem do dump é a que vale.

<details><summary><b>codigo-m01-a01</b> — 1. Acesse Aqui Nosso Aplicativo › Acesso na Descrição (print capturas/pagina/produto-codigo-m01-a01.png)</summary>

Observação: **não replicável**: os dois links são apps do concorrente (`sensitivaprospera.vercel.app` pede o e-mail da compra; `codigo-de-prosperidade.lovable.app` tem "Jornada" de 7 dias). Alternativa (1 linha): criar a aula com o texto literal e trocar os links pelo app próprio ou omitir a aula.

Texto da aula `[colar]`:

> Clique no Link abaixo para acessar nosso aplicativo!
>
> [https://sensitivaprospera.vercel.app/](https://sensitivaprospera.vercel.app/)
>
> [https://codigo-de-prosperidade.lovable.app](https://codigo-de-prosperidade.lovable.app)

</details>

<details><summary><b>codigo-m02-a01</b> — 2. Boas Vindas › Aula 1 (print capturas/pagina/produto-codigo-m02-a01.png)</summary>

Observação: o CTA "→ [ASSISTIR A AULA GRATUITA AGORA]" aponta para `https://codigodaprosperidades.online/upareademmembros` (upsell da área de membros, R$ 127, 12x R$ 13,13). No clone: apontar para a própria página de upsell de membros (`{{OTO_MEMBROS_URL}}`).

Texto da aula `[colar]`:

> Bem-vinda, Receptora Cósmica
> Você chegou até aqui.
> E isso não é conversa.
> Nada, no universo, é exclusivo.
> sinto-me honrado em receber este espaço sagrado que construí especialmente para você.
> Ao Ativar seu codigo da prosperidade, você não acabou de adquirir um acompanhamento. Você disse SIM para o universo. Você disse sim para si mesma. E essa coragem... o universo já viu. Já registrado. E vai multiplicar.
> Nos próximos dias, eu estarei ao seu lado. 
> Juntas, vamos interpretar os sinais que o universo te envia, desfazer os bloqueios que você ficou preso por tanto tempo e abrir o caminho para tudo que já é seu por direito cósmico.
> Mas antes de começar os módulos...
> Eu preciso te mostrar algo.
> Quando você planta sua semente, o universo se move.
> E ele me mostrou que existe um passo que precisa para antes de tudo.
> Um passo que a maioria dos Receptores pulam... e é exatamente por isso que as manifestações demoraram.
> Por isso, antes de mergulhar no seu acompanhamento, preparei uma aula especial para você.
> Completamente gratuito.
> Não é longo. Não é complicado.
> Mas ela pode mudar completamente a velocidade de suas manifestações a partir de hoje.
> Clique no botão abaixo e assista agora, antes de continuar.
> Você plantou a semente. Essa aula é a primeira rega.
> [→ [ASSISTIR A AULA GRATUITA AGORA]](https://codigodaprosperidades.online/upareademmembros)

</details>

<details><summary><b>codigo-m03-a01</b> — 3. Respostas Personalizadas Sob Demanda › Aula 1 (print capturas/pagina/produto-codigo-m03-a01.png)</summary>

Observação: **não replicável**: o link é um GPT do concorrente no ChatGPT (`g-mmxXUDVpN-gptarot-ia`, inacessível deslogado). Alternativa (1 linha): criar um GPT próprio e trocar só a URL.

Texto da aula `[colar]`:

> Pergunte o que Quiser — A Qualquer Hora
> Sempre que você tiver uma decisão importante, uma dúvida que não sai da cabeça, ou uma situação que não sabe como lidar... você não precisa esperar.
> Eu condensei todo o meu conhecimento de 17 anos de tarologia, os ensinamentos da linhagem ancestral das ciganas da Romênia e os padrões de mais de 30.000 leituras em uma inteligência artificial treinada com a minha essência.
> Ela conhece o Tarô como eu conheço. Ela entende os sinais como eu entendo. E ela está disponível para você 24 horas por dia, 7 dias por semana.
> Você pode perguntar sobre amor, dinheiro, decisões, relacionamentos, propósito, sonhos, sinais do universo... qualquer coisa.
> 👇 Acesse agora pelo link abaixo e faça sua primeira pergunta:
> [CLIQUE AQUI PARA ACESSAR](https://chatgpt.com/g/g-mmxXUDVpN-gptarot-ia?locale=pt-BR)
> Dica: já anunciamos sua situação com detalhes. Quanto mais você compartilhar, mais precisa e poderosa será a orientação.

</details>

<details><summary><b>codigo-m03-a02</b> — 3. Respostas Personalizadas Sob Demanda › Aula 2 (print capturas/pagina/produto-codigo-m03-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m04-a01</b> — 4. Orientação por Fases da Lua › Aula 1 (print capturas/pagina/produto-codigo-m04-a01.png)</summary>

Anexo: `produto-literal/front/m04-fases-da-lua.pdf` (10 p., PDF-imagem Gamma) — original `criativos/originais/produto/codigo-m04-a01-lesson-attachment-69dd2fcf2f757-8499.pdf`

Texto da aula `[colar]`:

> Sincronize sua Energia com a Lua
>
> A Lua não é apenas um astro no céu.
>
> Ela é um dos maiores amplificadores energéticos do universo. Cada fase dela carrega uma vibração diferente, e quando você aprende a se sincronizar com esse ritmo, suas manifestações aceleram de forma que a maioria das pessoas nunca experimenta.
>
> Neste módulo, você vai descobrir o que cada fase da Lua significa para a sua energia, quais rituais realizar em cada momento do ciclo lunar e como usar o poder da Lua para acelerar suas manifestações em amor, dinheiro e propósito.
>
> 📄 Seu guia completo está disponível para download abaixo.

</details>

<details><summary><b>codigo-m04-a02</b> — 4. Orientação por Fases da Lua › Aula 2 (print capturas/pagina/produto-codigo-m04-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m04-a03</b> — 4. Orientação por Fases da Lua › Aula 3 (print capturas/pagina/produto-codigo-m04-a03.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m05-a01</b> — 5. Elevação de Vibração Energética Inicial › Aula 1 (print capturas/pagina/produto-codigo-m05-a01.png)</summary>

Anexo: `produto-literal/front/m05-elevacao-vibracao-7-dias.pdf` (10 p.) — original `…/codigo-m05-a01-lesson-attachment-69dd30428af59-8499.pdf`

Texto da aula `[colar]`:

> Conteúdo
>
> Prepare-se para Receber
>
> O universo só entrega para quem está vibrando na frequência certa.
>
> É uma lei tão antiga quanto o próprio cosmos: você não pode receber o que está além da sua vibração atual. Por isso, antes de qualquer ritual, antes de qualquer manifestação, o primeiro passo é elevar sua energia.
>
> Neste módulo, você vai aprender as técnicas que eu uso com todas as minhas Receptoras nos primeiros dias de acompanhamento para limpar a energia densa acumulada, elevar sua frequência vibratória rapidamente e abrir seu campo energético para receber.
>
> Faça isso com atenção. É o alicerce de tudo que vem depois.
>
> 📄 Seu guia completo está disponível para download abaixo.

</details>

<details><summary><b>codigo-m05-a02</b> — 5. Elevação de Vibração Energética Inicial › Aula 2 (print capturas/pagina/produto-codigo-m05-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m06-a01</b> — 6. Transformação da Casa em Ímã de Manifestação › Aula 1 (print capturas/pagina/produto-codigo-m06-a01.png)</summary>

Anexo: `produto-literal/front/m06-casa-ima-de-manifestacao.pdf` (10 p.) — original `…/codigo-m06-a01-lesson-attachment-69dd30d746254-8499.pdf`

Texto da aula `[colar]`:

> Conteúdo
>
> Seu Lar, Seu Templo
>
> Você sabia que o ambiente onde você vive pode estar bloqueando o fluxo de abundância na sua vida?
>
> A maioria das pessoas não percebe, mas determinados objetos, disposições e energias dentro de casa criam barreiras invisíveis que impedem o dinheiro, o amor e as oportunidades de chegarem até você.
>
> Neste módulo, você vai descobrir quais elementos em casa podem estar bloqueando seu fluxo de abundância, como reorganizar e limpar seu espaço energeticamente em apenas um dia e como transformar cada ambiente da sua casa em um amplificador das suas manifestações.
>
> Quando seu lar vibra junto com você, o universo tem muito mais facilidade para te entregar o que já é seu.
>
> 📄 Seu guia completo está disponível para download abaixo.

</details>

<details><summary><b>codigo-m06-a02</b> — 6. Transformação da Casa em Ímã de Manifestação › Aula 2 (print capturas/pagina/produto-codigo-m06-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m07-a01</b> — 7. Guia de Cristais Personalizados › Aula 1 (print capturas/pagina/produto-codigo-m07-a01.png)</summary>

Anexo: `produto-literal/front/m07-guia-de-cristais.pdf` (10 p.) — original `…/codigo-m07-a01-lesson-attachment-69dd31166c632-8499.pdf`

Texto da aula `[colar]`:

> Os Cristais Certos para a Sua Energia
>
> Não existe cristal universal.
>
> Cada Receptora Cósmica tem cristais específicos que ressoam com sua frequência, potencializam seus dons e aceleram suas manifestações. Usar o cristal errado pode até dispersar a energia que você está tentando se concentrar.
>
> Neste módulo, você vai aprender quais cristais são mais poderosos para o seu perfil energético, onde posicioná-los em sua casa e no seu corpo e como ativá-los e limpá-los corretamente para que trabalhem em plena potência.
>
> Os cristais são ferramentas vivas. Aprenda a usá-los do jeito certo.
>
> 📄 Seu guia completo está disponível para download abaixo.

</details>

<details><summary><b>codigo-m07-a02</b> — 7. Guia de Cristais Personalizados › Aula 2 (print capturas/pagina/produto-codigo-m07-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m08-a01</b> — 8. Técnicas de Proteção Energética Completa › Aula 1 (print capturas/pagina/produto-codigo-m08-a01.png)</summary>

Anexo: `produto-literal/front/m08-protecao-energetica.pdf` (10 p.) — original `…/codigo-m08-a01-lesson-attachment-69dd36d0b2e05-8499.pdf`

Texto da aula `[colar]`:

> Seu Escudo Invisível
>
> Receptoras Cósmicas sentem mais. Percebem mais. Absorvem mais.
>
> E isso é um dom. Mas também é uma responsabilidade. Porque se você não aprender a se proteger, vai absorver energias de outras pessoas, de ambientes pesados, de olhares invejosos, de palavras carregadas — e isso vai baixar sua vibração e bloquear suas manifestações.
>
> Neste módulo, você vai aprender técnicas completas de proteção energética para o dia a dia, como criar um escudo vibracional antes de sair de casa e como limpar a energia absorvida ao longo do dia antes de dormir.
>
> Proteger-se não é fraqueza. É sabedoria.
>
> 📄 Seu guia completo está disponível para download abaixo.

</details>

<details><summary><b>codigo-m08-a02</b> — 8. Técnicas de Proteção Energética Completa › Aula 2 (print capturas/pagina/produto-codigo-m08-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m08-a03</b> — 8. Técnicas de Proteção Energética Completa › Aula 3 (print capturas/pagina/produto-codigo-m08-a03.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m08-a04</b> — 8. Técnicas de Proteção Energética Completa › Aula 4 (print capturas/pagina/produto-codigo-m08-a04.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>codigo-m09-a01</b> — 9. Presentes Exclusivos › Aula 1 (print capturas/pagina/produto-codigo-m09-a01.png)</summary>

Anexo: `produto-literal/front/m09-7-presentes.pdf` (11 p., texto; `_tools/pdf-codigo-m09-a01-lesson-attachment-69dd37142adca-8499.txt`) — original `…/codigo-m09-a01-lesson-attachment-69dd37142adca-8499.pdf`

Texto da aula `[colar]`:

> Seus 7 Presentes estão aqui, Receptora.
>
> Receptor,
>
> Você Ativou seu codigo.
>
> E o universo já começou a responder.
>
> O que você vai encontrar aqui são os 7 presentes que preparei para você — cada um desenvolvido para agir em uma camada diferente da sua jornada. Não são brindes. São ferramentas. E juntos, eles formam um sistema completo de limpeza, proteção, atração e manifestação para o seu ano de 2026.
>
> Abra o material com calma. Não tente usar tudo de uma vez. O universo trabalha em camadas — e cada presente tem o seu momento certo.
>
> O que você vai encontrar:
>
> 🌿 Banho de Descarrego Ancestral A receita completa transmitida por sete gerações de ciganas da Romênia. Use antes de qualquer ritual importante, sempre que sentir aquela sensação de peso que não passa, ou sempre que precisar recomeçar do zero. Este é o ponto de partida de tudo — você não consegue receber com o campo cheio do que não é seu.
>
> ✨ Os 3 Rituais Secretos de Atração Um para dinheiro. Um para amor. Um para oportunidades. Cada um trabalha em uma frequência diferente e foi transmitido dentro da linhagem montenegrina por séculos. Leia os três antes de decidir qual fazer primeiro — o universo já sabe qual você precisa agora.
>
> 🔮 Âncora Energética Um objeto pessoal que você vai criar, consagrar e carregar todos os dias. Ele segura sua vibração nos momentos em que tudo ao redor tenta derrubá-la. Depois de criar a sua âncora, você vai entender o que é ter uma proteção que não depende de humor, de tempo nem de ritual — ela simplesmente está lá.
>
> 🌙 Calendário Cósmico 2026 Os 12 dias mais poderosos do ano mapeados com o ritual exato para cada um. Salve as datas. Coloque na agenda. Nesses dias, o universo está com as portas abertas — e o que levaria meses para manifestar pode acontecer em horas se você agir no momento certo.
>
> 🛡️ Proteção Energética de Emergência 5 técnicas de 30 segundos para usar quando não há tempo para ritual. No trabalho, no ônibus, em uma reunião difícil, antes de encontrar uma pessoa que te drena. Leia as cinco e escolha a que for mais natural para você. Depois pratique até virar instinto.
>
> 🌙 Leitura de Sonhos Recorrentes Os 15 sonhos mais comuns e o que o universo está tentando te dizer através de cada um. Se você tem um sonho que se repete há anos sem entender, a resposta provavelmente está aqui. Leia com atenção — às vezes uma única interpretação muda a forma como você enxerga uma situação inteira da sua vida.
>
> 📖 Diário de Manifestação Guiado Três perguntas. Dez minutos por dia. E uma forma completamente diferente de se comunicar com o universo — clara, específica e irresistível. Comece amanhã cedo. Não precisa de um diário especial. Qualquer caderno serve. O que transforma não é o objeto — é a intenção que você coloca nas respostas.
>
> O material completo com todos os detalhes, passo a passo e orientações está no PDF abaixo.
>
> Baixe. Leia. E comece.
>
> Com fé e propósito ancestral

</details>

<details><summary><b>codigo-m09-a02</b> — 9. Presentes Exclusivos › Aula 2 (print capturas/pagina/produto-codigo-m09-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>


### 9b. Produto do OTO1 na área de membros — curso "MAPA ASTRAL DA PROSPERIDADE! 🗺️" (código `0ZGNOO1E`)

Curso: **MAPA ASTRAL DA PROSPERIDADE! 🗺️ (área de membros) / Mapa Astral da Prosperidade 🗺️ (checkouts)**. Ordem exata da referência. Texto = literal de `_tools/lessons-text.md` (dump da área de membros Payt), colar integralmente; aulas vazias na referência ficam vazias. Anexos = arquivos originais em `produto-literal/`.

| # | Módulo (nome literal) | Aula (nome literal) | Texto | Anexo a subir |
|---|---|---|---|---|
| mapa-m01-a01 | 1. Acesse Por Aqui O Nosso Aplicativo | Acesso na descrição | literal abaixo | nenhum |
| mapa-m01-a02 | 1. Acesse Por Aqui O Nosso Aplicativo | Aula 2 | (vazia) | nenhum |
| mapa-m02-a01 | 2. Mapa Astral da Prosperidade | Aula 1 | literal abaixo | `produto-literal/oto1/mapa-astral-da-prosperidade.pdf` (8 p.; texto em `_tools/pdf-mapa-m02-a01-MAPA_ASTRAL_DA_PROSPERIDADE.pd.txt`) + `produto-literal/oto1/audio-frequencia-10min.mp3` (10:04) — originais `criativos/originais/produto/mapa-m02-a01-*` |
| mapa-m02-a02 | 2. Mapa Astral da Prosperidade | Aula 2 | (vazia) | nenhum |

Total: 2 módulos, 4 aulas (2 vazias na referência).

<details><summary><b>mapa-m01-a01</b> — 1. Acesse Por Aqui O Nosso Aplicativo › Acesso na descrição (print capturas/pagina/produto-mapa-m01-a01.png)</summary>

Observação: **não replicável**: link para o app Lovable do concorrente (`astral-prosperity-path.lovable.app`, formulário nome/data/hora/cidade). Alternativa (1 linha): app próprio ou omitir a aula.

Texto da aula `[colar]`:

> Bem vindo ao Mapa Astral da Prosperidade, abaixo deixamos o link do nosso aplicativo para uma acesso mais facil.
>
> Link> [Mapa Astral da Prosperidade](https://astral-prosperity-path.lovable.app)

</details>

<details><summary><b>mapa-m01-a02</b> — 1. Acesse Por Aqui O Nosso Aplicativo › Aula 2 (print capturas/pagina/produto-mapa-m01-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>

<details><summary><b>mapa-m02-a01</b> — 2. Mapa Astral da Prosperidade › Aula 1 (print capturas/pagina/produto-mapa-m02-a01.png)</summary>

Anexo: `produto-literal/oto1/mapa-astral-da-prosperidade.pdf` (8 p.; texto em `_tools/pdf-mapa-m02-a01-MAPA_ASTRAL_DA_PROSPERIDADE.pd.txt`) + `produto-literal/oto1/audio-frequencia-10min.mp3` (10:04) — originais `criativos/originais/produto/mapa-m02-a01-*`

Texto da aula `[colar]`:

> Mapa Astral da Prosperidade
> O céu do dia em que você nasceu gravou em você uma frequência única. Este mapa reconstrói esse céu, revela sua frequência vibracional exata e entrega o áudio personalizado para elevá-la enquanto você dorme.
> Quando sua frequência está no ponto certo, o universo te ouve. E quando ele te ouviu — ele entregou.
> Faça o download, leia a Oração de Ativação em voz alta e ouça seu áudio antes de dormir ainda hoje.

</details>

<details><summary><b>mapa-m02-a02</b> — 2. Mapa Astral da Prosperidade › Aula 2 (print capturas/pagina/produto-mapa-m02-a02.png)</summary>

Texto da aula `[colar]`:

> (aula vazia: sem texto, sem vídeo, sem anexo)

</details>


Nota literal do dossiê: o PDF do Mapa Astral "Não é personalizado: não há campo de nome, data ou local de nascimento; a mesma frequência 528 Hz vale para qualquer compradora". O MP3 é áudio de frequência (10:04), não fala. O app externo `astral-prosperity-path.lovable.app` pede nome/data/hora/cidade e "Calcular Meu Mapa" (não preenchido).

### 9c. Upsell e downsell da área de membros (para onde o CTA do módulo 2 aponta)

- `/upareademmembros/` (`<title>` "UPSELL MEMBERS – ."): faixa `[colar]` Para evitar cobranças duplicadas e erros no pedido, não volte, não atualize nem feche esta página. · mesmo player do OTO1 · botão aos 365 s (06:05): `[colar]` Sim, Quero o Mapa Da Prosperidade! → Checkout 9 (Payt `25a8eee4…?split=12&src=upareademembros`, "Mapa Astral da Prosperidade 🗺️", faixa "PREENCHA COM SEUS DADOS!", 12x de R$ 13,13) · `[colar]` Não, obrigado. → `/dowareademembros/` · back-redirect → Checkout 5 (`src=upbackmembers`).
- `/dowareademembros/` (página de texto, sem vídeo; CTAs → Checkout 10, Payt `54668d13…?payment=pix&src=backupmembers`, "ULTIMA CHANCE 50% DE DESCONTO", R$ 67,00 Pix). Texto literal completo:

> **ESPERA — NÃO FECHE ESSA PÁGINA AINDA**
> Espera. O Ás de Pentáculos ainda está virado para você.
>
> Essa janela cósmica não abre duas vezes. Por isso eu vou fazer uma coisa que eu nunca faço.
>
> Eu sei que R$127 pode parecer muito agora.
>
> Mas eu não consigo deixar você sair dessa página sem o seu Mapa Astral da Prosperidade — não enquanto a janela que o Ás de Pentáculos abriu ainda está ativa.
>
> E se essa frequência enfraquecer antes de você agir?
>
> Então eu vou fazer uma exceção hoje.
>
> Só hoje. Só pra você.
>
> De R$127
> ↓
> Por apenas R$67
> 47% de desconto — apenas nessa página
>
> [botão] ✨ Quero meu Mapa Astral da Prosperidade por R$67
> 🔒 Compra 100% segura. Pagamento via Pix ou cartão.
> Você recebe seu Mapa e seu Áudio em até 24 horas.
>
> O que você recebe para destravar sua prosperidade:
> ✓ Mapa Astral da Prosperidade — reconstrução do céu exato do instante em que você nasceu, revelando sua frequência vibracional única
> ✓ Áudio de Frequência Personalizado — criado exclusivamente para você com base no seu mapa, para ouvir antes de dormir e elevar sua vibração enquanto descansa
> ✓ Bônus 1: Decreto de Ativação ao Acordar — a frase exata, extraída do seu mapa astral, para falar nos primeiros 60 segundos do dia e multiplicar o efeito do seu áudio
> ✓ Bônus 2: Termômetro de Frequência — guia prático para sentir, dia a dia, se sua vibração está subindo ou descendo e saber o momento certo de agir
> ✓ Bônus 3: Leitura dos Pentáculos — os quatro pentáculos lidos junto ao seu mapa, revelando por qual área o dinheiro vai entrar primeiro na sua vida
> ✓ Garantia de 60 dias — se em 60 dias você seguir as orientações e não sentir nenhuma diferença na sua vida financeira, eu devolvo 100% do seu dinheiro
>
> Esse desconto existe só nessa página.
> Quando você fechar, a janela que o Ás de Pentáculos abriu vai se fechar junto.
> O valor volta para R$127 — e a energia cósmica de hoje não volta.
>
> [botão] 🌟 Sim, quero aproveitar essa janela por R$67
> 🔒 Compra 100% segura. Pagamento via Pix ou cartão.
> Você recebe seu Mapa e seu Áudio em até 24 horas.
>
> 🛡️ Garantia de 60 dias
> Se em 60 dias você seguir as orientações, ouvir o áudio todas as noites, e mesmo assim não sentir nenhuma movimentação financeira na sua vida — eu devolvo 100% do seu dinheiro. Sem perguntas. Sem burocracia.
>
> [link] Não, prefiro fechar essa janela e perder essa oportunidade.
- Visual: fundo escuro, título em caixa alta, preço riscado "De R$127" com seta para "Por apenas R$67", botões dourados/verdes `class="ds-btn"` de largura total, lista com ✓, caixa de garantia com escudo.
- CTAs: os dois botões → https://checkout.payt.com.br/54668d13816469719333ff25ca5f03ea?payment=pix&src=backupmembers (Checkout 10, R$ 67,00 Pix) · "Não, prefiro fechar…" → `#`

### 9d. Produtos dos bumps na área de membros
`[LACUNA: bumps não comprados — nenhuma área de membros dos bumps observada]`. Plano B: `produto-homologado/` (Numerologia da Prosperidade, Ritual da Chave Dourada).

---


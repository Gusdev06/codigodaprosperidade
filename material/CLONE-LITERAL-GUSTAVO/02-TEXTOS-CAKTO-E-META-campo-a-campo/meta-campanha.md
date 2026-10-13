> REFERÊNCIA LITERAL — montado em 2026-09-13 a partir dos dossiês do run. Não é texto novo.

# Meta Ads: estrutura da campanha com os 15 anúncios LITERAIS da referência

Molde de campos: `subida/meta-campanha.md` (versão homologada). Valores: `v1/anuncios-referencia.md` (ficha do Bruno: headline, descrição, CTA, display link, URL final, `snapshot.body = null`), `_memory/anuncios-registro.md` (slug), `LITERAL/anuncios-1080p/` (vídeo original upscalado para 1080p). O que a referência não tem está marcado `[LACUNA]`; o que não pode ser copiado como está (URL final do concorrente) está marcado com a instrução de troca. Campanha/conjunto/orçamento/público da referência: **não observáveis na Biblioteca de Anúncios** (a Biblioteca só mostra o criativo, o texto, o CTA, o link e as datas) → `[LACUNA]` nesses campos; os campos de estrutura abaixo repetem o molde homologado só como esqueleto.

O que a Biblioteca mostra de estrutura (literal, `v1/anuncios-referencia.md`, Cabeçalho): anunciante "A Fórmula da Prosperidade" (page_id 101172615610645, categoria "City", 506 curtidas); ~75 anúncios ativos em 2026-09-12, 15 capturados; plataformas Facebook + Instagram em todos; todos com `link_url` idêntico `https://codigodaprosperidades.online/aba`; CTA "Saiba mais" (exceção #1 "Ver detalhes"); dois criativos com 14 versões idênticas (só muda display link/data); 5 domínios de display link (frequenciadivina.com.br, codigosdebencaos.com, codigosdagraca.com, codigodaprosperid.com.br).

URL final da referência (todas as peças): `https://codigodaprosperidades.online/aba` → 301 → `https://codigodaprosperidades.online/aba/` (200), sem UTMs. **O clone não pode apontar para lá: trocar por `https://quizprosperidade.vercel.app/quizprosperidade` (quiz literal em `_deploy3/quizprosperidade/`, placeholder até o domínio final).** A `/aba/` da referência é um split de entrada que redireciona para o quiz e tem back-redirect para o checkout Pix R$ 57 (`src=backpv`).

---

## 1. Campanha

| Campo | Valor |
|---|---|
| Nome | `[LACUNA: nome da campanha da referência não é visível na Biblioteca]` · molde homologado: CP · Vendas · Quiz · Leva1 · CBO |
| Objetivo | `[LACUNA]` (não visível) · molde: Vendas |
| Tipo de compra | `[LACUNA]` · molde: Leilão |
| Orçamento | `[LACUNA]` · molde: CBO diário |
| Categoria especial | `[LACUNA]` · molde: Nenhuma |
| Teste A/B | `[LACUNA]` · molde: Não |
| Advantage+ Campaign | `[LACUNA]` · molde: Desligado |

## 2. Conjunto de anúncios

| Campo | Valor |
|---|---|
| Nome | `[LACUNA]` · molde: CP · BR · 35+ · Espiritualidade · Reels-Stories-Feed |
| Conversão / Pixel / Evento | `[LACUNA]` (a referência usa Google tag GT-TNLLT3GF + utmify no WordPress e GTM-5M8C5B4T na Payt; pixel Meta não lido) · molde: Site / Pixel na Cakto e no quiz / Purchase |
| Localização | `[LACUNA]` (Biblioteca aberta com `country=ALL`; alcance por país não capturado) · molde: Brasil |
| Idade / Gênero | `[LACUNA]` (o texto falado do #5 nomeia "mulher acima dos 50"; #13 diz "minha irmã"; público real não visível) · molde: 35–65+, todos |
| Idioma | Português (Brasil) — todos os 15 vídeos são em português |
| Interesses | `[LACUNA]` · molde: Espiritualidade · Tarô · Astrologia · Horóscopo · Oração · Numerologia · Meditação · Lei da atração · Simpatias · Feng shui |
| Posicionamentos | Facebook + Instagram (literal, `publisher_platforms` de todos os 15); posicionamentos específicos `[LACUNA]` · molde: Reels/Stories/Feed |
| Formato de mídia | vídeo 9:16, original 720x1280, 30 fps, h264/aac, legenda nativa embutida (todos os 15); subir o upscale 1080x1920 de `LITERAL/anuncios-1080p/` |

## 3. Orçamento

`[LACUNA: gasto e orçamento da referência não visíveis — anunciante fora da UE, a Biblioteca não mostra gasto]`. Molde homologado (`subida/meta-campanha.md` seção 3): R$ 250/dia mínimo · R$ 800/dia recomendado · R$ 1.300/dia teto, CPA-alvo R$ 112–131.

---

## 4. Anúncios (15), na ordem de rank da referência

Campos comuns a todos (literal): Identidade = página "A Fórmula da Prosperidade" (a do clone: `[LACUNA: criar página própria]`); Formato = vídeo único 9:16; Destino = site; **Texto primário = ausente em todos (`snapshot.body = null`)**; Descrição = ausente em todos; Legendas = nativas, embutidas no vídeo; Parâmetros de URL = nenhum na referência (sem UTMs). Aprimoramentos Advantage+ de criativo: `[LACUNA]` (molde: desligados).

Contagem entre parênteses = caracteres do texto literal. Limite do Meta: headline 40 (recomendado; acima disso o Meta aceita mas pode cortar na exibição), descrição 30, texto primário 125 antes do "ver mais".

### #01 · 01-afirmacao-deposito-por-engano-cravos-88s · Library ID 971223535998283 (leva 1)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 01-afirmacao-deposito-por-engano-cravos-88s (43 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[LACUNA: ausente na referência — title = null; o card mostra só o nome da página]` |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Ver detalhes |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=01-afirmacao-deposito-por-engano-cravos-88s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/01-afirmacao-deposito-por-engano-cravos-88s-1080p.mp4` (1:28, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/01-afirmacao-deposito-por-engano-cravos-88s.mp4` = `criativos/originais/971223535998283.mp4` |
| Miniatura | `criativos/originais/971223535998283-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Uma pessoa que é milionária vai te fazer um depósito por engano, mas logo ela vai se dar conta de que você precisa mais do que ela e vai deixar com você. Mas Deus mostra que isso só vai acontecer se obedecer e continuar no vídeo. Pense sete vezes antes de pular esse vídeo, porque ele é uma revelação de Deus diretamente dos céus. A estátua do homem velho mostra que uma prosperidade vai recair sobre a sua vida e os seus compromissos vão ser arcados" |
| Dados da Biblioteca | start 2026-08-31 · 12 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #02 · 02-curiosidade-novela-jantar-sogro-101s · Library ID 1387749862852694 (leva 1)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 02-curiosidade-novela-jantar-sogro-101s (39 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que pode estar impedindo você de vencer (50 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://codigosdebencaos.com (exibido como "codigosdebencaos.com") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=02-curiosidade-novela-jantar-sogro-101s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/02-curiosidade-novela-jantar-sogro-101s-1080p.mp4` (1:41, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/02-curiosidade-novela-jantar-sogro-101s.mp4` = `criativos/originais/1387749862852694.mp4` |
| Miniatura | `criativos/originais/1387749862852694-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Tome, meu amor. Aqui está sua comidinha. Obrigado, minha linda rainha. Tome, papai. Aqui está seu lanche. Amor, por que você serviu tão pouca comida pro seu pai e pra mim, serviu esse banquete todo? Você deveria servir a nós dois por igual. Mas, meu amor, é que meu pai não trabalha e eu também não. Sinto que trouxe mais um peso pra dentro de casa. Como você é o único que tá se esforçando e gastando com a comida, eu tento economizar o máximo possível. Não quero que meu pai seja um incômodo ou um peso pra você. Escute." |
| Dados da Biblioteca | start 2026-09-01 · 11 dias · status Ativo · 14 versão(ões) · Facebook, Instagram |

### #03 · 03-beneficio-pix-45mil-bola-de-cristal-76s · Library ID 1034161386284829 (leva 1)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 03-beneficio-pix-45mil-bola-de-cristal-76s (42 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que pode estar impedindo você de vencer (50 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://codigosdebencaos.com (exibido como "HTTPS://CODIGOSDEBENCAOS.COM") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=03-beneficio-pix-45mil-bola-de-cristal-76s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/03-beneficio-pix-45mil-bola-de-cristal-76s-1080p.mp4` (1:16, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/03-beneficio-pix-45mil-bola-de-cristal-76s.mp4` = `criativos/originais/1034161386284829.mp4` |
| Miniatura | `criativos/originais/1034161386284829-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Tem dinheiro chegando para você. E é mais do que você imagina. Uma virada poderosa de um pix muito farto pode acontecer em até 15 horas. Isso vai acontecer, porque eu vim te entregar a carta de Jesus, transformando papel em dinheiro diretamente por Deus para a sua família. Foi por isso que a dona Laudilene finalmente teve o papel assinado na justiça, que estava atrasado há mais de 10 anos. E finalmente recebeu a quantia farta, que foi aprovada pela vitória de Deus em sua vida. Ela simplesmente..." |
| Dados da Biblioteca | start 2026-09-01 · 11 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #04 · 04-afirmacao-sao-miguel-carta-ouro-5-horas-122s · Library ID 1113476378035980 (leva 1)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 04-afirmacao-sao-miguel-carta-ouro-5-horas-122s (47 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que está impedindo você de avançar (45 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=04-afirmacao-sao-miguel-carta-ouro-5-horas-122s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/04-afirmacao-sao-miguel-carta-ouro-5-horas-122s-1080p.mp4` (2:02, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/04-afirmacao-sao-miguel-carta-ouro-5-horas-122s.mp4` = `criativos/originais/1113476378035980.mp4` |
| Miniatura | `criativos/originais/1113476378035980-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "[LACUNA]" |
| Dados da Biblioteca | start 2026-09-02 · 10 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #05 · 05-urgencia-universo-te-encontrou-zodiaco-138s · Library ID 1036730742562449 (leva 1)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 05-urgencia-universo-te-encontrou-zodiaco-138s (46 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que está impedindo você de avançar (45 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=05-urgencia-universo-te-encontrou-zodiaco-138s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/05-urgencia-universo-te-encontrou-zodiaco-138s-1080p.mp4` (2:18, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/05-urgencia-universo-te-encontrou-zodiaco-138s.mp4` = `criativos/originais/1036730742562449.mp4` |
| Miniatura | `criativos/originais/1036730742562449-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "O universo te encontrou, agora se não quiser perder, a bênção financeira precisa me escutar até o final. Um homem de cabelos grisalhos vai mandar uma bênção financeira na conta de uma mulher, acima dos 50, direto do exterior. Essa mulher é você. E para essa bênção não ser apagada para sempre, você precisa ativar me escute. O mensageiro de Deus está com um recado para você. Mulher que sofre com a falta de dinheiro há muito tempo." |
| Dados da Biblioteca | start 2026-09-02 · 10 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #06 · 06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s · Library ID 1075528602000857 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s (48 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` ⭐⭐⭐⭐⭐ (5 car., ok) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "frequenciadivina.com.br") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s-1080p.mp4` (1:59, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s.mp4` = `criativos/originais/1075528602000857.mp4` |
| Miniatura | `criativos/originais/1075528602000857-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "No seu quarto. Eu preciso falar com você sobre algo que vai acontecer no seu quarto esta noite. Haverá uma presença sobrenatural no teu quarto. Não, não é do mal. Será um anjo do Senhor. Escuta, se você pular ou fechar este vídeo antes do final, esse anjo não cumprirá a missão que Deus enviou para ele cumprir na tua vida. Existe um objeto em sua casa que está travando uma batalha espiritual contra você. Uma mulher o colocou lá para bloquear a prosperidade infinita que Deus colocou em sua vida. E eu preciso te entregar essa revelação. São Jorge pediu para te avisar. Não importa o horário que veja esse vídeo, nas próximas..." |
| Dados da Biblioteca | start 2026-09-03 · 9 dias · status Ativo · 2 versão(ões) · Facebook, Instagram |

### #07 · 07-beneficio-oracao-crianca-ajoelhada-106s · Library ID 1327497469461669 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 07-beneficio-oracao-crianca-ajoelhada-106s (42 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` ⭐⭐⭐⭐⭐ (5 car., ok) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://codigodaprosperid.com.br (exibido como "codigodaprosperid.com.br") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=07-beneficio-oracao-crianca-ajoelhada-106s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/07-beneficio-oracao-crianca-ajoelhada-106s-1080p.mp4` (1:46, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/07-beneficio-oracao-crianca-ajoelhada-106s.mp4` = `criativos/originais/1327497469461669.mp4` |
| Miniatura | `criativos/originais/1327497469461669-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "[LACUNA]" |
| Dados da Biblioteca | start 2026-09-03 · 9 dias · status Ativo · 2 versão(ões) · Facebook, Instagram |

### #08 · 08-afirmacao-sao-bento-moeda-atras-da-porta-113s · Library ID 4435978860052405 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 08-afirmacao-sao-bento-moeda-atras-da-porta-113s (48 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que está impedindo você de avançar (45 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=08-afirmacao-sao-bento-moeda-atras-da-porta-113s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/08-afirmacao-sao-bento-moeda-atras-da-porta-113s-1080p.mp4` (1:53, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/08-afirmacao-sao-bento-moeda-atras-da-porta-113s.mp4` = `criativos/originais/4435978860052405.mp4` |
| Miniatura | `criativos/originais/4435978860052405-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "São Bento me revela que o dinheiro que você pediu já está a caminho. Apenas coloque uma moeda atrás da porta de casa. Existe uma pessoa que perdeu a bênção que estava destinada para hoje por puro orgulho. Mas, como eu sei que você tem um coração bom, essa mesma bênção foi transferida para suas mãos agora. São Bento desceu com uma ordem para te entregar um grande milagre que vai cancelar as suas dívidas, te dar condições de apoiar seus entes queridos e, acima de tudo," |
| Dados da Biblioteca | start 2026-09-03 · 9 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #09 · 09-curiosidade-objeto-amaldicoado-tarot-150s · Library ID 1735350944394298 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 09-curiosidade-objeto-amaldicoado-tarot-150s (44 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que está impedindo você de avançar (45 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=09-curiosidade-objeto-amaldicoado-tarot-150s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/09-curiosidade-objeto-amaldicoado-tarot-150s-1080p.mp4` (2:30, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/09-curiosidade-objeto-amaldicoado-tarot-150s.mp4` = `criativos/originais/1735350944394298.mp4` |
| Miniatura | `criativos/originais/1735350944394298-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Existe um objeto em sua casa que está amaldiçoado. Uma mulher o colocou lá para bloquear a prosperidade infinita que Deus colocou em sua vida. Eu vou revelar tudo sobre isso. Pelo amor de Deus, não role a tela. Ou você vai pecar contra a sua própria família, recusando a grande bênção financeira que o Senhor enviou hoje. O Pai Eterno colocou nesse vídeo o documento sagrado, que vai quitar todas as suas dívidas. Me ouça até o final. A carta da prosperidade infinita foi enviada do céu para derramar uma quantidade..." |
| Dados da Biblioteca | start 2026-09-03 · 9 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #10 · 10-afirmacao-carta-da-riqueza-5-of-cups-129s · Library ID 2069028650653450 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 10-afirmacao-carta-da-riqueza-5-of-cups-129s (44 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que está impedindo você de avançar (45 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=10-afirmacao-carta-da-riqueza-5-of-cups-129s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/10-afirmacao-carta-da-riqueza-5-of-cups-129s-1080p.mp4` (2:09, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/10-afirmacao-carta-da-riqueza-5-of-cups-129s.mp4` = `criativos/originais/2069028650653450.mp4` |
| Miniatura | `criativos/originais/2069028650653450-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "[LACUNA]" |
| Dados da Biblioteca | start 2026-09-03 · 9 dias · status Ativo · 1 versão(ões) · Facebook, Instagram |

### #11 · 11-afirmacao-arruda-espada-sao-jorge-77s · Library ID 910321935107125 (leva 1)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 11-afirmacao-arruda-espada-sao-jorge-77s (40 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que pode estar impedindo você de vencer (50 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://codigosdagraca.com (exibido como "codigosdagraca.com") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=11-afirmacao-arruda-espada-sao-jorge-77s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/11-afirmacao-arruda-espada-sao-jorge-77s-1080p.mp4` (1:17, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/11-afirmacao-arruda-espada-sao-jorge-77s.mp4` = `criativos/originais/910321935107125.mp4` |
| Miniatura | `criativos/originais/910321935107125-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Em nome do Pai, do Filho e do Espírito Santo, com esta arruda e com esta espada de São Jorge, eu tiro toda a inveja, o mau olhado e profetizo uma chuva de riqueza em sua vida. Nem pense em pular esse vídeo, senão estará rejeitando a própria voz de Deus na sua vida. Porque essa arruda e espada de São Jorge traz uma revelação muito importante para a sua vida. Um depósito muito farto. Vai chegar até sua conta em duas horas. Senão eu quebro o meu celular e paro de anunciar a mensagem de Deus. Porque a última mulher..." |
| Dados da Biblioteca | start 2026-09-04 · 8 dias · status Ativo · 14 versão(ões) · Facebook, Instagram |

### #12 · 12-pergunta-inveja-antiga-alho-15s-116s · Library ID 1136473299078186 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 12-pergunta-inveja-antiga-alho-15s-116s (39 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que pode estar impedindo você de vencer (50 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://codigosdagraca.com (exibido como "codigosdagraca.com") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=12-pergunta-inveja-antiga-alho-15s-116s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/12-pergunta-inveja-antiga-alho-15s-116s-1080p.mp4` (1:56, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/12-pergunta-inveja-antiga-alho-15s-116s.mp4` = `criativos/originais/1136473299078186.mp4` |
| Miniatura | `criativos/originais/1136473299078186-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Você sabia que sua vida financeira só está travada por conta de uma inveja antiga? Faça isso com o alho em 15 segundos para destravar hoje. Existe uma pessoa que perdeu a bênção que estava destinada para hoje, por puro orgulho e por ignorá-la. Mas, como eu sei que você tem um coração bom, essa mesma bênção foi transferida para suas mãos. Agora, eu sou São Bento e eu desci com uma ordem para te entregar um grande milagre que vai cancelar as suas dívidas de dar condições..." |
| Dados da Biblioteca | start 2026-09-10 · 2 dias · status Ativo · 3 versão(ões) · Facebook, Instagram |

### #13 · 13-curiosidade-chave-bmw-concessionaria-95s · Library ID 1333202536540714 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 13-curiosidade-chave-bmw-concessionaria-95s (43 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que pode estar impedindo você de vencer (50 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://codigosdagraca.com (exibido como "codigosdagraca.com") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=13-curiosidade-chave-bmw-concessionaria-95s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/13-curiosidade-chave-bmw-concessionaria-95s-1080p.mp4` (1:35, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/13-curiosidade-chave-bmw-concessionaria-95s.mp4` = `criativos/originais/1333202536540714.mp4` |
| Miniatura | `criativos/originais/1333202536540714-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Esta chave de carro novo não apareceu na sua tela por acaso. Nos próximos dias, o dinheiro para conquistá-la vai chegar. Minha irmã, não pule este vídeo. Estamos em um combate espiritual e o demônio quer que você saia agora apenas para queimar e destruir a sua maior bênção financeira. As cartas de Nossa Senhora Desatadora dos Nós decretaram o seu livramento. Dois depósitos divinos de alto valor estão a caminho para limpar todas as suas pendências. Esse é um sinal dos céus que não falha. Essa foi a mesma carta que apareceu para nossa irmã Cícera e no outro dia ela..." |
| Dados da Biblioteca | start 2026-09-11 · 1 dias · status Ativo · 3 versão(ões) · Facebook, Instagram |

### #14 · 14-afirmacao-maquete-casa-sao-miguel-152s · Library ID 1618190073029406 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 14-afirmacao-maquete-casa-sao-miguel-152s (41 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` ⭐⭐⭐⭐⭐ (5 car., ok) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "frequenciadivina.com.br") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=14-afirmacao-maquete-casa-sao-miguel-152s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/14-afirmacao-maquete-casa-sao-miguel-152s-1080p.mp4` (2:32, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/14-afirmacao-maquete-casa-sao-miguel-152s.mp4` = `criativos/originais/1618190073029406.mp4` |
| Miniatura | `criativos/originais/1618190073029406-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "Dentro da tua casa está para chegar uma grande quantia divina de uma pessoa que você conhece há muito tempo. Ela acaba de ser enviada pela estátua de São Miguel. Pelo amor a Cristo, não pule este vídeo de jeito nenhum. Senão, uma ruína de pobreza vai cair sobre sua família se recusar a mensagem urgente que o Pai Eterno traz para salvar sua família da aflição. A milagrosa estátua de São Miguel revelou que uma chuva de graças financeiras vai desabar sobre o seu teto. Suas dívidas sufocantes serão quitadas em 26 horas." |
| Dados da Biblioteca | start 2026-08-30 · 13 até a captura (11 até o `end_date` de 2026-09-10) dias · status não · 2 versão(ões) · Facebook, Instagram |

### #15 · 15-afirmacao-arrume-as-malas-chave-de-ouro-156s · Library ID 1741748180279919 (leva 2)
| Campo | Valor |
|---|---|
| Nome do anúncio | `[colar]` 15-afirmacao-arrume-as-malas-chave-de-ouro-156s (47 car.) — slug do registro `_memory/anuncios-registro.md` |
| Texto primário | `[LACUNA: a referência não usa texto primário — snapshot.body = null]` |
| Headline | `[colar]` Descubra o que está impedindo você de avançar (45 car., acima do recomendado de 40; o Meta aceita, pode cortar na exibição) |
| Descrição | `[LACUNA: ausente na referência]` |
| CTA | Saiba mais |
| Display link (caption) | `[colar]` https://frequenciadivina.com.br (exibido como "HTTPS://FREQUENCIADIVINA.COM.BR") — domínio do concorrente: trocar pelo domínio do quiz do clone |
| URL do site (referência) | https://codigodaprosperidades.online/aba → 301 → https://codigodaprosperidades.online/aba/ (200) → **no clone: `https://quizprosperidade.vercel.app/quizprosperidade`** |
| Parâmetros de URL | nenhum na referência (sem UTMs). Se quiser rastrear: molde homologado `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content=15-afirmacao-arrume-as-malas-chave-de-ouro-156s&utm_term={{adset.name}}&src=meta` |
| Vídeo | `LITERAL/anuncios-1080p/15-afirmacao-arrume-as-malas-chave-de-ouro-156s-1080p.mp4` (2:36, 9:16, 1080x1920 upscale; gerado) · original 720p: `LITERAL/anuncios-720p-originais/15-afirmacao-arrume-as-malas-chave-de-ouro-156s.mp4` = `criativos/originais/1741748180279919.mp4` |
| Miniatura | `criativos/originais/1741748180279919-capa.jpg` (capa 1080x1920 da Biblioteca) |
| Gancho falado 0–30 s (literal, Whisper) | "[LACUNA]" |
| Dados da Biblioteca | start 2026-09-03 · 9 até a captura (7 até o `end_date` de 2026-09-10) dias · status não · 1 versão(ões) · Facebook, Instagram |

---

## 5. Resumo de limites (conferência)

| # | Slug | Texto primário | Headline | Descrição | CTA | Display link |
|---|---|---|---|---|---|---|
| 01 | 01-afirmacao-deposito-por-engano-cravos-88s | ausente | ausente | ausente | Ver detalhes | HTTPS://FREQUENCIADIVINA.COM.BR |
| 02 | 02-curiosidade-novela-jantar-sogro-101s | ausente | 50 / 40 | ausente | Saiba mais | codigosdebencaos.com |
| 03 | 03-beneficio-pix-45mil-bola-de-cristal-76s | ausente | 50 / 40 | ausente | Saiba mais | HTTPS://CODIGOSDEBENCAOS.COM |
| 04 | 04-afirmacao-sao-miguel-carta-ouro-5-horas-122s | ausente | 45 / 40 | ausente | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR |
| 05 | 05-urgencia-universo-te-encontrou-zodiaco-138s | ausente | 45 / 40 | ausente | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR |
| 06 | 06-curiosidade-anjo-no-seu-quarto-sao-jorge-119s | ausente | 5 / 40 | ausente | Saiba mais | frequenciadivina.com.br |
| 07 | 07-beneficio-oracao-crianca-ajoelhada-106s | ausente | 5 / 40 | ausente | Saiba mais | codigodaprosperid.com.br |
| 08 | 08-afirmacao-sao-bento-moeda-atras-da-porta-113s | ausente | 45 / 40 | ausente | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR |
| 09 | 09-curiosidade-objeto-amaldicoado-tarot-150s | ausente | 45 / 40 | ausente | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR |
| 10 | 10-afirmacao-carta-da-riqueza-5-of-cups-129s | ausente | 45 / 40 | ausente | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR |
| 11 | 11-afirmacao-arruda-espada-sao-jorge-77s | ausente | 50 / 40 | ausente | Saiba mais | codigosdagraca.com |
| 12 | 12-pergunta-inveja-antiga-alho-15s-116s | ausente | 50 / 40 | ausente | Saiba mais | codigosdagraca.com |
| 13 | 13-curiosidade-chave-bmw-concessionaria-95s | ausente | 50 / 40 | ausente | Saiba mais | codigosdagraca.com |
| 14 | 14-afirmacao-maquete-casa-sao-miguel-152s | ausente | 5 / 40 | ausente | Saiba mais | frequenciadivina.com.br |
| 15 | 15-afirmacao-arrume-as-malas-chave-de-ouro-156s | ausente | 45 / 40 | ausente | Saiba mais | HTTPS://FREQUENCIADIVINA.COM.BR |

## 6. Antes de publicar
- Os 15 slugs já estão em `_memory/anuncios-registro.md` (status "clonado"); não recriar.
- Trocar a URL final `https://codigodaprosperidades.online/aba` (concorrente) por `https://quizprosperidade.vercel.app/quizprosperidade` em todos os 15 anúncios; trocar o display link pelo domínio próprio.
- Esperar a geração terminar em `LITERAL/anuncios-1080p/` (15 arquivos `{slug}-1080p.mp4`); conferir duração igual à do original 720p.
- Vídeos são cópias byte-a-byte da referência (apresentadores, marca d'água, provas sociais e nomes de terceiros incluídos): publicar como está é uso de material alheio — decisão do usuário.

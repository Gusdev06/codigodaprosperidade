> REFERÊNCIA LITERAL — montado em 2026-09-13 a partir dos dossiês do run. Não é texto novo.

# Checklist de subida — versão LITERAL (Cakto + quiz `/quizprosperidade` + Meta com os 15 vídeos originais)

Molde: `subida/checklist-subida.md` (homologada). Valores: `LITERAL/subida-literal/cakto-produto.md` e `LITERAL/subida-literal/meta-campanha.md`. Situação em 2026-09-13: pacote literal montado; vídeos 1080p em geração (15/15 prontos no momento da montagem); nada publicado.

Aviso registrado (não é opinião, é o que o pacote contém): tudo aqui é cópia literal do concorrente "A Fórmula da Prosperidade" — vídeos com os apresentadores deles, nome de produto igual, depoimentos deles (não verificados), PDFs assinados "Cassandra Montenegro". A decisão de subir assim é do usuário.

## 0. Antes de tudo (decisões e contas)
- [ ] Nome do produto: "Código da Prosperidade🔐" (literal; colisão com o concorrente registrada em `v1/blueprint-clone.md` seção 5).
- [ ] Definir e-mail de suporte (`{{LINK_SUPORTE}}`) — `[LACUNA: a referência não exibe]`.
- [ ] Página do Facebook + conta do Instagram para a identidade dos anúncios — `[LACUNA: a da referência é "A Fórmula da Prosperidade", page_id 101172615610645; não usar]`.
- [ ] Conta Cakto com dados bancários aprovados; conta de anúncios Meta com forma de pagamento.
- [ ] Baixar as 3 imagens de capa que faltam (front 1254x1254 `content.payt.com.br/app/uploads/6a126a690c042506baf910c67b163390.png`; bump 1 382x382; bump 2 1240x1240) ou fazer arte própria — `[LACUNA: arquivos não baixados]`.

## 1. Cakto: produtos e checkout
- [ ] Criar produto principal "Código da Prosperidade🔐" (R$ 77; 12x juros ao comprador; Pix R$ 77; garantia: mínimo da Cakto, a referência não tem; tipo área de membros) — `cakto-produto.md` seção 1.
- [ ] Checkout: subtítulo "✅ Último passo: informe seus dados e conclua!"; contador 06:54 "Preencha os dados:"; botão "Confirmar Pagamento"; cupom "Possui cupom de desconto?"; 3 depoimentos literais `[depoimentos da referência — não verificados]`; itens não replicáveis (Nome/CPF ocultos, bumps ocultos, "272 pessoas", selo/rodapé Payt) → alternativas da seção 10.
- [ ] Criar produto "NUMEROLOGIA JUDAICA!🧘🏼‍♀️🔓" (R$ 27,70; entrega `[LACUNA]`) e produto "🗺️CHAVE DOS CAMINHOS FINANCEIROS" (R$ 27,00; entrega `[LACUNA]`).
- [ ] Ligar order bump 1 (Numerologia Judaica, tag "Novidade", de R$ 59,90 por R$ 27,70, chamada "CLIQUE PARA INCLUIR 👇", desmarcado, ordem 1) e order bump 2 (Chave dos Caminhos, tag "Recomendado", de R$ 39,90 por R$ 27,00, chamada "⬅️ SIM, EU QUERO!", desmarcado, ordem 2) com as descrições literais da seção 2 e 3.
- [ ] Criar produto "Mapa Astral da Prosperidade 🗺️" (R$ 127; 12x; garantia 7 dias) e as ofertas: R$ 97 (downsell 1 / back-redirect 30% OFF), Pix R$ 51,30 (60% OFF, "Não" do downsell 1), 12x R$ 13,13 (upsell de membros), Pix R$ 67 (downsell de membros).
- [ ] Criar produto "Constelação Familiar da Abundância💫" (R$ 197; 12x R$ 20,37) e as ofertas: R$ 147 / 12x R$ 15,20 (downsell 2, 30% OFF) e 12x R$ 5,90 (70% OFF, "Não" do downsell 2). Entrega `[LACUNA: não comprado]`.
- [ ] Ligar o fluxo: front → `/up1/` (OTO1 one-click, botão aos 385 s) → "Não, Obrigado." → `/dow11/` (one-click R$ 97, botão aos 75 s) → "Não, obrigado." → Pix R$ 51,30; aceite do OTO1 → `/upabs2/` (OTO2 one-click, botão aos 545 s) → "Não, obrigado." → `/dowup02/` (botão aos 90 s) → "✨ Sim, Quero Com o Desconto!" R$ 147 / "Não, obrigado." 12x R$ 5,90. Anotar `{{OTO1_ACCEPT_URL}}`, `{{DOWNSELL_URL}}`, `{{DOWNSELL_ACCEPT_URL}}`, `{{OTO2_ACCEPT_URL}}`, `{{DOWNSELL2_URL}}`.
- [ ] Hospedar as 4 páginas de upsell fora da Cakto com o vídeo original (`criativos/originais/vsl-up1.mp4`, `vsl-dow11.mp4`, `vsl-upabs2.mp4`, `vsl-dowup02.mp4`), as faixas literais, os botões literais e o script `SECONDS_TO_DISPLAY` (385 / 75 / 545 / 90; `.esconder`; `localStorage` 14 dias).
- [ ] Criar a oferta Pix R$ 57 do produto principal ("Código da Prosperidade.🔐(30% OFF)", subtítulo "✅ Preencha os dados de pagamento para finalizar sua compra.") e colar no back-redirect do checkout (ou em `{{BACK_REDIRECT_URL}}` no quiz).
- [ ] Copiar o link do checkout principal: é o `{{CHECKOUT_URL}}` do quiz literal.
- [ ] Página de obrigado: `[LACUNA: não capturado]` → usar a da homologada (`subida/cakto-produto.md` seção 7) ou a padrão da Cakto.
- [ ] E-mails: `[LACUNA: não capturado]` → usar o e-mail de acesso padrão da Cakto; sequência D0/D1/D3 da homologada como plano B.
- [ ] Compra-teste de R$ 77 (cartão próprio): bump marcado → OTO1 aceito → OTO2 → área de membros → e-mail de acesso. Reembolsar depois.

## 2. Cakto Members: área de membros
- [ ] Criar os 9 módulos e as 19 aulas com os nomes literais (`cakto-produto.md` seção 9), colando o texto literal de cada aula (`_tools/lessons-text.md`); 9 aulas ficam vazias como na referência (ou omitir).
- [ ] Subir os 6 PDFs originais: `produto-literal/front/m04-fases-da-lua.pdf`, `m05-elevacao-vibracao-7-dias.pdf`, `m06-casa-ima-de-manifestacao.pdf`, `m07-guia-de-cristais.pdf`, `m08-protecao-energetica.pdf`, `m09-7-presentes.pdf` (assinado "Cassandra Montenegro — Linhagem Ancestral").
- [ ] Módulo 1 aula 1 (links para apps do concorrente) e módulo 3 aula 1 (GPT do concorrente): não replicáveis → omitir ou trocar por app/GPT próprio.
- [ ] Módulo 2 aula 1: trocar o link do CTA "→ [ASSISTIR A AULA GRATUITA AGORA]" (`codigodaprosperidades.online/upareademmembros`) pela própria página de upsell de membros (`{{OTO_MEMBROS_URL}}`, 12x R$ 13,13) e montar `/dowareademembros/` com o texto literal (seção 9c, R$ 67 Pix).
- [ ] Área do OTO1: curso "MAPA ASTRAL DA PROSPERIDADE! 🗺️", 2 módulos / 4 aulas (2 vazias), anexos `produto-literal/oto1/mapa-astral-da-prosperidade.pdf` + `audio-frequencia-10min.mp3`; aula 1.1 (app Lovable) não replicável.
- [ ] Áreas dos bumps: `[LACUNA: não capturado]` → plano B `produto-homologado/bump1/`, `bump2/`. OTO2/downsell 2: `[LACUNA]` → plano B `v1/clone/clone-produto-leva2.md` (texto novo).
- [ ] Liberação imediata; conferir com a compra-teste que os PDFs abrem no celular.

## 3. Quiz (página de vendas) — literal
- [ ] Em `_deploy3/quizprosperidade/index.html` (quiz literal: 9 telas, textos de `v1/clone-original/clone-pagina.md`), trocar `{{CHECKOUT_URL}}` pelo link do checkout Cakto (botão aos 17:00 da VSL, `localStorage` `cp_botao_liberado`).
- [ ] VSL front original (20:06) já embutida: `vsl-original-2006.mp4` no Vercel Blob (origem `criativos/originais/vsl-quiz-vsl2-braco-live.mp4`); conferir que o mudo/"Clique para ouvir" funciona.
- [ ] Trocar `{{BACK_REDIRECT_URL}}` (se usado) pelo link da oferta Pix R$ 57.
- [ ] Publicar na Vercel em `https://quizprosperidade.vercel.app/quizprosperidade`; conferir no celular as 9 telas (fundo `#5128c3`, 4/4/4/3/3 opções, "Analisando suas respostas", 3 cartas, VSL).
- [ ] Trocar o placeholder pelo domínio final quando existir (na Cakto, campo "página de vendas", e no Meta, campo "URL do site" dos 15 anúncios).

## 4. Pixel e rastreio
- [ ] Pixel Meta da referência: `[LACUNA: não lido]` (a referência usa Google tag GT-TNLLT3GF + utmify + GTM-5M8C5B4T). Criar Pixel próprio; anotar o ID.
- [ ] Cakto: Integrações → Pixel Meta no produto principal, OTO1, OTO2 e downsells (InitiateCheckout, Purchase; API de conversões se houver).
- [ ] Quiz: colar o snippet do pixel no `<head>` de `_deploy3/quizprosperidade/index.html` (PageView na tela 1).
- [ ] Verificar no Gerenciador de Eventos: PageView do quiz + Purchase da compra-teste com o mesmo pixel; verificar o domínio; Purchase como prioridade 1.

## 5. Meta Ads — 15 anúncios literais
- [ ] Esperar `LITERAL/anuncios-1080p/` ter os 15 arquivos `{slug}-1080p.mp4` (hoje 15/15); conferir duração contra o original 720p.
- [ ] Subir os 15 vídeos na biblioteca de mídia; miniatura = `criativos/originais/{id}-capa.jpg`.
- [ ] Criar campanha e conjunto (estrutura da referência `[LACUNA]`; usar o esqueleto do molde: CBO, Vendas, Purchase, Brasil, 35+, Reels/Stories/Feed 9:16).
- [ ] Criar os 15 anúncios com `meta-campanha.md`: nome = slug; **texto primário vazio** (a referência não usa); headline literal ("Descubra o que pode estar impedindo você de vencer" / "Descubra o que está impedindo você de avançar" / "⭐⭐⭐⭐⭐" / ausente no #01); descrição vazia; CTA "Saiba mais" (#01 "Ver detalhes"); display link = domínio próprio (o da referência é do concorrente); URL do site = `https://quizprosperidade.vercel.app/quizprosperidade` (nunca `codigodaprosperidades.online/aba`).
- [ ] Desligar aprimoramentos Advantage+ de criativo (para o Meta não cortar nem reescrever).
- [ ] Os 15 slugs já estão em `_memory/anuncios-registro.md` (status "clonado"); não recriar.
- [ ] Publicar juntos; orçamento `[LACUNA]` → molde: R$ 250/dia mínimo, R$ 800/dia recomendado.
- [ ] Dia 1 a 3: pausar anúncio com R$ 190 gastos sem compra; dia 7: ler CPA por anúncio contra R$ 112–131 (faixa do blueprint).

---

## O que existe no literal e o que falta (bloqueia ou não a subida)

| Peça | Estado no literal | Onde está | Bloqueia |
|---|---|---|---|
| 15 vídeos de anúncio | originais 720p prontos (`LITERAL/anuncios-720p-originais/`); 1080p em geração (15/15) | `LITERAL/anuncios-1080p/` | Meta (passo 5) até terminar |
| VSL front 20:06 | original pronto, já embutido no quiz literal | `criativos/originais/vsl-quiz-vsl2-braco-live.mp4` · `_deploy3/quizprosperidade/` | não bloqueia |
| VSL OTO1 10:20 / downsell 1:44 / OTO2 11:25 / downsell 2 2:00 | originais prontos | `criativos/originais/vsl-up1.mp4`, `vsl-dow11.mp4`, `vsl-upabs2.mp4`, `vsl-dowup02.mp4` | não bloqueia (precisa hospedar as páginas) |
| Produto do front (6 PDFs + textos das 19 aulas) | originais prontos | `produto-literal/front/` · `_tools/lessons-text.md` | não bloqueia |
| Produto do OTO1 (PDF 8 p. + MP3 10:04 + textos) | originais prontos | `produto-literal/oto1/` | não bloqueia |
| Bumps (Numerologia Judaica, Chave dos Caminhos) | `[LACUNA: não capturado]` | plano B `produto-homologado/` | Checkout completo (pode subir sem bump por 48 h) |
| OTO2 / downsell 2 (entrega) | `[LACUNA: não capturado]` | plano B: `v1/clone/clone-oto2-downsell2.md` + `v1/clone/clone-produto-leva2.md` (texto novo, sem PDF gerado) | Fluxo de upsell 2 |
| Áudios de ritual (3 x 5 min prometidos na VSL front) | `[LACUNA: a referência não entrega — 0 áudios na área de membros]` | plano B `produto-homologado/` | não bloqueia |
| Capas (front, bump 1, bump 2) | `[LACUNA: não baixadas]` | URLs em `cakto-produto.md` | Checkout |
| Página de obrigado / e-mails | `[LACUNA: não capturado]` | plano B `subida/cakto-produto.md` seções 7 e 8 | não bloqueia |
| Apps (Vercel/Lovable) e GPT | `[LACUNA: são do concorrente]` | omitir aulas ou criar próprios | não bloqueia |
| Lip-sync / voz nova nos vídeos | não existe no literal (vídeos são os originais, com os apresentadores do concorrente) | versão homologada: `criativos/clone/video/` | não bloqueia |

Ordem mínima para subir: Cakto (front + bumps + OTO1) → área de membros (6 PDFs + textos) → quiz literal com `{{CHECKOUT_URL}}` → pixel → Meta com os vídeos 1080p prontos → páginas de upsell com os vídeos originais → OTO2/downsell 2.

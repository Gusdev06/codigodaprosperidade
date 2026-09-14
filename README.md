# codigodaprosperidade

Página principal do funil do Código da Prosperidade — quiz de 9 telas que termina na VSL e no checkout.

## Como rodar

Site estático, sem build. Qualquer servidor de arquivos serve:

```bash
python3 -m http.server 4322
```

## Estrutura

- `index.html` — a página inteira (telas, CSS e JS inline)
- `cartas/` — versos e frentes das 3 cartas reveladas (Roda da Fortuna, Louco, Torre)
- `selo-consulta.png`, `sensitiva.jpg`, `iris.jpg` — imagens da página

## VSL

Player Vturb `vid-6aa567d5bc76189ae5a9ccc8` (conta `8961d838-aff2-4dce-9b39-e84022d332ce`).
O script do player carrega só quando a tela 9 aparece, para não dar play durante o quiz.

## Checkout

`https://pay.cakto.com.br/utxai3d_1105878`

## ⚠️ MODO TESTE ATIVO

O botão de compra está liberado na hora. O comportamento de produção é aparecer aos
**17:00** (`var espera=1020000`), que segue declarado no arquivo, intocado.

Para voltar ao normal, apague em `index.html` as duas linhas marcadas com `// TESTE`:

```js
document.getElementById('btn-comprar').hidden=false; // TESTE
return;                                              // TESTE
```

Obs.: os 17:00 foram calibrados pelo pitch da VSL anterior. Confirme em que minuto o
pitch entra na VSL atual antes de restaurar.

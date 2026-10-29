/* Dados do painel /es/admin/. GET ?k=<ADMIN_KEY>&p=hoje|24h|7d. "hoje" = desde 00h de Brasília (dia das contas na Meta). */
module.exports = async (req, res) => {
  const k = String((req.query && req.query.k) || '');
  if (!process.env.ADMIN_KEY || k !== process.env.ADMIN_KEY) { res.status(401).json({ erro: 'chave' }); return; }
  const p = String((req.query && req.query.p) || 'hoje');
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    await sql`CREATE TABLE IF NOT EXISTS cdp_ev (id bigserial PRIMARY KEY, ts timestamptz DEFAULT now(), sid text, ev text, video smallint, ad text, campaign text, adset text)`;
    /* Brasília = UTC-3 fixo (sem horário de verão desde 2019) */
    const agora = Date.now(), br = new Date(agora - 3 * 3600e3);
    const meiaNoiteBr = Date.UTC(br.getUTCFullYear(), br.getUTCMonth(), br.getUTCDate()) + 3 * 3600e3;
    const desde = new Date(p === '7d' ? agora - 7 * 864e5 : p === '24h' ? agora - 864e5 : meiaNoiteBr).toISOString();
    const funil = await sql`SELECT ev, video, count(DISTINCT sid)::int AS n FROM cdp_ev WHERE ts >= ${desde} GROUP BY ev, video`;
    const anuncios = await sql`SELECT coalesce(nullif(split_part(ad, '|', 1), ''), '(sem anúncio)') AS ad, ev, count(DISTINCT sid)::int AS n
      FROM cdp_ev WHERE ts >= ${desde} AND ev IN ('home','paso1','mesa','revelacion','oferta','clique_oferta','checkout') GROUP BY 1, 2`;
    const horas = await sql`SELECT to_char(date_trunc('hour', ts AT TIME ZONE 'America/Sao_Paulo'), 'DD/MM HH24"h"') AS h, count(DISTINCT sid) FILTER (WHERE ev='home')::int AS home,
      count(DISTINCT sid) FILTER (WHERE ev='checkout')::int AS checkout FROM cdp_ev WHERE ts >= ${desde} GROUP BY date_trunc('hour', ts AT TIME ZONE 'America/Sao_Paulo') ORDER BY 1 DESC LIMIT 48`;
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ periodo: p, gerado: new Date().toISOString(), funil, anuncios, horas });
  } catch (e) {
    res.status(500).json({ erro: 'db' });
  }
};

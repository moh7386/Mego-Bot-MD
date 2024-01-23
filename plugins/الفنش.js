const handler = async (m, { conn, text }) => {
  if (!text) throw 'عايز تفنش مين يا حب';

  let Url = 'https://api.whatsapp.com/send?phone=';
  let A7A = Url + `${text}`;
  await conn.reply(m.chat, A7A, m);
};

handler.help = ['finish'];
handler.tags = ['finish'];
handler.command = /^(فنش)$/i;
handler.rowner = true
export default handler;

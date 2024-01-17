const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗معلومه❗] ادخال تقرير*\n\n*مثال:*\n*${usedPrefix + command} الامر ${usedPrefix}البوت لا يرسل أي شيء*`;
  if (text.length < 10) throw `*[❗معلومه❗] ل اترسل اقل من 10 احرف!*`;
  if (text.length > 1000) throw `*[❗معلومه❗] لا ترسل اكثر من 1000 حرف!*`;
  const teks = `*❒═════[ابلاغ]═════❒*\n*┬*\n*├❧ الرقم:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ الرساله:* ${text}\n*┴*`;
  conn.reply('201012531172@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[ ✔️ ]  تم بنجاح، تم إرسال التقرير إلى مطوري.  سيكون لديك الجواب قريبا.  إذا تم اكتشاف أن التقرير خاطئ، فسيتم تجاهل التقرير.*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(ابلاغ|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;

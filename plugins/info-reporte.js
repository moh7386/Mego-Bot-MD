let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[⚠️] اكتب التقرير*\n\n💡 مثال\n*${usedPrefix + command} الامر ${usedPrefix}البوت به خطأ.*`
if (text.length < 8) throw `⚠️ *الحد الأدنى 10 أحرف.*`
if (text.length > 1000) throw `⚠️ *الحد الأقصى 1000 حرف.*`
let teks = `*⚠️ خطأ ⚠️*\n*📞 الرقم*\nWa.me/${m.sender.split`@`[0]}\n*📝 رساله*\n${text}`
conn.reply('120363145586610812@g.us', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`*[⚠️] تم بنجاح، تم إرسال التقرير إلى مطوري.  سيكون لديك الجواب قريبا.  إذا تم اكتشاف أن التقرير خاطئ، فسيتم تجاهل التقرير.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.exp = 100 
handler.command = /^(ابلاغ|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler

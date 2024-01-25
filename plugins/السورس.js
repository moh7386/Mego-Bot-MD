let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝒎𝒆𝒈𝒐_𝒃𝒐𝒕〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت ميجو 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه ميججؤؤ لفآججر〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*
*⌬〘 اذا كنت تريد صناعه بوت 〙⌬*
*⌬〘 فعليك الانضمام الي جروبنا 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://chat.whatsapp.com/KF1ouG4qNb4J0dI0JTH8Ht ⊱⏣*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/+201012531172 ⊱⏣*

*⌬〘 الدعم 〙⌬*

*⏣⊰ https://Solo.to/mego51-51 ⊱⏣*

*✥━─━⌬〘𝒎𝒆𝒈𝒐_𝒃𝒐𝒕〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler

import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    if (!text) return m.reply(`*⚠️ يرجي وضع السبب الخاص بك*\n\n💡 مثال\n*.اختفاء رايح انام*`)
    if (text.length < 10) return m.reply(`*⚠️ السبب قصير جدًا، الحد الأدنى 10 أحرف*`)
    user.afk = + new Date
    user.afkReason = text
    conn.reply(m.chat, `
\t\t\t\t *「 ⚠️ حاله الاخفاء ⚠️ 」*
 
*► سوف تكون متوقفًا عن العمل حتى تقوم بإرسال رسالة.*

👤 *المستخدم:* @${m.sender.split`@`[0]} 
👀 *السبب:* ${text ? ': ' + text : ''}
  `, m, { mentions: [m.sender]})
}
handler.help = ['afk *<razón>*']
handler.tags = ['rg']
handler.command = ['اختفاء']
handler.register = true

export default handler

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1

let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)

if (chat.antiTraba && m.text.length > 5000) { //Cantidad máxima de caracteres aceptados en un mensaje//
if (isAdmin) return conn.sendMessage(m.chat, { text: `🚩 *مسؤول @${m.sender.split("@")[0]} لقد أرسلت للتو رسالة نصية تحتوي على العديد من الأحرف*`, mentions: [m.sender] }, { quoted: fkontak })
await conn.sendMessage(m.chat, `🚩 *تم اكتشاف رسالة تحتوي على العديد من الأحرف*\n`, `${isBotAdmin ? '' : 'أنا لست مسؤولا، لا أستطيع أن أفعل أي شيء :/'}`, m)
if (isBotAdmin && bot.restrict) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => { 
conn.sendMessage(m.chat, { text: `🎌 *وضع علامة على الدردشة كمقروءة*\n${"\n".repeat(400)}\n=> الرقم : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\nلقد قمت للتو بإرسال رسالة نصية تحتوي على العديد من الأحرف التي قد تتسبب في فشل الجهاز`, mentions: [m.sender] }, { quoted: fkontak })
}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
} else if (!bot.restrict) return m.reply(`*¡Esta característica está desactivada!*`)

}
return !0

}

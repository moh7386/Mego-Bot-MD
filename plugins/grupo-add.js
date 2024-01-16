var handler = async (m, { conn, args, text, usedPrefix, command }) => {

let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let nom = conn.getName(m.sender)
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `🚩 *تم تعطيل هذه الميزة*`, m, fake, )
if (!text) return conn.reply(m.chat, `🎌 *أدخل رقم الشخص الذي تريد إضافته*\n\nمثال, !${command} 201012531172`, m, fake, )
if (text.includes('+')) return conn.reply(m.chat, `🚩 *أدخل الرقم بالكامل معًا بدون (+)*`, m, fake, )
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
await conn.reply(text+'@s.whatsapp.net', `🎌 *مرحبا لقد تم دعاءك اللي جروبنا*\n\nالرابط\n${link}`, m, {mentions: [m.sender]} )
conn.reply(m.chat, `🎌 *تم ارسال الدعوة على الخاص*\n${nom}`, m, fake, ) 

}
handler.help = ['add']
handler.tags = ['grupo']
handler.command = /^(اضافة|agregar|invitar|دعوه|añadir|\+)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler

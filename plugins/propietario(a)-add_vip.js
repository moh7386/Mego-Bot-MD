let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*⚠️ ضع ريبلاي على الشخص الذي سيصبح مستخدمًا VIP\n\n💡 مثال\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `*المستخدم بالفعل VIP ✨*`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*@${who.split`@`[0]} أنت الآن مستخدم VIP.  لن يكون لديك حدود مع ${cb} 😏*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem|بريم$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler

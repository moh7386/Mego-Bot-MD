var handler = async (m, { conn, participants, usedPrefix, command }) => {

if (!m.mentionedJid[0] && !m.quoted) return conn.reply(m.chat, '🎌 *ضع علامة على رسالة الشخص الذي تريد إزالته أو قم بالرد عليها*', m, fake, ) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

await conn.groupParticipantsUpdate(m.chat, [user], 'remove')

}
handler.help = ['kick']
handler.tags = ['grupo']
handler.command = /^(kick|طرد|هش|sacar|براا)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

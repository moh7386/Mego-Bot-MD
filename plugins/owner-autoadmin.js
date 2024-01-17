var handler = async(m, { conn, isAdmin }) => {

if (m.fromMe) return
if (isAdmin) return conn.reply(m.chat, '✅📌 *انت بالفعل زعيم يا مطوري*', m, fake, )

try {

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')

} catch {

await conn.reply(m.chat, '🏷️ *حدث فشل*', m, fake, )}

}
handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = /^autoadmin|ارفعني$/i

handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler

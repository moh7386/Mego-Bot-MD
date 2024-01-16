var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
await conn.groupUpdateDescription(m.chat, text)
conn.reply(m.chat, `✅ *تم التعديل*`, m, fake, )
} else return conn.reply(m.chat, '🎌 *ادخل الوصف الجديد*\n\nمثال, .تغيير_الوصف مرحبا بكم في الجروب', m, fake, )

}
handler.help = ['setdesc']
handler.tags = ['grupo']
handler.command = /^set(desk)?(desc)|تغيير_الوصف$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler

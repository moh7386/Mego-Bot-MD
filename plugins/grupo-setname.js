var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, '🎌 *أدخل اسم المجموعة الجديد*\n\nمثال, تغيير_الاسم MEGO-BOT', m, fake, )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *اسم الجروب الجديد*` : '*لم يعطوا اسما*'}`, m, fake, )
 
}
handler.help = ['setname']
handler.tags = ['grupo']
handler.command = /^تغيير_الاسم$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler

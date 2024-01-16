var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.bye = text
else if (isOwner) conn.bye = text
else global.db.data.chats.sBye = text
conn.reply(m.chat, '✅ *تم بشكل صحيح*', m, fake, )
} else return conn.reply(m.chat, '🎌 *أدخل النص الذي تريد إرساله عندما يغادر الشخص*\n\يمكنك استخدام @user لوضع علامة', m, fake, )

}
handler.help = ['setbye']
handler.tags = ['grupo']
handler.command = /^تغير_المغادره$/i

handler.group = true
handler.admin = true

export default handler

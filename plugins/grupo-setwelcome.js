var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.welcome = text
else if (isOwner) conn.welcome = text
else global.db.data.chats.sWelcome = text

conn.reply(m.chat, '✅ *تم تغيير الترحيب*', m, fake, )
} else return conn.reply(m.chat, '🎌 *أدخل النص الذي تريد إرساله عند انضمام شخص ما*\n\nيمكنك استخدام @user لوضع علامة', m, fake, )
}
handler.help = ['setwelcome']
handler.tags = ['grupo']
handler.command = /^تغير_الدخول$/i

handler.group = true
handler.admin = true

export default handler

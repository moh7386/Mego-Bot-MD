var handler = async (m, {conn, args, usedPrefix, command}) => {

const isClose = { 'فتح': 'not_announcement', 'غلق': 'announcement', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]

if (isClose === undefined) { return conn.reply(m.chat, `*اختر خيارًا لـ*\n\nمثال:*○ !${command} غلق*\n    *○ !${command} فتح*`, m, fake, )

}
await conn.groupSettingUpdate(m.chat, isClose)
{ conn.reply(m.chat, '✅ *تم بشكل صحيح*', m, fake, ) }

}
handler.help = ['جروب فتح / غلق', 'grupo abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|جروب)$/i
handler.admin = true
handler.botAdmin = true

export default handler

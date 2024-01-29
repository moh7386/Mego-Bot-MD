let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`*[🔒] هذه الدردشة ليس لديها إذن لاستخدامي حتى يتم رفع الحظر عنها*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^بانشات$/i
handler.group = true
handler.rowner = true
export default handler

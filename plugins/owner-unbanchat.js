let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[🌐] هذه الدردشه غير محظوره *')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^بانشاتفك$/i
export default handler

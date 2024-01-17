import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `*⚠️ اكتب اسم الفيديو أو قناة اليوتيوب*`, m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `📑 *عنوان:* ${v.title}
🔗 *اللينك:* ${v.url}
⏰ *الوقت:* ${v.timestamp}
🔎 *تم النشر:* ${v.ago}
👀 *الاراء:* ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['internet:']
handler.command = /^playlist|يوتيوب|yts(earch)?$/i

handler.exp = 70
handler.limit = 1

export default handler
      

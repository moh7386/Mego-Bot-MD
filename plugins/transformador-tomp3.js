import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ قم بالرد على الفيديو أو الملاحظة الصوتية التي تريد تحويلها إلى mp3 باستخدام الأمر :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw '❎ فشل تنزيل الوسائط'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ Error converting'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^to(mp3|a(udio)?)|لصوت$/i

export default handler

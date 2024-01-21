import { toAudio } from '../lib/converter.js'

var handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*⚠️ الرد على مقطع فيديو أو ملاحظة صوتية عن طريق التحويل إلى صوت/MP3*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*⚠️ حدث خطأ، يرجى المحاولة مرة أخرى*'
if (!media && !/audio/.test(mime)) throw '*⚠️ حدث خطأ، يرجى المحاولة مرة أخرى*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*⚠️ حدث خطأ، يرجى المحاولة مرة أخرى*'
if (!audio.data && !/video/.test(mime)) throw '*⚠️ حدث خطأ، يرجى المحاولة مرة أخرى*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })

}
handler.help = ['tomp3']
handler.tags = ['transformador']
handler.command = /^to(mp3|a(udio)?)|لصوت$/i

handler.limit = true

export default handler

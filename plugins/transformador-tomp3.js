import { toAudio } from '../lib/converter.js'

var handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*⚠️ قم بالرد علي فيديو لتحويله لصوت*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
if (!media && !/audio/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
if (!audio.data && !/video/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })

}
handler.help = ['tomp3']
handler.tags = ['transformador']
handler.command = ['لصوت']

handler.limit = true

export default handler

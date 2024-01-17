var handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) return conn.reply(m.chat, '🎌 *سوف تحتاج إلى ريبلاي علامة على الصورة*', m, fake, )
await conn.updateProfilePicture(m.chat, img).then(_ => conn.reply(m.chat, '✅ *تم تغيير الصوره بنجاح*', m, fake, ))
} else return conn.reply(m.chat, '🎌 *سوف تحتاج إلى ريبلاي علامة على الصورة*', m, fake, )

}
handler.help = ['setpp', 'setppgc', 'setppgroup']
handler.tags = ['grupo']
handler.command = /^setpp(group|grup|gc)|تغييرالصورة?$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

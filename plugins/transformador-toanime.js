import uploadImage from '../lib/uploadImage.js'

var handler = async (m, {conn, text, args, usedPrefix, command}) => {

const q = m.quoted ? m.quoted : m
const mime = (q.msg || q).mimetype || q.mediaType || ''
if (!/image/g.test(mime)) throw '*⚠️ قم بالرد أو ضع علامة على الصورة*'
 
m.reply('*🚀 انتظر بيتم التحويل لكرتون*') 
const data = await q.download?.()
const image = await uploadImage(data)
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`
await conn.sendFile(m.chat, anime, 'error.jpg', null, m)
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m)
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m)
} catch (e) {
throw '*⚠️ خطأ، حاول مرة أخرى*'}}}
         
}
handler.help = ['toanime']
handler.tags = ['transformador']
handler.command = /^(لكرتون|لانمي)$/i

handler.limit = true
 
export default handler

import fetch from 'node-fetch'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *ادخل رابط تيك توك الصور*`, m, fake, )
m.react(rwait)
if (!(text.includes('http://') || text.includes('https://'))) return conn.reply(m.chat, `🚩 *لا يحتوي هذا الرابط http:// ni https://*`, m, fake, )
m.react(error)
if (!text.includes('tiktok.com')) return conn.reply(m.chat, `🚩 *رابط خطأ*`, m, fake, )
m.react(error)

try {

let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `✅ *تم إرسال 1 منها ${anu.length} الصور.*\nقد يكون الباقي مرئيًا في الدردشة الخاصة بالروبوت` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
m.react(done)
} catch (e) {
console.log(e)
m.react(error)
return conn.reply(m.chat, `🚩 *حدث فشل*`, m, fake, )
}

}
handler.help = ['tiktokslide']
handler.tags = ['descargador']
handler.command = /^(تيك_صور)$/i

export default handler

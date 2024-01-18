import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `╰⊱❗️⊱ *استخراج ملصقات* ⊱❗️⊱╮\n\nالرجاء إرسال رابط حزمة الستيكرز\nمثال:\n${usedPrefix + command} https://t.me/addstickers/Porcientoreal`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `╰⊱❗️⊱ *استخراج ملصقات* ⊱❗️⊱╮\n\nالرابط الذي أُرسل غير صالح`

    let packName = args[0].replace("https://t.me/addstickers/", "") 
    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })

    if (!gas.ok) throw eror

    let json = await gas.json()

    m.reply(`*إجمالي عدد الملصقات:* ${json.result.stickers.length}\n*الوقت المقدر للاستخراج:* ${json.result.stickers.length * 1.5} ثانية`.trim())

    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id
        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jisin = await gasIn.json()
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)

        await delay(5000)

        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply: { showAdAttribution: false, title: global.botname, body: `h`, mediaType: 2, sourceUrl: 'https://chat.whatsapp.com/Har7Z8RPqDO0jZP2FeRApN', thumbnail: './src/menu.jpg' } } }, { quoted: m })

        await delay(3000)
    }

    throw `*استخراج ملصقات مكتمل ✅️*`
}

handler.help = ['stikertele *<رابط>*']
handler.tags = ['ستيكر', 'تنزيل']
handler.command = ['تيلجرام','تيليجرام','تلجرام']
handler.limit = 1
handler.register = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))

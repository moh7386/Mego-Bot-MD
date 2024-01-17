import { pinterest } from '@bochilteam/scraper'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *يجب عليك إدخال النص*\n\nمثال, !${command} Minecraft`, m, fake, )
m.react(done)

const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `🚩 *نتيجة ل ${text}`.trim(), m, fake, )

}
handler.help = ['pinterest']
handler.tags = ['imagenes']
handler.command = /^(بينتريست)$/i

handler.limit = true
handler.register = true

export default handler

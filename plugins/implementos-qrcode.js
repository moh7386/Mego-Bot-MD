import { toDataURL } from 'qrcode'

var handler = async (m, { text, conn }) => {

if (!text) throw `*⚠️ أدخل النص الذي تريد تحويله إلى رمز الاستجابة السريعة*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '*🧃 تفضلQR*', m)

}
handler.help = ['qrcode']
handler.tags = ['implementos']
handler.command = /^باركود$/i

export default handler

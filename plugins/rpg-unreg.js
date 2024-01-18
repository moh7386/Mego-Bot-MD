import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `*⚠️ أدخل رقمك التسلسلي، إذا كنت لا تعرف ما هو استخدامه #ايدي*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `*⚠️ تأكد من صحة الرقم التسلسلي الخاص بك*`
user.registered = false
m.reply(`*📇 لم تعد مسجلا*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <رقم سري>')
handler.tags = ['rg']
handler.command = /^unreg(ister)|الغاء_التسجيل?$/i
handler.register = true
export default handler

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
  if (user.registered === true) throw `*⚠️ انت مسجل مسبقا*\n\n¿تريد التسجيل مرة أخرى?\n\n💬 استخدم هذا الأمر ل *اِسْتَبْعَد السجل الخاص بك*\n*${usedPrefix}غير منتظم* <رقم سري>`
  if (!Reg.test(text)) throw `*⚠️ تنسيق غير صحيح*\n\n📝 باستخدام الأمر: *${usedPrefix + command} الاسم العمر*\n💡 مثال : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*📝 لا يمكن أن يكون الاسم فارغًا*'
  if (!age) throw '*📝 لا يمكن أن يكون العمر فارغًا*'
  if (name.length >= 30) throw '*⚠️ اسم طويل جدا*' 
  age = parseInt(age)
  if (age > 100) throw '*👴🏻 واو الجد يريد أن يلعب دور الروبوت*'
  if (age < 5) throw '*👀 هناك طفل ههه*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('📩') 
let regbot = `
🗃️ *مبروك التسجيل* 🗃️
🪁 *الاسم:* ${name}
🎨 *العمر* : ${age} años
🥏 *ايدي*:
${sn}`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'تسجيل', 'reg', 'register', 'registrar'] 

export default handler



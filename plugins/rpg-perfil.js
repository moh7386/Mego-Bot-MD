import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let _pp = './storage/menus/Menu1.jpg'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, diamond, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '201012531172@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let str = `
. . . *🔰 بروفايلك 🔰* . . .
💌 • *الاسم:* ${username} 
📧 • *المنشن:* @${who.replace(/@.+/, '')}
📞 • *الرقم:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *اللينك:* https://wa.me/${who.split`@`[0]}
🎨 • *العمر:* ${registered ? age : ''}
💎 • *الماسك: ${diamond} Usos* 
📑 • *مسجل:* ${registered ? '✅': '❌'}
🌟 • *بريم:* ${premium ? "✅\n⏰ • *وقت المميز:* ${clockString(user.premiumTime)}" :"❌"}
`.trim()
  //m.react(🌟) 
 conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkon, false, { mentions: [who] })
}
handler.help = ['profile [@user]']
handler.tags = ['rg']
handler.command = /^بروفايل|انا$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Dias ☀️*\n ', h, ' *ساعات 🕐*\n ', m, ' *دقائق ⏰*\n ', s, ' *ثواني ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

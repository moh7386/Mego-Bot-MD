   import { createHash } from 'crypto'
   import PhoneNumber from 'awesome-phonenumber'
   import { canLevelUp, xpRange } from '../lib/levelling.js'
   import fetch from 'node-fetch'
   import fs from 'fs'
   const { levelling } = '../lib/levelling.js'
   import moment from 'moment-timezone'
   import { promises } from 'fs'
   import { join } from 'path'
   const time = moment.tz('Egypt').format('HH')
   let wib = moment.tz('Egypt').format('HH:mm:ss')
   //import db from '../lib/database.js'

   let handler = async (m, { conn, usedPrefix, command}) => {
       let d = new Date(new Date + 3600000)
       let locale = 'ar'
       let week = d.toLocaleDateString(locale, { weekday: 'long' })
       let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
       let _uptime = process.uptime() * 1000
       let uptime = clockString(_uptime)
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي`
   let videoUrl = 'https://telegra.ph/file/e27416d79b6803287c628.mp4'
   let user = global.db.data.users[who]
   let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
   let { min, xp, max } = xpRange(user.level, global.multiplier)
   let username = conn.getName(who)
   let math = max - xp
   let prem = global.prems.includes(who.split`@`[0])
   let sn = createHash('md5').update(who).digest('hex')
   let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
   let more = String.fromCharCode(8206)
   let readMore = more.repeat(850) 
  m.react('📁')
   let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
   let str = `
      ┓━ ╼━━━╃⌬〔 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 〕⌬╄━━━╾ ━┏
 مـرحــبـا ${taguser} 👋🏻

≼👤≽ مـعـلــومـات الـبــوت╿↶
━ ── • ꕤ • ── ━
 اســم الـبــوت  𝐌𝐄𝐆𝐎 お ‘ 
منـصـه التـشغيــل 【.هيروكو.】
وقت التشغيل : ${uptime}
اليوم : ${week}
التاريخ : ${date}
مطوري : wa.me/+201012531172
⋄━───═◞⬪⇊⬪◟═───━⋄
اذا لم يرد عليك البوت عليك ارسال 
⚡⇇.صلح 
⚡⇇.تصليح
━ ── • ꕤ • ── ━
⇊ قوائم بوت ميجو المطلوبه ⇊
.....................
🤖⇇.ذكاءاصطناعي
⛩️⇇ .الجروب
🔮⇇.الانمي
👥⇇.الاعضاء
🕋⇇.الدين
💎⇇.البنك
📥⇇.التحميلات
⚙️⇇.الادوات
♻️⇇.التحويلات
🎮⇇.الترفيه
🔊⇇.الاصوات
👑⇇.المطور
💢⇇.تصاميم
📌⇇. قائمتي
⚡⇇.المعرف 
💯⇇.السورس
📮⇇.قوانين
━ ── • ꕤ • ── ━
👋🏻 هلا اذا اردت الوصول اللي الاوامر مره واحده كامله ارسل

 🚩⇇.المهام

⋄━───═◞⬪قوانين⬪◟═───━⋄
❏╎❯ ممنوع سب البوت لانك سبيت البوت = سبيت المطور
❏╎❯ تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور
❏╎❯ المطور wa.me/+201012531172
*┛━ ╼━━━╃⌬〔 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 〕⌬╄━━━╾ ━┗*
   `.trim()
       conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };
   handler.help = ['main']
   handler.command = /^(الاوامر|menu|أوامر|اوامر)$/i

   export default handler
   function clockString(ms) {
       let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
       let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
       let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
       return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

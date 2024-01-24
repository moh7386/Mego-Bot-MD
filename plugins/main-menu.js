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
       let locale = 'en'
       let week = d.toLocaleDateString(locale, { weekday: 'long' })
       let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
       let _uptime = process.uptime() * 1000
       let uptime = clockString(_uptime)
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
   let videoUrl = 'https://telegra.ph/file/65a3da51ea80eb737bd9a.mp4'
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
   let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
   let str = `
   *↫❍  الـوقـت : ${wib}*
   *↫❍  الـتاريـخ : ${date}*



   *❑ اسـم الـبوت : ريم*
   *❑ حط قبل كل امر : .*
   *❑ اســم الـمطور : JO_HAN*
   *❑ البوت شغـال مـنذ : ${uptime}*
   *❑ الـمنـصه : REPLIT*


   *〄━━┋ الـجـروب ┋━━〄*

   *↫❍┋ضيف* 
   *↫❍┋طرد*
   *↫❍┋ترقية*
   *↫❍┋اعفاء*
   *↫❍┋انذار*
   *↫❍┋الانذارات*
   *↫❍┋حذف_تحذير*
   *↫❍┋حذف*
   *↫❍┋منشن*
   *↫❍┋مخفي*
   *↫❍┋المشرفين*
   *↫❍┋لمنشن*
   *↫❍┋بروفايل*
   *↫❍┋الجروب*
   *↫❍┋دعوه*
   *↫❍┋رستر*
   *↫❍┋لفل*
   *↫❍┋جروب*
   *↫❍┋الترحيب*
   *↫❍┋الوداع*
   *↫❍┋ايات*
   *↫❍┋جروب قفل / فتح*
   *↫❍┋بنك*
   *↫❍┋تاج*
   *↫❍┋يومي*
   *↫❍┋انمي*
   *↫❍┋طلاق*
   *↫❍┋الماس*
   *↫❍┋شراء*
   *↫❍┋ترتيب*
   *↫❍┋تصليح*

   *⌬━━┋ الـمطـور فـقط ┋━━⌬*
   *↫❍┋ضيف_بريميام*
   *↫❍┋حذف_بريميام*
   *↫❍┋بان*
   *↫❍┋الغاء_البان*
   *↫❍┋اطفاء*
   *↫❍┋تفعيل*
   *↫❍┋ادخل*
   *↫❍┋المبندين*
   *↫❍┋المدة*
   *↫❍┋تفقد_المده*
   *↫❍┋حذف_المده*
   *↫❍┋إعادة*
   *↫❍┋اعادةتشغيل*
   *↫❍┋ادخل*
   *↫❍┋ضيف_اكس_بي*
   *↫❍┋ضيف_جواهر*
   *↫❍┋تست*

   *〄━━┋ الـتـنزيـل ┋━━〄*

   *↫❍┋فيسبوك*
   *↫❍┋درايف*
   *↫❍┋انستغرام*
   *↫❍┋انستا*
   *↫❍┋ميديافاير*
   *↫❍┋شغل*
   *↫❍┋شغل2*
   *↫❍┋تيكتوك*
   *↫❍┋تيكتوك2*
   *↫❍┋تويتر*
   *↫❍┋اغنية*
   *↫❍┋بحث*
   *↫❍┋فيديو*
   *↫❍┋تطبيق*
   *↫❍┋صوره*
   *↫❍┋اذكار الصباح*
   *↫❍┋اذكار المساء*

   *〄━━┋ الـــتـرفــيـه ┋━━〄*

   *↫❍┋اكس او*
   *↫❍┋كت*
   *↫❍┋كتت*
   *↫❍┋صراحه*
   *↫❍┋لو*
   *↫❍┋هل*
   *↫❍┋ورع*
   *↫❍┋جميل*
   *↫❍┋خروف*
   *↫❍┋شخصية*
   *↫❍┋بوستات*
   *↫❍┋ترجم*
   *↫❍┋احزر*
   *↫❍┋زواج*
   *↫❍┋تطقيم*
   *↫❍┋انطق*
   *↫❍┋سؤال*

   *〄━━┋ الـتحـويل ┋━━〄*

   *↫❍┋ملصق*
   *↫❍┋سرقة*
   *↫❍┋لفيديو*
   *↫❍┋لصورة*
   *↫❍┋لانمي*
   *↫❍┋ارسم*
   *↫❍┋مكس*
   *↫❍┋لجواهر*
   *↫❍┋ستك*

   *〄━━┋ الـصوتـيات ┋━━〄*

   *↫❍┋عميق*
   *↫❍┋منفوخ*
   *↫❍┋تخين*
   *↫❍┋صاخب*
   *↫❍┋سريع*
   *↫❍┋تخينن*
   *↫❍┋رفيع*
   *↫❍┋روبوت*
   *↫❍┋بطيء*
   *↫❍┋ناعم*
   *↫❍┋سنجاب*

   *┑━━━┇حـقـوق الـمـطـور┇━━━┍*
   *│⇆ رقـم الـمطـور : ↯*
   *│ده : https://wa.me/+22247072475*
   *│⇆ قــنـاة الـيـوتــيوب : ↯* 
   *│دي : https://www.youtube.com/@JOHAN32240*
   *┙━━━┇حـقـوق الـمـطـور┇━━━┕*
   `.trim()
       conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };
   handler.help = ['main']
   handler.tags = ['group']
   handler.command = ['الاوامر', 'اوامر'] 

   export default handler
   function clockString(ms) {
       let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
       let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
       let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
       return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

       function ucapan() {
         const time = moment.tz('Egypt').format('HH')
         let res = "بداية يوم سعيده ☀️"
         if (time >= 4) {
           res = "صباح الخير 🌄"
         }
         if (time >= 10) {
           res = "مساء الخير ☀️"
         }
         if (time >= 15) {
           res = "مساء الخير 🌇"
         }
         if (time >= 18) {
           res = "مساء الخير 🌙"
         }
         return res
       }
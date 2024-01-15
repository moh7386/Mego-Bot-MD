import fetch from 'node-fetch'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*عايز تحمل ايه*\n*ابعت رابط الفيديو الي عايزه*\n*مثال:*\n*${usedPrefix + command} https://vm.tiktok.com/ZM29j1NYq*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `*❐┃خطئ رابط غير صحيح┃❌ ❯*`, fkontak,  m)  
try {

  const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
  await delay(1000 * 1)
  await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
  await delay(1000 * 1)
  await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
  await delay(1000 * 1)
  await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})
  
const { author: { nickname }, video, description } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) return conn.reply(m.chat, `*اوووف, خطأ أثناء محاولة تنزيل الفيديو ، يرجى المحاولة مرة أخرى*`, fkontak,  m)
conn.sendFile(m.chat, url, 'tiktok.mp4', `*❐┃تـم تـنـفـيـذ الامـر┃✅ ❯* `.trim(), m)
} catch {
}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)|تيك|تيكتوك|تيك-توك$/i
handler.limit = false
export default handler

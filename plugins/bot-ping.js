import { totalmem, freemem } from 'os'
import os from 'os'
import util from 'util'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

var handler = async (m, { conn }) => {

let timestamp = speed()
let latensi = speed() - timestamp

let _muptime = process.uptime() * 1000
let muptime = clockString(_muptime)

let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])


let texto = `*📑 INFO CURIOSITY BOT MD*

👑 *مطور*
 *mego*
--------------------------
🥏 *اتصال* 
 *${ig}*
--------------------------
🌐 *النسخة الحالية*
 ${vs}
--------------------------
💻 *بادئة*
 *${usedPrefix}*
--------------------------
🚦 *الدردشات الخاصة*
 *${chats.length - groups.length}*
--------------------------
📑 *الدردشات الجماعية*
 *${groups.length}* 
--------------------------
💬 *مجموع القطط*
 *${chats.length}* 
--------------------------
⏰ *نشاط*
 *${uptime}*
--------------------------
👥 *المستخدمين*
 *${totalreg}* 
--------------------------
🚀 *سرعة:*
 *${speed}*
--------------------------
📡 *القراءة التلقائية:*
 ${autoread ? '*قادر ✅*' : '*عاجز ❌*'}
--------------------------
🔰 *تقيد:*
${restrict ? '*قادر ✅*' : '*عاجز ❌*'}`.trim()

handler.help = ['ping']
handler.tags = ['bot']
handler.command = ['بينغغ', 'سرعهه']


export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

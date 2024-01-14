/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '🚩 *استخدم هذا الأمر مباشرة في الرقم الرئيسي للبوت*', m, fake, )
}

let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
let sessionPath = './mego md/'

try {

let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (let file of files) {
for (let id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
break
}}}

if (filesDeleted === 0) {
await conn.reply(m.chat, '🚩 *لم يتم العثور على ملف يتضمن معرف الدردشة*', m, fake, )
} else {
await conn.reply(m.chat, `🎌 *تم حذف ${filesDeleted} ملف الجلسه*`, m, fake, )
conn.reply(m.chat, `🌩️ *¡مرحب يخوي هل تراني*`, m, fake, )
}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err)
await conn.reply(m.chat, '🚩 *حدث فشل*', m, fake, )
}

}
handler.help = ['ds']
handler.tags = ['bot']
handler.command = /^(صلح|تصليح|ds)$/i


export default handler

/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '🚩 *استخدم هذا الأمر مباشرة في الرقم الرئيسي للبوت*', m, fake, )
}
await conn.reply(m.chat, '🚯 *بدء عملية حذف جميع ملفات الجلسة باستثناء الملفcreds.json...*', m, fake, )
m.react(rwait)

let sessionPath = './mego md/'

try {

if (!existsSync(sessionPath)) {
return await conn.reply(m.chat, '🚩 *المجلد فارغ*', m, fake, )
}
let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
}
}
if (filesDeleted === 0) {
await conn.reply(m.chat, '🚩 *المجلد فارغ*',  m, fake, )
} else {
m.react(done)
await conn.reply(m.chat, `🎌 *تم الحذف بنجاح ${filesDeleted}   باستثناء ملف creds.json*`,  m, fake, )
conn.reply(m.chat, `👾 *¡مرحبا! ¿هل تراني يخوي?*`, m, fake, )

}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err);
await conn.reply(m.chat, '🚩 *حدث فشل*',  m, fake, )
}

}
handler.help = ['dsowner']
handler.tags = ['owner']
handler.command = /^(del_reg_in_session_owner|تنظيف|clearallsession)$/i

handler.rowner = true

export default handler

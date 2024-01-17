let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*⚠️ ضع علامه ع الشخص*\n\n💡 مثال\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*⏤͟͟͞͞🚯تم حظر هذا المستخدم بنجاح*\n\n*[🔒] لم تعد بأمكانك استخدام ميجو بوت*')    }
handler.tags = ['owner']
handler.command = /^بان$/i
handler.rowner = true
export default handler

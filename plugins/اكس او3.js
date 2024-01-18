import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '*[❗] انت لست في مباراة*', wm, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾', `${usedPrefix}ttt partida nueva`]], m)
delete conn.game[room.id]
await m.reply('*[✔] تم حذف اللعبة بنجاح*')}
handler.command = /^(dlettt|deltt|احذف_اللعبة|احذف_اللعبه)$/i
handler.fail = null
export default handler
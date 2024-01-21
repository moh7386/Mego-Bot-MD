const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^شراء/i, '')
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `*ملاحظة الدفع 📝*
    
*شراء* : + ${count}💎 
*أنفق* : -${xpperdiamond * count} اكسبي`, m)
  } else conn.reply(m.chat, `*⚠️ ليس لديك ما يكفي من اكسبي للشراء ${count} الماس 💎*`, m)
}
handler.help = ['Buy', 'buyall']
handler.tags = ['xp']
handler.command = ['شراء', 'شراءالكل'] 
handler.register = true
handler.disabled = false

export default handler

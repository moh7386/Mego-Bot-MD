var handler = async (m) => {

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

conn.reply(m.chat, `${saludo}

*📁 وفقا لبيانات قاعدة البيانات، لدي ${rtotalreg} المستخدمون المسجلون*

*🗂️ ${totalreg} لم يتم تسجيلهم*`, fkontak, m)

}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(بيانات|jumlahdatabase|user)$/i

export default handler

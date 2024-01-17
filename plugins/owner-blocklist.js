/* Creado por https://github.com/FG98F */

let handler = async (m, { conn }) => {	
await conn.fetchBlocklist().then(async data => {
let txt = `*≡ اللي واخدين بلوك 🚯*\n\n*العدد :* ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `▢ @${i.split("@")[0]}\n`}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
throw 'No hay números bloqueados'})}
handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = ['البلوكات', 'listblock'] 
handler.rowner = true
export default handler

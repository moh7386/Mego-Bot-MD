import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
»»» 「 👾 لفلك يحب 👾 」
» *الاسم*
› ${name}
•-------------------
» *لفل:* 
› *${user.level}*
•-------------------
» *اكسبي:*
› *${user.exp - min}/${xp}*

*أنت مفقود ${max - user.exp} XP إلى المستوى الأعلى*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `أحسنت! ${conn.getName(m.sender)} مستوى: ${user.level}`
        let str = `
»»» 「 👾 لفلك يحب 👾 」
» *المستوى السابق:*
› *${before}*
•-------------------
» *المستوى الحالي:*
› *${user.level}*
•-------------------
» *التاريخ:* 
› *${new Date().toLocaleString('id-ID')}*

*كلما زاد تفاعلك معه ${cb}, كلما ارتفع مستواك!!*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['rg']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler

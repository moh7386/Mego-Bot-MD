import fetch from "node-fetch";

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text && !text.startsWith("+")) return m.reply("*خطأ : هات الرقم يحب 🐦❤️* \n*مثال :*.تلوكولر +201012531172")
    await conn.sendMessage(m.chat, {
        react: {
            text: `🔍`,
            key: m.key
        }
    })
    await conn.sendMessage(m.chat, {
        react: {
            text: `📞`,
            key: m.key
        }
    })
    const anu = await fetch(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
    let api = await anu.json()
    const msg = `*${m.pushName} Your Number Truecaller Restarts*

📝 *الاسم:* ${api.data.data[0].name}
🔒 *Access:* ${api.data.data[0].access}
⭐️ *Score:* ${api.data.data[0].score}
📞 *E164:* ${api.data.data[0].phones[0].e164Format}
🌍 *National:* ${api.data.data[0].phones[0].nationalFormat}
🌐 *D Code:* ${api.data.data[0].phones[0].dialingCode}
🌍 *Country Code:* ${api.data.data[0].phones[0].countryCode}
⏰ *Time Zone:* ${api.data.data[0].addresses[0].timeZone}
🏢 *Company:* ${api.data.data[0].phones[0].carrier}
📱 *النوع:* ${api.data.data[0].phones[0].type}

*${wm}*`
    const truei = await m.reply(msg)
    await conn.sendMessage(m.chat, {
        react: {
            text: `📋`,
            key: truei.key
        }
    })
    await conn.sendMessage(m.chat, {
        react: {
            text: `✅`,
            key: m.key
        }
    })
}
handler.help = ["ceknomor", "truecaller"]
handler.command = ["numberbook", "تلوكولر"]
handler.tags = ["tools"]
export default handler
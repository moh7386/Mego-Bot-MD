let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/af11f126f24c4e3ac3848.mp4'
  let { name } = global.db.data.users[who]
  m.react('⚙️')
let str = `                  ✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم الادوات≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄


❏..⚙️╎❯ .لرابط⌉*
❏..⚙️╎❯ .باركود⌉*
❏..⚙️╎❯ .ترجمه⌉*
❏..⚙️╎❯ .فضح⌉*
❏..⚙️╎❯ .تفريغ⌉*
❏..⚙️╎❯ .فحص⌉*
❏..⚙️╎❯ .تكرار⌉*
❏..⚙️╎❯ .بريد⌉*
❏..⚙️╎❯ .قص⌉*
❏..⚙️╎❯ .احسب⌉*
❏..⚙️╎❯ .جوده⌉*
❏..⚙️╎❯ .واتس⌉*
❏..⚙️╎❯ .بايو⌉*
❏..⚙️╎❯ .مطلوب⌉*
❏..⚙️╎❯ .موت⌉*
❏..⚙️╎❯ .ميم⌉*
❏..⚙️╎❯ .انسخ⌉*
❏..⚙️╎❯ .بينغ⌉*
                    ✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الادوات']

export default handler

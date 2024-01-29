let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/af11f126f24c4e3ac3848.mp4'
  let { name } = global.db.data.users[who]
  m.react('♻️')
let str = `                  ✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم التحويلات≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

❏..♻️╎❯ .حقوق⌉
❏..♻️╎❯ .لصورة⌉
❏..♻️╎❯ .لفديو⌉
❏..♻️╎❯ .دائري⌉
❏..♻️╎❯ .دمج⌉
❏..♻️╎❯ .لرابط⌉
❏..♻️╎❯ .لصوت⌉
❏..♻️╎❯ .لريك⌉
❏..♻️╎❯ .تيلجرام⌉
❏..♻️╎❯ .حيوان⌉
❏..♻️╎❯ .قط⌉
❏..♻️╎❯ .كلب⌉
❏..♻️╎❯ .ستك⌉
❏..♻️╎❯ .لملف⌉
❏..♻️╎❯ .نرد⌉
❏..♻️╎❯ .لانمي⌉
❏..♻️╎❯ .ارسم⌉
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
handler.command = ['التحويلات']
export default handler

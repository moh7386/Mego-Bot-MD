var handler = async (m, { conn, participants, groupMetadata }) => {
 
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/logos/Menu1.jpg' 
let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
let groupAdmins = participants.filter(p => p.admin) 
let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `🚩 *معلومات الجروب*

• *تعريف*
${groupMetadata.id}

• *اسم الجروب*
${groupMetadata.subject}

• *المشاركين بالجروب*
${participants.length} مشاركين

• *منشئ الجروب*
@${owner.split('@')[0]}

• *المشرفين*
${listAdmin}

• *إعدادات on/off*
ترحيب: ${welcome ? '✅' : '❌'}
مضادحذف ${detect ? '✅' : '❌'} 
مضادلينكات ${antiLink ? '✅' : '❌'} 
 مضادلينكات2 ${antiLink2 ? '✅' : '❌'}  

• *الوصف*
${groupMetadata.desc?.toString() || '⚠️ لا يوجد وصف!!'}
`.trim()

conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['infogrupo']
handler.tags = ['grupo']
handler.command = /^(معلوم_الجروب|gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler

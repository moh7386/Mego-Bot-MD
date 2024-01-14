export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, command, usedPrefix }) {
    if (m.isBaileys && m.fromMe) return !0
    if (m.isGroup) return !1
    if (!m.message) return !0

    // إذا احتوت الرسالة على أحد الكلمات المحظورة
    if (m.text.includes('المطور') || m.text.includes('الدعم') || m.text.includes('سورس') || m.text.includes('مطور') || m.text.includes('owner') || m.text.includes('https://chat')) return !0
    // التحقق من إعدادات البوت المحلية
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[this.user.jid] || {}
    // إذا كانت ميزة "antiPrivate" مفعلة وليس المستخدم مالك البوت أو مالكه الرئيسي
    if (bot.gconly && !isOwner) {
        await m.reply(`*~⚠️ ❗إخـطــــار❗⚠️~*\n*⌊ @${m.sender.split`@`[0]} ⌉*

من فضلك لا ترسل رسالة إلى البوت بشكل خاص ، قد يؤدي هذا في حظر رقم البوت ، فقط *مالك البوت* یمکنه استخدام البوت في دردشه الخاصه.

لايمكنك استخدام البوت الا في المجموعات واذا لديك مجموعة تكلم مع مالك
البوت وقل له، واذا لم يكن لديك، ادخل المجموعة التي في الاسفل

*🔹مــالــــك البــوت :*
• WhatsApp : wa.me/+201012531172
•
*🔹رابــط الـجــروب :*
• group : https://chat.whatsapp.com/HiP4wq4KssO50q78Wacv0J`, false, { mentions: [m.sender] })
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat)
        return !1
    }
}

let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`*[❗] "تم حذف سجل الرسائل بنجاح بينك وبين ChatGPT (IA). تذكر أنه يمكنك استخدام هذا الأمر بين الحين والآخر للحفاظ على محادثتك في الصفر التام."${usedPrefix}ia2*`)    
} catch (error1) {   
console.log(error1)
throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙍𝙍𝙊𝙍, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍𝙇𝙊`   
}} 
handler.command = ['انهاءشات']
export default handler

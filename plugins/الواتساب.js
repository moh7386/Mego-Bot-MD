import moment from 'moment-timezone'
import PhoneNum from 'awesome-phonenumber'

let regionNames = new Intl.DisplayNames(['ar'], { type: 'region' })

let handler = async (m, { conn, text, usedPrefix, command: cmd }) => {
	let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) throw `📌 مثال: ${usedPrefix + cmd} @العضو `
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await conn.onWhatsApp(num))[0]?.exists) throw '⛔ المستخدم غير موجود'
	let img = await conn.profilePictureUrl(num, 'image').catch(_ => './src/avatar_contact.png')
	let bio = await conn.fetchStatus(num).catch(_ => { })
	let name = await conn.getName(num)
	let business = await conn.getBusinessProfile(num)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `\t\t\t\t*▾ واتـســاب ▾*\n\n*° الدولة :* ${country.toUpperCase()}\n*° الإسم :* ${name ? name : '-'}\n*° الرقم :* ${format.getNumber('international')}\n*° الرابط :* wa.me/${num.split('@')[0]}\n*° المنشن :* @${num.split('@')[0]}\n*° الأخبار :* ${bio?.status || '-'}\n*° تاريخ تعدیل الأخبار :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t*▾ معلومات الأعمال ▾*\n\n*° معرف الأعمال :* ${business.wid}\n*° موقع إلكتروني :* ${business.website ? business.website : '-'}\n*° بريد إلكتروني :* ${business.email ? business.email : '-'}\n*° فئة :* ${business.category}\n*° الموقع :* ${business.address ? business.address : '-'}\n*° الوصف* : ${business.description ? business.description : '-'}` : '*حساب واتساب عادي*'}`
	img ? await conn.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
}

handler.help = ['wastalk']
handler.tags = ['tools']
handler.command = /^(whatsapp|الحساب|حساب|واتس)$/i

export default handler
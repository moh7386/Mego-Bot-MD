const dir = [
'https://telegra.ph/file/8034305ce5330ebc11a99.mp4',
'https://telegra.ph/file/5c70fbac268fb54ff847e.mp4',
'https://telegra.ph/file/309d0b9e717186a82317e.mp4',
'https://telegra.ph/file/55277595dcf76fbd95ad6.mp4',
'https://telegra.ph/file/f2a6bec5b7635364d6768.mp4',
'https://telegra.ph/file/d7f5799da8e64b9aff5aa.mp4',
'https://telegra.ph/file/261100ff5fe590b08e35d.mp4',
'https://telegra.ph/file/0aa9e48f6dddd4d1e55dc.mp4',
'https://telegra.ph/file/6214d68e0da156ef8e54a.mp4',
'https://telegra.ph/file/0f90a428a5d6ac03b5be2.mp4',
'https://telegra.ph/file/032e63bed050a57753871.mp4',
'https://telegra.ph/file/90fe3c42673bb29c24901.mp4',
'https://telegra.ph/file/0477481832432c340dd02.mp4',
'https://telegra.ph/file/62f4b0077925c6f767339.mp4',
'https://telegra.ph/file/ba939e1ece20446c80571.mp4', 
'https://telegra.ph/file/9ad0db8174396fd5adf25.mp4',
'https://telegra.ph/file/6cbe0f1284da9c084e75a.mp4',
'https://telegra.ph/file/a710c006c2ccb0f4c260e.mp4',
'https://telegra.ph/file/cb95d287587cd810c620b.mp4',
'https://telegra.ph/file/a5283d81b6858b28abb69.mp4',
'https://telegra.ph/file/abe69e7445c9312e8b951.mp4',
'https://telegra.ph/file/5b48b5f3f210f493d0b0b.mp4',
'https://telegra.ph/file/73eb288203e330f8d2cde.mp4',
'https://telegra.ph/file/0781d4438de860910317e.mp4',
'https://telegra.ph/file/e446e5f2b7a8f0b99e5d8.mp4',
'https://telegra.ph/file/d89b2ce0c7b553e38f4e2.mp4',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['edit', 'ايديت'] 

export default handler
const cooldown = 10800000;
let ro = 1500
let d = 20

let handler = async (m, {conn, text, usedPrefix, command, groupMetadata}) => {
  let time = global.db.data.users[m.sender].lastrob + 1800000;
  if (new Date() - global.db.data.users[m.sender].lastrob < 1800000) throw `*⏰ ESPERA ${msToTime(time - new Date())} PARA VOLVER A ROBAR*`;
  if (!text) return m.reply(`*➳ ETIQUETA AL USUARIO QUE QUIERE SAQUEAR*\n\n*EJEMPLO:* ${usedPrefix + command} @tɑg>.`);
  try { 
    let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    if (!_user in global.db.data.users) return m.reply(`➳ المستخدم غير مسجل في قاعدة البيانات!`);
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
    if (global.db.data.users[_user] == undefined) return m.reply(`➳ المستخدم غير مسجل في قاعدة البيانات!`);
    let uuser = global.db.data.users[_user];
    let exp = Math.floor(Math.random() * ro)
    let diamond = Math.floor(Math.random() * d)
    let raid = `المستخدم ⚔️ ᴀ @${_user.split("@s.whatsapp.net")[0]}*
اكسبي: ${exp}
◦ العدد: ${diamond}

الحساب: @${m.sender.split("@")[0]}`;
    if (uuser.diamond <= 5) return m.reply("ليس لدى المستخدم موارد كافية");
    if (uuser.exp <= 10) return m.reply(`ليس لدى المستخدم موارد كافية!`);
    global.db.data.users[_user].exp -= exp * 1;
    global.db.data.users[_user].diamond -= diamond * 1;
    global.db.data.users[m.sender].exp += exp * 1;
    global.db.data.users[m.sender].diamond += diamond * 1;
    await await conn.sendMessage(m.chat, {text: raid, mentions: [_user, m.sender]}, {quoted: m});
    /*conn.sendMessage(
    _user,
    {
      text: `*❕@${m.sender.split("@")[0]} TE ACABA DE ROBAR!*`,
      mentions: [m.sender],
    },
    { quoted: m }
  );*/
    global.db.data.users[m.sender].lastrob = new Date() * 1;
  } catch {
    await m.reply(`*🚓🚓🚓لا يمكنك سرقته لأن الشرطة تحمي هذا المستخدم 👮 (AFK)*`);
  }
};

handler.help = ["saquear [@user]"];
handler.tags = ['rg']
handler.command = /^(raidear|rob|robar)$/i;
handler.group = true;
handler.cooldown = cooldown;
export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + " Hora(s) " + minutes + " Minuto(s)";
}

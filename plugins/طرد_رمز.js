const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`*❐┃هذا الامر يقوم بطرد جميع من برمز الدوله الدوله المحدد┃🛑❯*\n\n*مثال: ${usedPrefix + command} 52*\n*⋄━──═◞⬪❄⬪◟═──━⋄*\n╎𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃╎
     · · • • ✤ • • · ·
𝙱𝚈┇virld`);
  if (isNaN(args[0])) return m.reply(`*❐┃هذا الامر يقوم بطرد جميع من برمز الدوله الدوله المحدد┃🛑❯*\n\n*مثال: ${usedPrefix + command} 52*\n*⋄━──═◞⬪❄⬪◟═──━⋄*\n╎𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃╎`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*❐┃عـذرا لا يوجد رمز +${lol} هنا┃❌❯*\n╎ MEGO-𝙱𝙾𝚃╎`);
  const numeros = ps.map((v)=> '*♦╎↫* @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listanum':
      conn.reply(m.chat, `
*❐═━━━═╊⊰❄⊱╉═━━━═❐*
╎MEGO-𝙱𝙾𝚃╎
     · · • • ✤ • • · ·
𝙱𝚈┇ MEGO

*⋄━──═◞⬪❄⬪◟═──━⋄*

      *قـائـمـة الاعـضـاء الـذيـن يـمـتـلـكـون الارقـام صـاحـبـة رمـز الـدولـه هـذا (${lol}):*\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('*❐┃عـذرا إن الـمـطـور عـطـل هـذا الامـر لـتـشـغـيـلـه يـرجـى مـن مـطـور الـبـوت كـتابـة امـر (.enable restrict)┃❌❯*\n╎𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃╎');
      if (!isBotAdmin) return m.reply('*❐┃يـرجـى رفـع الـبـوت مـشـرف وإعـادة إرسـال الامـر┃❌❯*\n*⋄━──═◞⬪❄⬪◟═──━⋄*\n╎𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃╎\n· · • • ✤ • • · ·\n𝙱𝚈┇mego');
conn.reply(m.chat, `*❐┃سـتـتـم إزالـة كـل عـضـو رمـز دولـتـه ، وكـل 10 ثـوانٍ سـيـتـم طـرد عـضـو واحـد يـمـتـلـك نـفـس رمٓز الـدولـه (${lol})┃❌❯*\n*⋄━──═◞⬪❄⬪◟═──━⋄*\n╎mego-𝙱𝙾𝚃╎
     · · • • ✤ • • · ·
𝙱𝚈┇mego`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `@${user.split('@')[0]} هذا المستخدم تم طرده مسبقا او ربما غادر*\n╎𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃╎`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*❐┃عـذرا ، حـدث خـطأٌ مـا┃❌❯*');
      }
      break;
  }
};
handler.command = /^(طرد_رمز|kicknum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;

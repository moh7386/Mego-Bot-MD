import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*<بارد />*_\n\n*[ 🤖 ] تقديم النص.*\n\n*[ 💡 ] مثال:* _${usedPrefix + command} بارد مرحبا بك_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*< بارد />*_\n\n*[ ℹ️ ] لا يمكن الحصول على رد صالح.*';
    }
  } catch (error) {
    throw `_*< بارد />*_\n\n*[ ℹ️ ] حدث خطأ.  الرجاء معاودة المحاولة في وقت لاحق.*`;
  }
};

handler.command = /^بارد$/i;

export default handler;

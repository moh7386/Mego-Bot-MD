import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/لصوتت|لصوت/.test(mime)) throw `*[❗ملحوظه❗] رد ع فيديو يحب*`;
  const media = await q.download();
  if (!media) throw '*[❗معلومه❗] حدث خطأ ما*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗معلومه❗]نأسف، حدث خطأ أثناء تحويل تسجيل الصوت إلى نص. يرجى المحاولة مرة أخرى*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)|لصوت$/i;
export default handler;

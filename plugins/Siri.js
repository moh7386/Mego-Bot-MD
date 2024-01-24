import _0x1a72b8 from "node-fetch";
let handler = async (_0x2385bd, {
  text: _0x1e6610,
  usedPrefix: _0x5cf304,
  command: _0x339cbe
}) => {
  if (!_0x1e6610 && !(_0x2385bd.quoted && _0x2385bd.quoted.text)) {
    throw "*\u0627\u0643\u0640\u062A\u0640\u0628 \u0646\u0640\u0635 \u0644\u0627\u0633\u0640\u062A\u0640\u0637\u0640\u064A\u0640\u0639 \u0627\u0644\u0640\u0631\u062F \u0639\u0640\u0644\u0640\u064A\u0640\u0647\n\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\xB0\n" + global.veeeee;
  }
  if (!_0x1e6610 && _0x2385bd.quoted && _0x2385bd.quoted.text) {
    _0x1e6610 = _0x2385bd.quoted.text;
  }
  try {
    conn.sendPresenceUpdate("composing", _0x2385bd.chat);
    const _0x57b351 = encodeURIComponent(_0x1e6610);
    const _0x252675 = "https://gurugpt.cyclic.app/chat?prompt=" + _0x57b351 + "&model=" + "llama";
    const _0x1649f0 = await _0x1a72b8(_0x252675);
    const _0x1b647f = await _0x1649f0.json();
    const _0x40cfd8 = _0x1b647f.data;
    await conn.sendMessage(_0x2385bd.chat, {
      "react": {
        "text": "\uD83E\uDD16",
        "key": _0x2385bd.key
      }
    });
    _0x2385bd.reply(_0x40cfd8);
  } catch (_0x105b38) {
    console.error("Error:", _0x105b38);
    throw "*ERROR*";
  }
};
handler.help = ["vvvoonn"];
handler.command = ["\u0633\u064A\u0631\u064A"];
export default handler;

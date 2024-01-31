import _0x53def7 from "node-fetch";
import "axios";
import _0x307283 from "@vitalets/google-translate-api";
import {
    Configuration,
    OpenAIApi
} from "openai";
const configuration = new Configuration({
    "organization": global.openai_org_id,
    "apiKey": global.openai_key
});
const openaiii = new OpenAIApi(configuration);
const handler = async (_0x5313f4, {
    conn: _0x290ff3,
    text: _0x24524e,
    usedPrefix: _0x3e8f46,
    command: _0x3a6531
}) => {
    if (_0x3e8f46 == "a" || _0x3e8f46 == "A") {
        return;
    }
    if (!_0x24524e) {
        throw "*~[🌐] مرحباً بك في قسم الذكاء الاصطناعي ادخل نص لاتستطيع الرد بكل دقة و منطقية*\n\n*• مثل*\n*◉ " + (_0x3e8f46 + _0x3a6531) + " افضل انمي*\n*◉ " + (_0x3e8f46 + _0x3a6531) + " هات نصائح*";
    }
    await _0x290ff3.sendMessage(_0x5313f4.chat, {
        "react": {
            "text": "🗣️",
            "key": _0x5313f4.key
        }
    });
    try {
        _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
        async function _0x3b695b(_0x3943e4) {
            const _0x1e6706 = global.openai_key;
            let _0xdae1f4 = global.chatgpt.data.users[_0x5313f4.sender];
            _0xdae1f4.push({
                "role": "user",
                "content": _0x3943e4
            });
            const _0x4eb28c = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + _0x1e6706
            };
            const _0x37b96f = {
                "model": "gpt-3.5-turbo",
                "messages": [{
                    "role": "system",
                    "content": "تم صنع الملف بواسطه ميججؤؤ."
                }, ..._0xdae1f4]
            };
            const _0x2a2698 = await _0x53def7("https://api.openai.com/v1/chat/completions", {
                "method": "POST",
                "headers": _0x4eb28c,
                "body": JSON.stringify(_0x37b96f)
            });
            const _0x17f189 = await _0x2a2698.json();
            const _0x633242 = _0x17f189.choices[0x0].message.content;
            return _0x633242;
        };
        let _0xf75be5 = await _0x3b695b(_0x24524e);
        if (_0xf75be5 == "error" || _0xf75be5 == '' || !_0xf75be5) {
            return XD;
        }
        _0x5313f4.reply(('' + _0xf75be5).trim());
    } catch {
        try {
            _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
            const _0x3b96c1 = await openaiii.createCompletion({
                "model": "text-davinci-003",
                "prompt": _0x24524e,
                "temperature": 0.3,
                "max_tokens": 0x1001,
                "stop": ["Ai:", "Human:"],
                "top_p": 0x1,
                "frequency_penalty": 0.2,
                "presence_penalty": 0x0
            });
            if (_0x3b96c1.data.choices[0x0].text == "error" || _0x3b96c1.data.choices[0x0].text == '' || !_0x3b96c1.data.choices[0x0].text) {
                return XD;
            }
            _0x5313f4.reply(_0x3b96c1.data.choices[0x0].text.trim());
        } catch {
            try {
                _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                const _0x503645 = await _0x53def7("https://api-fgmods.ddns.net/api/info/openai?text=" + _0x24524e + "&symsg=" + "صنع الملف بواسطه لوفي." + "&apikey=XlwAnX8d");
                const _0x265963 = await _0x503645.json();
                if (_0x265963.result == "error" || _0x265963.result == '' || !_0x265963.result) {
                    return XD;
                }
                _0x5313f4.reply(('' + _0x265963.result).trim());
            } catch {
                try {
                    _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                    const _0xf6af76 = await _0x53def7("https://vihangayt.me/tools/chatgpt?q=" + _0x24524e);
                    const _0x4fb629 = await _0xf6af76.json();
                    if (_0x4fb629.data == "error" || _0x4fb629.data == '' || !_0x4fb629.data) {
                        return XD;
                    }
                    _0x5313f4.reply(('' + _0x4fb629.data).trim());
                } catch {
                    try {
                        _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                        const _0x4f1444 = await _0x53def7("https://vihangayt.me/tools/chatgpt2?q=" + _0x24524e);
                        const _0x539115 = await _0x4f1444.json();
                        if (_0x539115.data == "error" || _0x539115.data == '' || !_0x539115.data) {
                            return XD;
                        }
                        _0x5313f4.reply(('' + _0x539115.data).trim());
                    } catch {
                        try {
                            _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                            const _0x1b4cb3 = await _0x53def7("https://vihangayt.me/tools/chatgpt3?q=" + _0x24524e);
                            const _0x24288c = await _0x1b4cb3.json();
                            if (_0x24288c.data == "error" || _0x24288c.data == '' || !_0x24288c.data) {
                                return XD;
                            }
                            _0x5313f4.reply(('' + _0x24288c.data).trim());
                        } catch {
                            try {
                                _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                                const _0x4b05ee = await _0x53def7("https://api.lolhuman.xyz/api/openai?apikey=" + lolkeysapi + "&text=" + _0x24524e + "&usar=" + _0x5313f4.sender);
                                const _0x20e8d7 = await _0x4b05ee.json();
                                if (_0x20e8d7.result == "error" || _0x20e8d7.result == '' || !_0x20e8d7.result) {
                                    return XD;
                                }
                                const _0x48b38a = await _0x307283('' + _0x20e8d7.result, {
                                    "to": "ar",
                                    "autoCorrect": true
                                });
                                _0x5313f4.reply(('' + _0x48b38a.text).trim());
                            } catch {
                                try {
                                    _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                                    const _0x3687e3 = await _0x53def7("https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv");
                                    const _0x49942d = await _0x3687e3.json();
                                    const _0x45d8ae = await _0x307283('' + _0x49942d.data, {
                                        "to": "ar",
                                        "autoCorrect": true
                                    });
                                    const _0xebd2ae = _0x45d8ae.text;
                                    const _0x174baa = _0xebd2ae.replace(" Indonesia ", " espa\xF1ol ").trim();
                                    _0x5313f4.reply(_0x174baa);
                                } catch {
                                    try {
                                        _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                                        const _0x9a6256 = await _0x53def7("https://api.akuari.my.id/ai/gpt?chat=" + _0x24524e);
                                        const _0x58d514 = await _0x9a6256.json();
                                        if (_0x58d514.respon == "error" || _0x58d514.respon == '' || !_0x58d514.respon) {
                                            return XD;
                                        }
                                        const _0x2a6aea = await _0x307283('' + _0x58d514.respon, {
                                            "to": "ar",
                                            "autoCorrect": true
                                        });
                                        _0x5313f4.reply(_0x2a6aea.text.trim());
                                    } catch {
                                        try {
                                            _0x290ff3.sendPresenceUpdate("composing", _0x5313f4.chat);
                                            const _0x286169 = await _0x53def7("https://api.akuari.my.id/ai/gbard?chat=" + _0x24524e);
                                            const _0x307fd0 = await _0x286169.json();
                                            if (_0x307fd0.respon == "error" || _0x307fd0.respon == '' || !_0x307fd0.respon) {
                                                return XD;
                                            }
                                            const _0x1fd908 = await _0x307283('' + _0x307fd0.respon, {
                                                "to": "ar",
                                                "autoCorrect": true
                                            });
                                            _0x5313f4.reply(('' + _0x1fd908.text).trim());
                                        } catch {
                                            throw "*[❗] حصل خطأ*";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
handler.command = /^(openai|chatgpt|ia|robot|openai2|chatgpt2|بوت|robot2|Mystic|MysticBot)$/i;
export default handler;

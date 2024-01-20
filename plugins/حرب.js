let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  if (!args[0] || args[0] == "شرح") return m.reply(`\t\t\t\t\t\t\t│〄  W A R - Z O N E 〄│

[1] ويــــرزون لــعـــبــه حــرب بــهــجــوم الــادوار او الــهــجــوم بالــتــنـاوب
[2] الــلــعــه مــمــكــن تــتــلــعــب بــنــظــام 1 ضــد 1 او 5 ضــد 5
[3] مــبــلــغ بـــدايــه الــلــعــبــه يــعــتــبــر الــغــنـيــه لــلــفــريــق الــكــســبــان
[4] كـــل لــاعــب هــيــبـقــي مــعــاه 5000 HP ( نــقــاط صــحــه )
[5] نــجــاح الــهــجــوم مــعــتــمــد عــلــي مــســتــواك ومــســتــوي الــعــدو
[6] فــرصــه الــهــجــوم هــي 40 ثــانــيــه , اكــتــر مــن كــده الــهــجــوم هــيــقــل بــمــقــدار 2500 نــقــطــه
[7] الــفــريــق هـيـكــســب لــو الــعــدو بــقــي 0 صـــحــه

│〄 الــــــاوامــــــــر 〄│
⌯ ${usedPrefix + command} انـــضــم A/B = لــانــضــمــام الــي الــلــعـــبه
⌯ ${usedPrefix + command} خـــروج = لـــلــانــســحــاب مـــن الــلــعــبــه
⌯ ${usedPrefix + command} مـــال  = الـــرهـــان عـــلــي الـــمـــال
⌯ ${usedPrefix + command} لــاعــب = لــاحــصــائــيــات الــلــاعـــب
⌯ ${usedPrefix + command} ابـــدا = لــبــدء الـــحـــرب`)


  if (args[0] == "مال"){
    if (!(m.chat in conn.war)) return m.reply(`[⚡]⌯ يــرجــي انــشــاء غــرفـــه اولـا لــانــشــاء الــغــرفـــه اكــتــب :\n⌯ ${usedPrefix + command} انضم`)
    if(m.sender == conn.war[m.chat][0].user){
      if (args[1] != "undefined" && !isNaN(args[1])){
        args[1] = parseInt(args[1])
        if (args[1] < 10 ) return m.reply('[⚡]⌯ اقـــل مــبــلــغ لــلــرهــان هـــو 5000 مـــن الــمــال')
        conn.war2[m.chat].money = args[1]
        return m.reply("[⚡]⌯ تـــم انــشــاء عـــاصـمــه الــحـــرب بـــنـــجــاح " + Number(args[1]).toLocaleString() + "")
      }else {
        return m.reply("[⚡]⌯ ضــيــف مــبــلــغ الــرهـــان عــلــي شـــكــل ارقـــام\n⌯ مــثــال :\n⌯ .حرب مال 5000")
      }
    }else {
      return conn.reply(m.chat,`[⚡]⌯ يــمـــكــن فــقـــط لــ@${conn.war[m.chat][0].user.split('@')[0]} تــحــديــد مـــبــلغ الــرهـــان لــانــه مــنــشــي الــغــرفـــه`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
    }
  }

  // JOIN
  if (args[0] == "انضم"){

    if (global.db.data.users[m.sender].money < 10 ) return m.reply("[⚡]⌯ الــحــد الــادنــي لــامــوالــك هــي 5000 لــكـي تــلــعــب هــذه الــلــعــبــه")
    // FIRST PLAYER
    if (!(m.chat in conn.war)) {
      conn.war2[m.chat] = {"war" : false, "turn" : 0, "time" : 0, "money" : 0}
      conn.war[m.chat] = []
      let exp = global.db.data.users[m.sender].exp
      conn.war[m.chat][0] = {"user": m.sender, "hp": 5000, "lvl": global.db.data.users[m.sender].level, "turn" : false}
      for (let i=1;i<10;i++){
        conn.war[m.chat][i] = {"user": "", "hp" : 0, "lvl" : 0, "turn" : false}
      }
      return m.reply(`[⚡]⌯ لـــقــد بــدات الــلــعــبــه بــنــجــاح\n⌯ فــريــقــك هـــو A\n⌯ ${usedPrefix}حـــرب انـــضــم A/B = لــانــضــمــام الــي الــلــعـــبه\n⌯ ${usedPrefix}حـــرب ابـــدا = لــبــدء الـــحـــرب`)
    }else {   // NOT FIRST PLAYER
      // IF FULL
      if (conn.war2[m.chat].war) {
        return m.reply(`⌯ لــقـــد بــدات الــلــعــبــه لــا يــمــكــنــك الــانــضــام`)
      }
      // IF YOU ALREADY JOIN THE GAME
      for (let i = 0; i < conn.war[m.chat].length ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          let total = 0
          for (let i = 0 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              total += 1
            }
          }
          return m.reply(`⌯ لــقــد دخـلــت الــي الــلــعــبــه\n⌯ اســتــخــدم :\n⌯ ${usedPrefix}حـــرب انـــضــم A/B = لــانــضــمــام الــي الــلــعـــبه\n⌯ ${usedPrefix}حـــرب ابـــدا = لــبــدء الـــحـــرب`)
        }
      }

      // JOIN MILIH TIM
      if (args[1]){
        if (args[1].toLowerCase() == "a"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`[⚡]⌯ @${conn.war[m.chat][0].user.split('@')[0]} يـرجـي ادخــال مـبـلـغ رهــان لـبـدا الـحـرب 〙عـلـي الــاقــل 5000 مــن الــمال 〙\n⌯ اســتـخـدم الــامـــر :\n⌯ ${usedPrefix}حـــرب مـــال  = الـــرهـــان عـــلــي الـــمـــال
`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          return m.reply('a')
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`⌯ عـــلــي الــاقــل يــجــب ان يـــكــون مــعــك ${conn.war2[m.chat].money.toLocaleString()} لــلــعــب هــذه الــلــعــبــه`)
          for (let i = 1 ; i < 5 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`〄│ لــقــد انــضــمــت بــنــجــاح الــي الــفــريــق A\n\n⌯ ${usedPrefix}حـــرب انـــضــم A\n⌯ ${usedPrefix}حـــرب انـــضــم  B`)
            }
          } 
        }else if (args[1].toLowerCase() == "b"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`[⚡]⌯ @${conn.war[m.chat][0].user.split('@')[0]}  5000 مــن الــمال 〙\n⌯ اســتـخـدم الــامـــر :\n⌯ ${usedPrefix}حـــرب مـــال  = الـــرهـــان عـــلــي الـــمـــال`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`⌯ عـــلــي الــاقــل يــجــب ان يـــكــون مــعــك ${conn.war2[m.chat].money.toLocaleString()} لــلــعــب هــذه الــلــعــبــه`)
          for (let i = 5 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`〄│ لــقــد انــضــمــت بــنــجــاح الــي الــفــريــق B\n\n⌯ ${usedPrefix}حـــرب انـــضــم A\n⌯ ${usedPrefix}حـــرب انـــضــم  B`)
            }
          }
        }else {
          return m.reply(`〄│ اخــتــار الــفــريــق A او B\n⌯ اســتــخــدم الــامـــر :\n⌯ ${usedPrefix}حـــرب انـــضــم A\n⌯ ${usedPrefix}حـــرب انـــضــم  B`)
        }
      }else {
        // JOIN SESUAI URUTAN
        return m.reply(`〄│ اخــتــار الــفــريــق A او B\n⌯ اســتــخــدم الــامـــر :\n⌯ ${usedPrefix}حـــرب انـــضــم A\n⌯ ${usedPrefix}حـــرب انـــضــم  B`)
      }


      // CHECK IF ROOM FULL
      for (let i = 0 ; i < conn.war[m.chat].length ; i++) {
        let total = 0
        if (conn.war[m.chat][i].user != ""){
          total += 1
        }
        if (total == 10) conn.war2[m.chat].war = true
      }
    }
  }

  // LEFT GAME
  if (args[0] == "خروج"){
    // IF GAME START
    if (conn.war2[m.chat].war) {
      m.reply(`[⚡]⌯ لــقــد بــدات الــحــرب لــا يــمــكــنــك الــمــغــادره`)
    }else {   // IF NOT
      for (let i = 0 ; i < 10 ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          return m.reply(`⌯ لــقــد غــادرت الــلــعــبــه بــنــجــاح`)
        }
      }
      return m.reply(`[⚡]⌯ انــت لــســـت فـــي لــعــبــه`)
    }
  }

  // CEK PLAYER
  if (args[0] == "لاعب"){ 
    if (!(m.chat in conn.war)) return m.reply(`[⚡]⌯ لــا يــوجــد لــاعــبــون انــضــمــو الــي WarZone`)
    var teamA = []
    var teamB = []
    var teamAB = []
    for (let i = 0 ; i < conn.war[m.chat].length ; i++){
      if (i < 5){
        if (conn.war[m.chat][i].user != "") teamA.push(conn.war[m.chat][i].user)
      }else {
        if (conn.war[m.chat][i].user != "") teamB.push(conn.war[m.chat][i].user)
      }
      teamAB.push(conn.war[m.chat][i].user)
    }
    // return m.reply(teamA[0])
    conn.reply(m.chat, `${conn.war2[m.chat].war ? '〄│ دور : ' + '@' + conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0] + '\n〄│ مــبــلــغ الــرهـــان :' + Number(conn.war2[m.chat].money).toLocaleString() + '\n\n' : '〄│ مــبــلــغ الــرهـــان :' + Number(conn.war2[m.chat].money).toLocaleString() + '\n\n' } ⌯ الـــفــريــق A :\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} 〘 Lv.${conn.war[m.chat][i].lvl} HP: ${conn.war[m.chat][i].hp} 〙`).join`\n` + "\n\n⌯ الـــفــريــق B :\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} 〘 Lv.${conn.war[m.chat][i+5].lvl} HP: ${conn.war[m.chat][i+5].hp} 〙`).join`\n`,m, {contextInfo: {
      mentionedJid: teamAB
    }})
  }

  // START GAME
  if (args[0] == "ابدا"){
    if (conn.war2[m.chat].war) return m.reply(`⌯لــقــد بــدات الــحــرب لــا يــمــكــنــك الـانـضـمـام الــيــهــا الــلـان`)
    teamA = 0
    teamB = 0
    for (let i=0;i<10;i++){
      if(i<5){
        if (conn.war[m.chat][i].user != "") teamA += 1
      }else{
        if (conn.war[m.chat][i].user != "") teamB += 1
      }
    }

    if (teamA == teamB && teamA > 0){
      conn.war2[m.chat].war = true
      for (let i=0;i<5;i++){
        if (conn.war[m.chat][i].user != ""){
          let user = conn.war[m.chat][i].user
          return conn.reply(m.chat,`[⚡]⌯ بـــدات الــلــعــبــه بــنــجــاح\n⌯ @${user.split('@')[0]} لــمــهـــاجــمــه الـــعـــدو اســـتـــخــدم\n.حرب لاعب = لــمــعــرفــه احــصــائــيــات الــلــاعــب\n.هــجـــوم @مــنــشــن = لــمــهــاجــمــه الــعــدو`, m, {contextInfo: { mentionedJid: [user] }})
        }
      }
    }else {
      if (teamA > teamB){
        m.reply(`⌯ الــفــريــق B اقــل ${teamA-teamB} لــهــم لــجــعــل الــلــعــبــه عــادلـــه`)
      }else {
        m.reply(`⌯ الــفــريــق A اقـــل بــمــقــدار ${teamB-teamA} انــتــظــر انــضــمــام احــد لــهــم لــجــعــل الــلــعــبــه عــادلـــه`)
      }
    }
  }

}
handler.help = ['Shadow']
handler.tags = ['Shadow']
handler.command = /^(حرب|ويرزون|وارزون|الحرب|معركه)$/i
handler.group = true
export default handler
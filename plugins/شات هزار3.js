/*let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 👑🔥*'  
     ]; 
}else if (/^نعم/i.test(m.text)) { 
     responses = [ 
'*حد ناداك انت 🤡*'
     ]; 
   }else if (/^اه|اهه$/i.test(m.text)) { 
     responses = [ 
'اه                                                                                                                 *اخخ في الشارع اللي وراه دنا هروح اعملك محضر بن فاجره دلوقتي*',
]; 
   }else if (/^ميجو تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 

     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^تست/i.test(m.text)) { 
     responses = [ 
       '*انا شغال ما تقلق*',  

     ]; 
   }else if (/^المطور$/i.test(m.text)) { 
     responses = [ 
'هلا هذا هو رقم مطوري ارجو عدم ازعاجه والا سيحظرك 👾🔥.                     https://wa.me/+201012531172@s.whatsapp.net/?text=BY+『🔥┇MEGO-𝙱𝙾𝚃』'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
   }else if (/^اي$/i.test(m.text)) { 
     responses = [ 
       '*ختك عليه 🗿*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
   }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^mego$/i.test(m.text)) { 
     responses = [ 
       '*تحت امرك حبي*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;

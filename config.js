import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201012531172', '🌩️ ẉa.me//𝑀𝐸𝐺𝛩‖.peị!‽ 👑', true], ['5217294888993'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['201012531172']
global.suittag = ['201012531172']
global.mods = []
global.prems = []

global.packname = '『 ميــجــو بــ☠️ـوت 』'
global.author = '『 +201012531172 』'
global.wm = '『 ميــجــو 』'
global.wm2 = '『 ميــجــو بــ💎ـوت 』'
global.azami = '『 ميــجــو 』'
global.cb = '『 ميــجــو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© Azami ~ Zam'
global.devnum = '+52 1 729 488 8993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

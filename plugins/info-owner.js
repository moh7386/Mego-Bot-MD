function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), estilo, m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['المطور', 'مطور', 'المالك', 'owner'] 

export default handler

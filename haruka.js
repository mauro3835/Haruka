require('./settings/config.js')
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const { banner, getBuffer, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const CFonts  = require('cfonts')
const { uploadImages } = require('./lib/uploadimage')

require('./command/case.js')
nocache('./command/case.js', module => console.log(`${module} is now updated!`))

const starts = async (haruka = new WAConnection()) => {
    haruka.logger.level = 'warn'
    haruka.version = [2, 2143, 3]
    haruka.browserDescription = [ 'Dark-bot', 'Chrome', '3.0' ]
	CFonts.say('Dark-bot', {
		font: 'block',
    	color: ['#ff9c00'],
    	align: 'center',
		})
	CFonts.say(`Bot creado exclusivamente para Jonatan`, {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})
		
    haruka.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el codigo qr, solo dura 20 segundos cada uno'))
    })

    fs.existsSync('./dark-bot.json') && haruka.loadAuthInfo('./dark-bot.json')
    haruka.on('connecting', () => {
        start('2', 'Conectando...')
    })
    haruka.on('open', () => {
        success('2', 'Conectado, bienvenido Jonatan')
    })
    await haruka.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./dark-bot.json', JSON.stringify(haruka.base64EncodedAuthInfo(), null, '\t'))

    haruka.on('chat-update', async (message) => {
        require('./command/case.js')(haruka, message)
    })

	haruka.on('group-participants-update', async (anu) => {
		console.log(anu)
		try {
						const sendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
							const mediaxxaaaa = await haruka.prepareMessage(id, gam1, MessageType.location, {thumbnail: gam1})
							var mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
							const buttonMessages = {
								locationMessage: mhan.message.locationMessage,
								contentText: text1,
								footerText: desc1,
								buttons: but,
								headerType: 6
								}
							haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						const mdata = await haruka.groupMetadata(anu.jid)
						num = anu.participants[0]
						let v = haruka.contacts[num] || { notify: num.replace(/@.+/, "") };
						anu_user = v.vname || v.notify || num.split("@")[0];
						try {
							ppmem = await haruka.getProfilePicture(num);
							} catch (e) {
								ppmem = 'https://telegra.ph/file/f8df36078279304745bae.png'
								}
						try {
							ppgc = await haruka.getProfilePicture(anu.jid);
							} catch (e) {
								ppgc = 'https://telegra.ph/file/d4c05638fa7886a1d8060.jpg'
								}
						let ppmem2 = await getBuffer(ppmem)
						let ppmem3 = await uploadImages(ppmem2)
						let ppgc2 = await getBuffer(ppgc)
						let ppgc3 = await uploadImages(ppgc2)
						let gakloo = [{
										"buttonId": `.owner`,
										"buttonText": {
											"displayText": "Bienvenid@ 🎉"
											},
										"type": "RESPONSE"
										}]
						if (anu.action == 'add' && !num.includes(haruka.user.jid)) {
							welcome = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/welcome2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Bienvenid@ @${num.split('@')[0]} a ${mdata.subject}` + '\n' + lang.welcome(), `${ownername}`,welcome, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bienvenid@ 🎉"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Bienvenid@ @${num.split('@')[0]} a ${mdata.subject}` + '\n' + lang.welcome(), `${ownername}`,ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bienvenid@ 🤗"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
						} else if (anu.action == 'remove' && !num.includes(haruka.user.jid)) {
							goodbye = await getBuffer(`https://api-alphabot.herokuapp.com/api/greetings/goodbye2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=Alphabot`)
							try{
							await sendButLoc(mdata.id, `Adios @${num.split('@')[0]}\n⌯ָ   ֙Salió del grupo:\n${mdata.subject}` + '\n' + lang.leave(), `${ownername}`,goodbye, [{"buttonId": `a`,"buttonText": {"displayText": "Bye 🙃"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Adios @${num.split('@')[0]}\n⌯ָ   ֙Salió del grupo:\n${mdata.subject}` + '\n' + lang.leave(), `${ownername}`,ppmem2, [{"buttonId": `a`,"buttonText": {"displayText": "Bye 🙃"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
							
						}
				} catch (e) {
					console.log('Error : %s', color(e, 'red'))
					}
		})
}
	
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('El archivo', `'${module}'`, 'Se modifico con exito')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

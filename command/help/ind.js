exports.limitcount = (prem, limitCounts) => {
	return`
*「 CONTADOR LÍMITE 」*
Límite restante : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Perdon ${pushname} tus límites se acabaron\nLos limites se reinicia a las horas 24:00`
}
exports.noregis = (pushname) =>{
	return`Hola ${pushname} no estas registrado\nescribe .daftar para registrarte`
	}
exports.regis = () =>{
	return`Ya te has registrado 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *REGISTRO EXITOSO*

• Nombre : ${pushname}
• Numero : ${sender.split("@")[0]}
• Hora : ${time}
• Serial : ${serialUser}
• Total De Users : ${totalUser.length}

Gracias, me he registrado, ahora escriba .menu para ver
los comandos del bot.
`
	}
exports.owner = (botname) =>{
	return` ❌ Comando especial del propietario ${botname}`
	}
exports.admin = (groupName) =>{
	return` ❌ Comandos especiales para administración ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ El bot tiene que ser admin para este comando`
	}
exports.err = () =>{
	return`⚠️ Esta característica es un error !`
	}
exports.group = () =>{
	return`❗ Comando especial para grupos`
	}

exports.wait = () =>{
	return`🌌 Espere unos segundos...`
	}
exports.ok = () =>{
	return` ✅ Listo`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nombre :
⌯ָ   ֙Pais :
⌯ָ   ֙Edad :
╰─ ᝬ _Observa las reglas del grupo Sí_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Hasta luego_`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hola ${pushname}, ${salam}

╭─⬣ 🌌 *Lista de comandos* 🖤
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}dark
│
├🌀 *Descargas* 💠
│ • ${prefix}play [Nombre de la música]
│ • ${prefix}song [Nombre de la musica]
│ • ${prefix}pinterest [Nombre de la imagen]
│ • ${prefix}ytmp3 [Link de Yt]
│ • ${prefix}ytmp4 [Link de Yt]
│ • ${prefix}tiktok [Link de Yt]
│ • ${prefix}tiktoknowm [Link de tiktok]
│ • ${prefix}tiktokwm [Link de tiktok]
│ • ${prefix}tiktokaudio [Link de tiktok]
│ • ${prefix}soundcloud [Link de soundcloud]
│ • ${prefix}telesticker [Link de telegram sticker]
│
├✨ *Alterador* ⚡
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}smeme [texto]
│ • ${prefix}memegen [texto|texto2]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├❗ *Info* 👤
│ • ${prefix}creador
│ • ${prefix}reg
│
├🥷 *Propietario* 🌑
│ • ${prefix}bc [texto]
│ • ${prefix}salir
│ • >
│ • $
│ •  => 
│
├💯 *Groupo* 👥
│ • ${prefix}antilink 1 / 0
│ • ${prefix}hidetag [texto]
│ • ${prefix}linkgrup
│ • ${prefix}tagall
│ • ${prefix}kick @marcar
│ • ${prefix}setdesc [texto] 
│ • ${prefix}setname [texto] 
╰─⬣
`
	}

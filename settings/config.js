const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="Mauu"
global.ownernumber = "3865328659"
global.botname = "Goku-𝐛𝐨𝐭"
global.thumbnail = fs.readFileSync("./settings/goku.jpg") //sesuaikan dengan nama foto
global.background = "https://wi.wallpapertip.com/wsimgs/46-465716_dark-anime-wallpaper-hd-dark-anime-desktop-wallpaper.jpg"
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "dark.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

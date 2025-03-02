require("./database/module")

//GLOBAL PAYMENT
global.storename = "ZORD_TEAMS-V4"
global.dana = "263718036108"
global.qris = "https://i.ibb.co/BnYRXcw/ZORD_TEAMS-V4.jpg"


// GLOBAL SETTING
global.owner = "2348187637779"
global.namabot = "STINGER-V7"
global.nomorbot = "2348187637779"
global.namaCreator = "ZORD TEAMS"
global.linkyt = "https://youtube.com/@KINGZORD263"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.2'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/BnYRXcw/ZORD_TEAMS-V4.jpg'
global.isLink = 'NULL'
global.packname = "ZORD_TEAMS-V4"
global.author = "ZORD_TEAMS-V4"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	000uire(file)
})0
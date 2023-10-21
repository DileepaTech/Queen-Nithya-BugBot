const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "9xxxxxxxxxx"
global.ownername = "Dileepa"
global.ytname = "YT: Dileepa Tech"
global.socialm = "GitHub: DileepaTech"
global.location = "Sl"

global.ownernumber = '17188785916'  //creator number
global.ownername = 'Dileepa' //owner name
global.botname = 'Nithya Bug Bot' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Dileepa'

//console view/theme
global.themeemoji = '🪀'
global.wm = " DileepaTech."

//theme link
global.link = 'https://chat.whatsapp.com'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Nithya/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
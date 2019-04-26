const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();
const prefix = botConfig.prefix;


fs.readdir("./commands/" , (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0){
        console.log("Cant find any files");
        return;
    }

    let forEach = jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`The file ${f} has loaded`);

        bot.commands.set(fileGet.help.name, fileGet);
        bot.commands.set(fileGet.help.alias, fileGet);

    });

});

bot.on("ready", async() => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity(prefix + "help", {type: "PLAYING"});

});


bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    // if(!message.reaction.users) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot,message, arguments);

    if (commands) {
        message.delete(10000);
    }
});

bot.on("message", async message => {
    // if (message.content.toLowerCase() === 'rflintstone' || message.content.toLowerCase() === '@rflintstone') {
    RFtag = message.member.user.tag.toString() == 'RFlintstone';
    if (message.isMentioned(bot.users.get('220959178779262986'))) { //Check if RFlintstone#1631 is tagged
        message.channel.send({
            "embed": {
                "author": {
                    "name": "RFlintstone",
                    "icon_url": "https://cdn.discordapp.com/avatars/220959178779262986/baa50fed3dc7b3cfaccebf69dd4cd6b7.png"
                },
                "description": "Hi, thanks for tagging me! I'm currently on vacation and am on a camping for about 5 days. I'm trying to read your post but I reccomend tagging a staff member. \n\n Kind regards, \n Ruben",
                "color": 45555,
                "timestamp": "2019-04-27T18:00:00.000Z",
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/avatars/220959178779262986/baa50fed3dc7b3cfaccebf69dd4cd6b7.png",
                    "text": "on vacation from"
                }
            }
        }).then(message => {
            message.delete(20000)
        });
    }
});

bot.login(botConfig.token);
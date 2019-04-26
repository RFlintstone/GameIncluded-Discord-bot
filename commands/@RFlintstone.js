const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
bot.on('message', message => {
    if (message.content.toLowerCase() === 'RFlintstone') {
    // if (message.content.toLowerCase().includes('test')) {
        message.channel.send({
            "embed": {
                "author": {
                    "name": "RFlintstone",
                    "icon_url": "https://cdn.discordapp.com/avatars/220959178779262986/baa50fed3dc7b3cfaccebf69dd4cd6b7.png"
                },
                "description": "Hi, thanks for tagging me! I'm currently on vacation and am on a camping for about 5 days. I'm trying to read your post but I reccomend tagging a staff member. \n\n Kind regards, \n Ruben",
                "url": "https://discordapp.com",
                "color": 45555,
                "timestamp": "2019-04-27T18:00:00.000Z",
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/avatars/220959178779262986/baa50fed3dc7b3cfaccebf69dd4cd6b7.png",
                    "text": "on vacation from"
                }
            }
        }).then(message => {
            message.delete(9800)
        });
    }
})
};

module.exports.help = {
    name: "IsAway",
    alias: "RFlintstone"
};
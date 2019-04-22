const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569957872453156880")
setInterval(function() {
channel.send(`shkls shkls`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
let interval = args[0]
let check = parseInt(interval)
const embederr1 = new Discord.MessageEmbed()
  .setTitle(`❌ | **__Error__**`)
  .setColor(`#FF2E30`)
  .setDescription(`**Please provide an appropriate amount of interval to ping the url\'s after.**`)
  .setFooter(message.guild.name, message.guild.iconURL)
if(!interval) return message.reply(embederr1)
if(isNaN(check)) return message.reply(embederr1)

let urls = bot.uptimer.uniqueallurls(message.author.id)
if(urls.length <= 0) {
  const embederr = new Discord.MessageEmbed()
  .setTitle(`❌ | **__Error__**`)
  .setColor(`#FF2E30`)
  .setDescription(`**You don't have any url\'s present in our database, please add one before continuing.**`)
  .setFooter(message.guild.name, message.guild.iconURL)
return message.author.send(embederr).catch(err => {
return message.channel.send(embederr)
})
}
bot.uptimer.uniquesetinterval(interval, message.author.id)
bot.uptimer.uniquestop(message.author.id)
await bot.uptimer.uniquestart(true, message.author.id)

let embed = new Discord.MessageEmbed()
.setDescription("✅ | **__I have successfully configured "+interval+" as the interval to ping all of your url\'s after!__**")
.setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
.setColor("#43FF30")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
}

module.exports.help = {
  name:"config",
	description:"A command to configure the amount of time to ping a url after."
}

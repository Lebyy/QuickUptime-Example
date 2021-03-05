const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {
let url = args[0]
const embederrlength = new Discord.MessageEmbed()
  .setTitle(`❌ | **__Error__**`)
  .setColor(`#FF2E30`)
  .setDescription(`**The link should be less than 130 characters! Please re-run the command.**`)
  .setFooter(message.guild.name, message.guild.iconURL)
const embederrprotocol = new Discord.MessageEmbed()
  .setTitle(`❌ | **__Error__**`)
  .setColor(`#FF2E30`)
  .setDescription("**Please include the link with a protocol like `https://` or `http://`**")
  .setFooter(message.guild.name, message.guild.iconURL)
if(url.length > 130) return message.channel.send(embederrlength)
if(url.startsWith("https://") === false && url.startsWith("http://") === false) return message.channel.send(embederrprotocol)

// We remove the url in our quickuptime db here.
bot.uptimer.uniqueremoveurl(url, message.author.id)
bot.uptimer.uniquestop(message.author.id)
await bot.uptimer.uniquestart(true, message.author.id)

let embed = new Discord.MessageEmbed()
.setDescription("✅ | **__I have successfully removed "+url+" from my database!__**")
.setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
.setColor("#43FF30")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
}

module.exports.help = {
  name:"remove",
	description:"A command to remove your url(s) from the database!"
}

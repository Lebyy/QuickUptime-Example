const Discord = require("discord.js");
const config = require("../config.json");
module.exports.run = async (bot, message, args) => {

bot.uptimer.uniquestop(message.author.id)
await bot.uptimer.uniqueclear(message.author.id)

let embed = new Discord.MessageEmbed()
.setDescription("✅ | **__I have successfully cleared all of your url(s) from my database!__**")
.setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
.setColor("#43FF30")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
}

module.exports.help = {
  name:"removeall",
	description:"A command to remove all url(s) of yours from the database!"
}

const Discord = require("discord.js");
const config = require("../config.json");
let prefix = config.prefix;
module.exports.run = async (bot, message, args) => {
let joinedurls;
let user = message.author
let urls = bot.uptimer.uniqueallurls(user.id) || []
let data = [];
if(urls.length <= 0) {
  const embederr = new Discord.MessageEmbed()
  .setTitle(`❌ | **__Error__**`)
  .setColor(`#FF2E30`)
  .setDescription(`**You don't have any url\'s present in our database, please add one before continuing.**`)
  .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
return message.author.send(embederr).catch(err => {
return message.channel.send(embederr)
})
}
if(urls.length >= 1) {
urls.splice(0, 20).map((item, index) => {
let urlpos = index + 1;
let url = item
data.push({
urlpos,
url
})
})
}

let embed = new Discord.MessageEmbed()
.setTitle(`💻 | **__Your profile__**`)
.setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
.setColor("#E3E4EA")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
data.forEach(d => {
embed.addField(`\`${d.urlpos}. ${d.url}\``, `\u200b`)
})
message.author.send(embed).catch(err => {
return message.channel.send(embed)
})

}

module.exports.help = {
  name:"profile",
	description:"A command which will return your profile"
}

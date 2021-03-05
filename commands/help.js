const Discord = require("discord.js");
const config = require("../config.json");
let prefix = config.prefix;
module.exports.run = async (bot, message, args) => {
let commands = bot.commands.array();
    let helpEmbed = new Discord.MessageEmbed()
      .setTitle(":tada: **__My commands!__**")
      .setColor("#F8AA2A")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**\`${prefix}${cmd.help.name}\`**`,
        `${cmd.help.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
}

module.exports.help = {
  name:"help",
	description:"This command!"
}

// Example of how to make a Command
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ["av", "pfp"],
    category: "Utility",
    description: "Check your profile avatar.",
    ownerOnly: false,
    run: async (client, message, args) => {
        if (!message.mentions.users.size) {
            const msg = await message.channel.send(`Grabbing Information...`);
            const avatarEmbed = new client.discord.MessageEmbed()
                    .setDescription(` **<@${message.author.id}>'s** Avatar`)
                    .setImage(message.author.displayAvatarURL({format:'png', size:512}))
                    .setColor(client.config.embedColor)
                    .setFooter('1011')

                message.channel.send({ embeds: [avatarEmbed], allowedMentions: { repliedUser: true }});
        } else {
        const mention = message.mentions.members.first();
        const avEmbed2 = new client.discord.MessageEmbed()
        .setDescription(` **${message.mentions.users.first()}'s** Avatar`)
        .setImage(mention.displayAvatarURL({format:'png', size:512}))
        .setColor(client.config.embedColor)
        .setFooter('1011')
        message.channel.send({ embeds: [avEmbed2], allowedMentions: { repliedUser: true }});
        }
    },
};
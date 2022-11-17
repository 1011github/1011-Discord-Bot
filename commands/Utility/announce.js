// Example of how to make a Command
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "announce",
    aliases: ["say", "loud"],
    category: "Utility",
    description: "Make your message stand out in chat.",
    ownerOnly: false,
    run: async (client, message, args) => {
        if(message.author.bot) return;

        let messageArray = message.content.split(" ");
        let announcement = args.slice(0).join(" ");

        const announceEmbed = new client.discord.MessageEmbed()
                    .setTitle(` **${announcement}**`)
                    .setColor(client.config.embedColor)
                    .setFooter(`${message.author.username}`)

        message.channel.send({ embeds: [announceEmbed], allowedMentions: { repliedUser: true }});
        message.delete()
    },
};
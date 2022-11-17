const { Client, Collection, Intents } = require('discord.js');
const handler = require("./handler/index");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
});

const Discord = require('discord.js');

// Call .env file to get Token
require('dotenv').config()

module.exports = client;



// Global Variables
client.discord = Discord;
client.commands = new Collection();
client.config = require('./config')


//EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS ////
client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
   // member.guild.channels.cache.find(c => c.name === "﹒msg").send(`welc **${member.user.username}**<3`);
});

client.on("messageCreate", (message) => { // When a message is created
    if(message.content === "james") { // If the message content is "!ping"
        const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'jcatlick');
        message.react(reactionEmoji)
      // Send a message in the same channel with "Pong!"
    }
});

// Records commands and events
handler.loadEvents(client);
handler.loadCommands(client);

// Error Handling

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
});

// Login Discord Bot Token
client.login(process.env.TOKEN);
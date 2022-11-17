// Example of how to make a Command

module.exports = {
    name: "ping",
    aliases: ["pong", "latency"],
    category: "Utility",
    description: "Check the bot's ping!",
    ownerOnly: false,
    run: async (client, message, args) => {
        const msg = await message.channel.send(`Reading Your Ping`);
        message.channel.send(`${Math.floor(msg.createdAt - message.createdAt)}ms`)
    },
};

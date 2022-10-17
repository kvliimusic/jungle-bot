
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('jst')
    .setDescription("Updates the bot's status for the jungle jam. (temporary)"),
    async execute(interaction) {
        console.log('jst.js running...')
        client.user.setPresence({
        	activities: [{ name: `the Jungle Jam`, type: ActivityType.Streaming, url: `https://twitch.tv/beatdropmusicschool` }],
        	status: 'dnd',
        });
        console.log('successfully reached end of file, returning data')
        
        return interaction.reply({ content: 'Done!', ephemeral: true });
    },
};
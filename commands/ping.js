const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong to check if the bot is working.'),
	async execute(interaction) {
		console.log('ping.js running...')
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ content: 'Pong!', ephemeral: true });
	},
};
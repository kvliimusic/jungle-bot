const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crash')
		.setDescription('Crashes the bot.'),
	async execute(interaction) {
		return interaction.reply({ content: 'You are authorised! This means you are able to run restricted commands (when they are created.)', ephemeral: true });
	},
};
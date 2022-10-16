const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelog')
		.setDescription("View the bot's changelog."),
	async execute(interaction) {
		console.log('changelog.js running...')
		const embed = {
			title: "Click here to view the changelog:",
			color: 0x39f79e,
			description: 'https://github.com/Jexanti/Jungle-Bot/blob/main/pages/changelog/main.md'
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
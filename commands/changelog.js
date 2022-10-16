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
			description: 'https://members.beatdrop.ca/products/the-jungle/categories/2147982833/posts/2157218725'
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
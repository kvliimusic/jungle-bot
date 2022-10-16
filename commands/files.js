const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('files')
		.setDescription('Download the files for the weekly session.'),
	async execute(interaction) {
		console.log('files.js running...')
		const embed = {
			title: "Download the files for the weekly session here:",
			color: 0x39f79e,
			description: 'https://members.beatdrop.ca/products/the-jungle/categories/2147982833/posts/2157218725'
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
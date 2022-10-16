const { SlashCommandBuilder } = require('discord.js');
const config = require ('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('files')
		.setDescription('Download the files for the weekly session.'),
	async execute(interaction) {
		console.log('files.js running...')
		const embed = {
			title: "Download the files for the weekly session here:",
			color: 0x39f79e,
			description: config.filesLink
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
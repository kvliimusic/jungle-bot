const { SlashCommandBuilder } = require('discord.js');
const config = require ('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zoom')
		.setDescription('Get the zooom link for the weekly sessions.'),
	async execute(interaction) {
		console.log('zoom.js running...')
		const embed = {
			title: "Join the weekly session here:",
			color: 0x39f79e,
			description: config.zoomLink
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
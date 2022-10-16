const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('challenge')
	.setDescription('View the weekly challenge.'),
	async execute(interaction) {
		console.log('challenge.js running...')
		const embed = {
			title: "This week's challenge:",
			color: 0x39f79e,
			description: "Try a new plugin using a new instrument or effect that you don't have in ableton live. Try to combine your own sounds with the plugin to create something original!"
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
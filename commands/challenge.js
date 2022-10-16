const { SlashCommandBuilder } = require('discord.js');
const config = require ('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
	.setName('challenge')
	.setDescription('View the weekly challenge.'),
	async execute(interaction) {
		console.log('challenge.js running...')
		const challengeText = "Create an original cinematic track for a film trailer (which can be either imaginary or pre-existing). If it already exists, mute the original music."
		const embed = {
			title: "This week's challenge:",
			color: 0x39f79e,
			description: challengeText+"\n\nOnce you're done, submit here:\n"+config.challengeLink
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
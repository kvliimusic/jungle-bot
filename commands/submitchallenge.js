const { SlashCommandBuilder } = require('discord.js');
const config = require ('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('submitchallenge')
		.setDescription('Get the link to submit your weekly challenge.'),
	async execute(interaction) {
		console.log('submitchallenge.js running...')
		const embed = {
			title: "Submit your challenge here:",
			color: 0x39f79e,
			description: config.challengeLink
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
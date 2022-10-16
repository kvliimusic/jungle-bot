const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('submitchallenge')
		.setDescription('Get the link to submit your weekly challenge.'),
	async execute(interaction) {
		console.log('submitchallenge.js running...')
		const embed = {
			title: "Submit your challenge here:",
			color: 0x39f79e,
			description: 'https://www.dropbox.com/request/9z5S5RrVCEA2nKBbllM7'
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
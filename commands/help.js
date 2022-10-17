const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get help with the bot.'),
	async execute(interaction) {
		console.log('help.js running...')
		const embed = {
			title: "Go here for help:",
			color: 0x39f79e,
			description: "https://github.com/Jexanti/Jungle-Bot/blob/main/pages/info/help.md \n\nIf you've got any other questions, feel free to DM <@!530418630102482945>."
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
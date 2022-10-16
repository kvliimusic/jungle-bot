const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get help with the bot.'),
	async execute(interaction) {
		console.log('help.js running...')
		const embed = {
			title: "How to use slash commands",
			color: 0x39f79e,
			description: "1) On Discord, type `/` into your message box.\n2) Select the icon of the Jungle Bot on the left side.\n3) Look through the list of commands, then select the one you want to run.\n4) Send the message like you would normally.\n\nIf you've got any other questions, feel free to DM <@!530418630102482945>."
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
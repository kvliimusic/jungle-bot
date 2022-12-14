const { clientId, guildId_testing, token, debug } = require('../config.json');
const debugLog = (string, obj) => {
	if (debug == 'on') {
		console.log('DEBUG (deploy testing) ---',string, obj)
	}
}

debugLog('deployment testing')

const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

debugLog('imported stuff')
const commands = [];

// unrestricted commands
const commandsPath = path.join(__dirname, '../commands');
debugLog('commands path (unrestricted)',commandsPath)
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
debugLog('command files (unrestricted)',commandFiles)

for (const file of commandFiles) {
	debugLog('working on file',file)
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
	debugLog('finished',file)
}

// restricted commands
const restrictedsPath = path.join(__dirname, '../restricted');
debugLog('commands path (restricted)',restrictedsPath)
const restrictedFiles = fs.readdirSync(restrictedsPath).filter(file => file.endsWith('.js'));
debugLog('command files (restricted)',restrictedFiles)

for (const file of restrictedFiles) {
	debugLog('working on file',file)
	const filePath = path.join(restrictedsPath, file);
	const restricted = require(filePath);
	commands.push(restricted.data.toJSON());
	debugLog('finished',file)
}

debugLog('commands', commands)

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId_testing), { body: commands })
	.then(() => console.log('Successfully registered commands in testing server.'))
	.catch(console.error);

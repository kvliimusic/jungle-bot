const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId_production, token } = require('../config.json');

const commands = [];
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const restricted = [];
const restrictedPath = path.join(__dirname, '../restricted');
const restrictedFiles = fs.readdirSync(restrictedPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

for (const file of restrictedFiles) {
	const filePath = path.join(restrictedPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId_production), { body: commands })
	.then(() => console.log('Successfully registered commands to Jungle server.'))
	.catch(console.error);

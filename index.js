// import libraries and files
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, } = require('discord.js');
const { token, status, statusType } = require('./config.json');
const keepAlive = require('./server')

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// unrestricted commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

// restricted commands
client.restricteds = new Collection();
const restrictedsPath = path.join(__dirname, 'restricted');
const restrictedFiles = fs.readdirSync(restrictedsPath).filter(file => file.endsWith('.js'));

for (const file of restrictedFiles) {
	const filePath = path.join(restrictedsPath, file);
	const restricted = require(filePath);
	client.restricteds.set(restricted.data.name, restricted);
}

// embed for if an error occurs
const errorEmbed = {
	title: 'An error occurred while executing this command.',
	color: 0xee2222,
	description: 'Please try again later.\n\nIf you keep seeing this error message, please DM <@!530418630102482945> with the details, I\'ll try to fix it :slight_smile:'
}

// embed for unauthorised people running restricted commands
const unauthorisedEmbed = {
	title: 'You do not have the appropriate permissions to run this command.',
	color: 0xee2222,
	description: 'If you believe this is an error and you should be able to run this command, please DM <@!530418630102482945> with the details, I\'ll try to fix it :slight_smile:'
}

// log when connected to discord
client.once('ready', () => { 
	console.log('connected to discord') 
	client.user.setActivity(status, { type: statusType })
	keepAlive()
});

// upon interaction recieved
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const restricted = client.restricteds.get(interaction.commandName);
	const command = client.commands.get(interaction.commandName);

	// if the command is a restricted command
	if (restricted) {
		if (interaction.member.roles.cache.has('715932243494830110')) {
			try{
				// run the command
				await restricted.execute(interaction);
				console.log('restricted command run successfully')

			// error stuff
			} catch (error) {
				console.error(error);
				try{
					await interaction.reply({ embeds: [errorEmbed] , ephemeralf: true });
				} catch (error) {
					console.error(error);
					try{
						await interaction.reply({ content: "Something went very wrong while running that command, that we couldn't even send the error embed! Please DM <@!530418630102482945> about this :slight_smile:" })
						console.log('failed error embed - check all above errors')
					} catch (error) {
						console.error(error);
						console.log('failed all error messages - something is going very wrong. check the above errors for more info')
					}
					console.log('an error occurred while running a restricted command -- see the error above for more info')
				}
			}
		} else {

			// unauthorised
			try{
				await interaction.reply({ embeds: [unauthorisedEmbed] , ephemeral: true})
			} catch (error) {
				console.error(error);
			}
		}

	} 
	
	// if it's a non-restricted command
	else if (command) {
		try {
			// run the command
			await command.execute(interaction);
			console.log('non-restricted command run successfully')

		// error stuff
		} catch (error) {
			console.error(error);
			try{
				await interaction.reply({ embeds: [errorEmbed] , ephemeral: true });
			} catch (error) {
				console.error(error);
				try{
					await interaction.reply({ content: "Something went very wrong while running that command, that we couldn't even send the error embed! Please DM <@!530418630102482945> about this :slight_smile:" })
					console.log('failed error embed - check all above errors')
				} catch (error) {
					console.error(error);
					console.log('failed all error messages - something is going very wrong. check the above errors for more info')
				}
				console.log('an error occurred while running a  command -- see the error above for more info')
			}
		}
	}

	else if (interaction.commandName === 'crash') {
		interaction.reply({ content: 'Crashing...', ephemeral: true });
		process.exit(0)
	}
	
	// if it's neither, return and do nothing
	else { return }
});

// login to discord
client.login(token);
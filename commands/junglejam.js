const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('junglejam')
	.setDescription('Get the date of the next Jungle Jam.'),
	async execute(interaction) {
		console.log('junglejam.js running...')
		
		debug = true

		fs = require('fs');

		const debugLog = (string, obj) => {
			if (debug == true) {
				console.log('DEBUG ---',string, obj)
			}
		}

		try {
			var tmp = fs.readFileSync('/home/garlicbread/code/Jungle-Bot-3/date.txt', 'utf8').split('@@@')
			var firstDate = new Date(tmp[0], tmp[1]-1, tmp[2])
			firstDate.setDate(firstDate.getDate()+1)
			debugLog('date from file (date.txt)', firstDate)
		} catch (err) {
			console.error(err);
		}

		const addWeeksToDate = (dateObj,numberOfWeeks) => {
			dateObj.setDate(dateObj.getDate()+ numberOfWeeks * 7);
			return dateObj;
		}

		var found = false

		tmp = new Date()
		tmp.setDate(tmp.getDate()+1)
		tmp = tmp.toISOString().split('T')[0].split('-')
		debugLog('current date as array (should be one day out)',tmp)
		const now = new Date(tmp[0], tmp[1]-1, tmp[2])
		// const now = new Date('2022', '9', '22')
		debugLog('current date as date object (should no longer be a day out)',now)

		while (found == false) {
			debugLog('start of descending loop',firstDate)
			if (firstDate < now) {
				found = true
			}
			else {
				firstDate = addWeeksToDate(firstDate, -4)
			}
			debugLog('end of descending loop',firstDate)
		}
		debugLog("result of loop (date of a jungle jam that's already happened)",firstDate)

		var nextDate = addWeeksToDate(firstDate, 4)

		debugLog('beginning value of ascending loop', nextDate)

		found = false

		while (found == false) {
			debugLog('start of ascending loop',nextDate)
			if (nextDate > now) {
				found = true
			}
			else {
				nextDate = addWeeksToDate(nextDate, 4)
			}
			debugLog('end of ascending loop',nextDate)
		}

		// console.log(firstdateCONST)
		debugLog('result of loop (date of next jungle jam)', nextDate)

		const finalObj = nextDate
		debugLog('date of next jungle jam as object (now in const)', finalObj)

		const nextT = finalObj.toISOString().split('T')[0].split('-')
		debugLog('current date as array (should be one day out)',tmp)

		// var date = new Date(nextT[0], nextT[1]-1, nextT[2])
		date = finalObj.setDate(finalObj.getDate()- 1);
		date = finalObj.toString()

		date = date.split(' ')
		date = (date[0]+' '+date[1]+' '+date[2]+' '+date[3])

		debugLog('date formatted', date)

		const finalDateReturn = (nowIN, foIN) => {
			if (nowIN == foIN) {
				return 'The Jungle Jam is today!'
			}
			else {
				return 'The next Jungle Jam is on '+date
			}
		}

		const finalDate = finalDateReturn(now, finalObj)

		debugLog('final date text (title of embed)', finalDate)

		date = new Date(nextT[0], nextT[1]-1, nextT[2])
		date.setDate(date.getDate()-1)

		date = date.toString()

		date = date.split(' ')
		date = (date[0]+' '+date[1]+' '+date[2])

		const dayAfterReturn = (nowIN, foIN) => {
			if (nowIN == foIN) {
				return 'Watch here: https://twitch.tv/beatdropmusicschool'
			}
			else {
				return 'Submit your song by '+date+' here: https://dropbox.com/request/GZb825ffS0HdDM5JepX3'
			}
		}

		const dayAfter = dayAfterReturn(now, finalObj)

		debugLog('final description of embed', dayAfter)

		const embed = {
			title: finalDate,
			color: 0x39f79e,
			description: dayAfter
		}
		console.log('successfully reached end of file, returning data')
		return interaction.reply({ embeds: [embed] });
	},
};
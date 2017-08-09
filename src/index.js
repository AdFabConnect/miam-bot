/**
 * @file Entry point of bot.
 * @author Arnaud Ligny <arnaud@ligny.org>
 */

const config = require('../config.json')[process.env.NODE_ENV || 'development']
const schedule = require('node-schedule')
const token = process.env.SLACK_BOT_TOKEN
const foodCheriUrl = 'https://www.foodcheri.com'
const messageReminder = 'Attention <!channel> : il ne vous reste plus que *quelques minutes* pour passer votre commande FoodChéri !\n' + foodCheriUrl
const messageHelp = 'Hello, je ne sers que de rappel journalier ! :smile:'

if (!token) {
  console.log('Error: Specify token in environment')
  process.exit(1)
}

let Botkit = require('botkit')

let controller = Botkit.slackbot({
  debug: config['DEBUG']
})

let bot = controller.spawn({
  token: token
}).startRTM(function (err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack!')
  } else {
    console.log('Bot is ready to work!')
  }
})

/**
 * Sends a message
 */
schedule.scheduleJob(config['SCHEDULE'], function () {
  bot.api.chat.postMessage({
    'token': token,
    'channel': config['CHANNEL'],
    'text': messageReminder,
    'as_user': true
  })
})

/**
 * Explain the user how to use the bot
 */
controller.hears(['aide', 'help'], 'direct_message,direct_mention,mention', function (bot, message) {
  bot.reply(message, messageHelp)
})

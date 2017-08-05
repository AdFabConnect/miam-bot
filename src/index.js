/**
 * @file Entry point of bot.
 * @author Arnaud Ligny <arnaud@ligny.org>
 */

const config = require('../config.json')[process.env.NODE_ENV || 'development']
const schedule = require('node-schedule')
const foodCheriUrl = 'https://www.foodcheri.com'
const token = process.env.SLACK_BOT_TOKEN

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
 * Sends a message every working day at 10:45
 */
schedule.scheduleJob('0 45 10 * * 1-5', function () {
  const text = '<!here> Attention il ne vous reste plus que *15 minutes* pour passer votre commande FoodChéri !\n' + foodCheriUrl
  bot.api.chat.postMessage({
    'token': token,
    'channel': config['CHANNEL'],
    'text': text,
    'as_user': true
  })
})

/**
 * Explain the user how to use the bot
 */
controller.hears(['aide', 'help'], 'direct_message,direct_mention,mention', function (bot, message) {
  bot.reply(message,
    'Hello, je ne sers que de rappel journalier ! :smile:\n'
  )
})

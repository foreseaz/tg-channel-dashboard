const Telegraf = require('telegraf')

const mongoose = require('mongoose'),
  Msg = require('../api/models/msgModel'),
  dashboard = require('../api/controllers/dashController')
// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TelegramChannelDB')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  console.log('started: ', ctx.from.id)
  ctx.reply('Hello there!')
  return true
})

bot.on(['message', 'channel_post'], (ctx) => {
  if (ctx.channelPost) {
    console.log(ctx.channelPost)
    dashboard.create_a_msg(ctx.channelPost)
    // ctx.reply(ctx.channelPost)
  }
})

bot.startPolling()

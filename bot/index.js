const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  console.log('started: ', ctx.from.id)
  ctx.reply('Hello there!')
  return true
})

bot.on(['message', 'channel_post'], (ctx) => {
  if (ctx.channelPost) {
    console.log(ctx.channelPost)
    // ctx.reply(ctx.channelPost)
  }
})

bot.startPolling()

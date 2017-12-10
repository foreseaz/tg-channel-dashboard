var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  Msg = require('./api/models/msgModel'),
  routes = require('./api/routes/dashRoutes'),
  initBot = require('./bot/index')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TelegramChannelDB')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

routes(app) // register routes

app.listen(port)
initBot()

console.log('TG Channel Dashboard API server started on: ' + port)

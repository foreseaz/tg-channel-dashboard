var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Msg = require('./api/models/msgModel'),
  bodyParser = require('body-parser'),
  routes = require('./api/routes/dashRoutes')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TelegramChannelDB')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app) // register routes

app.listen(port)

console.log('RESTful API server started on: ' + port)

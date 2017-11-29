const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MsgSchema = new Schema({
  chat: Schema.Types.Mixed,
  tags: [String],
  raw: Schema.Types.Mixed,
  type: String,
  created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Msg', MsgSchema)

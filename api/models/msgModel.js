const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MsgSchema = new Schema({
  created_date: {
    type: Date,
    default: Date.now
  },
  msg: Schema.Types.Mixed
})

module.exports = mongoose.model('Msg', MsgSchema)

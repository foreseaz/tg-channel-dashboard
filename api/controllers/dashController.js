const mongoose = require('mongoose'),
  Msg = mongoose.model('Msg')

const list_all_msgs = (req, res) => {
  Msg.find({}, (err, msgs) => {
    if (err) {
      res.send(err)
    }
    res.json(msgs)
  })
}

exports.list_all_msgs = list_all_msgs

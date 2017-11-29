const _ = require('lodash')

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

const create_a_msg = (data) => {
  console.log('---------------------------')
  console.log('-------------incoming post', data)
  const chat = _.get(data, 'chat', {})

  const text = _.get(data, 'text', '')
  const extractedTags = text.match(/\[(.*?)\]/g) // ['[Design]', '[Code]', ...]
  const tags = extractedTags && extractedTags.map(t => t.replace(/[^\w]/g, '').toLowerCase()) // ['design', 'code', ...]

  const new_msg = new Msg()
  new_msg.chat = chat
  new_msg.tags = tags
  new_msg.raw = data

  new_msg.save((err, msg) => {
    if (err) {
      console.log('save error', err)
    }
  })
}

exports.list_all_msgs = list_all_msgs
exports.create_a_msg = create_a_msg

const _ = require('lodash')
const ctlHelper = require('./helper')

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
  const tags = ctlHelper.extraTags(text)

  const new_msg = new Msg()
  new_msg.tags = tags
  new_msg.raw = data
  new_msg.message_id = data.message_id
  new_msg.username = chat.username
  new_msg.chat_id = chat.id

  new_msg.save((e, msg) => {
    if (e) {
      throw(e)
    }
  })
}

const update_a_msg = ({ edited_channel_post: data }) => {
  console.log('---------------------------')
  console.log('-------------update post', data)
  Msg.findOne({ message_id: data.message_id }, (err, msg) => {
    console.log('found', msg)
    const chat = _.get(data, 'chat', {})
    const text = _.get(data, 'text', '')

    msg.tags = ctlHelper.extraTags(text)
    msg.raw = data
    msg.username = chat.username
    msg.chat_id = chat.id

    msg.save((e, msg) => {
      if (e) {
        throw(e)
      }
    })
  })
}

exports.list_all_msgs = list_all_msgs
exports.create_a_msg = create_a_msg
exports.update_a_msg = update_a_msg

import React from 'react'
import Autolinker from 'autolinker'

import Card from '~/components/Card'
import styles from './Msgs.css'

const getCleanText = (text) => {
  if (!text) return ''
  let withoutTags = text.replace(/\[(.*?)\]/g, '')

  return Autolinker.link(withoutTags)
}

const Msgs = ({ msgs }) => (
  <div className={styles.wrapper}>
    {msgs && msgs.map((msg, idx) => (
      <Card
        key={idx}
        createdDate={msg.created_date}
        text={getCleanText(msg.raw.text)}
        tags={msg.tags}
      />
    ))}
  </div>
)

export default Msgs

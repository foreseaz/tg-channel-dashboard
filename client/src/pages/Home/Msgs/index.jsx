import React from 'react'

import Card from '~/components/Card'
import styles from './Msgs.css'

const Msgs = ({ msgs }) => (
  <div className={styles.wrapper}>
    {msgs && msgs.map((msg, idx) => (
      <div key={idx} className={styles.card}>
        <Card text={msg.raw.text} tags={msg.tags} />
      </div>
    ))}
  </div>
)

export default Msgs

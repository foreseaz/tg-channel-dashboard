import React from 'react'

import styles from './Msgs.css'

const Msgs = ({ msgs }) => (
  <div className={styles.wrapper}>
    {msgs && msgs.map((msg, idx) => (
      <div key={idx} className={styles.card}>
        <div>tags: {msg.tags}</div>
        <div>{msg.raw.text}</div>
      </div>
    ))}
  </div>
)

export default Msgs

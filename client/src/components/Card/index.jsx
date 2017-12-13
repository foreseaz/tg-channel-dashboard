import React from 'react'

import styles from './Card.css'

const Card = ({ text, tags }) => (
  <div className={styles.card}>
    <div className={styles.main}>
      {text}
    </div>
    <ul className={styles.tags}>
      {tags && tags.map((tag, idx) => (
        <li key={idx}><a href='/'>{tag}</a></li>
      ))}
    </ul>
  </div>
)

export default Card

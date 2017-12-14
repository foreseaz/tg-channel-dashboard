import React from 'react'

import _format from 'date-fns/format'
import styles from './Card.css'

const Card = ({ createdDate, img, text, tags }) => (
  <div className={styles.card}>
    <div className={styles.breadcrumbs}>
      • <a href='/'>{_format(new Date(createdDate), 'YYYY-MM-DD')}</a> >
    </div>
    {
      img &&
      <div className={styles.leadImg}>
        <img src={img} alt='lead-img' />
      </div>
    }
    <div className={styles.main} dangerouslySetInnerHTML={{__html: text}} />
    <ul className={styles.tags}>
      {tags && tags.map((tag, idx) => (
        <li key={idx}><a href='/'>{tag}</a></li>
      ))}
    </ul>
  </div>
)

export default Card

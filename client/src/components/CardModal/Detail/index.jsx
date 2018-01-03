import React from 'react'
import ReactMarkdown from 'react-markdown'
import _isEmpty from 'lodash/isEmpty'
import _get from 'lodash/get'

import { getCleanText, formatDate } from '~/utils'
import Tag from '~/components/Tag'
import styles from './Detail.css'

const Detail = ({ msg }) => {
  const imgSrc = _get(msg, 'preview.mercury.lead_image_url')
  const markContent = _get(msg, 'preview.mark.text')
  const onTagClick = () => ({})

  return (
    _isEmpty(msg)
      ? null
      : <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.msg}>
            { imgSrc && <img className={styles.leadImg} src={imgSrc} alt='lead-img' /> }
            <div className={styles.main} dangerouslySetInnerHTML={{__html: getCleanText(msg.raw.text)}} />
          </div>
          <ul>{msg.tags.map(tag => <Tag text={tag} onTagClick={onTagClick} />)}</ul>
        </div>
        {
          markContent &&
          <div className={styles.right}>
            <h3><a href={msg.preview.mark.url} alt='title'>{msg.preview.mark.title}</a></h3>
            <div>Author: {msg.preview.mark.author}</div>
            <div>Date: {formatDate(msg.preview.mark.date)}</div>
            {
              msg.preview.mark.keywords &&
              <div>{msg.preview.mark.keywords}</div>
            }
            <hr />
            <ReactMarkdown source={markContent} className={styles.mark} />
          </div>
        }
      </div>
  )
}

export default Detail

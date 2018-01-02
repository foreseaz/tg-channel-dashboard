import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { getCleanText } from '~/utils'
import styles from './Detail.css'

const Detail = ({ msg }) => (
  _isEmpty(msg)
    ? null
    : <div className={styles.main} dangerouslySetInnerHTML={{__html: getCleanText(msg.raw.text)}} />
)

export default Detail

import React from 'react'
import classnames from 'classnames/bind'

import styles from './ToggleButton.css'
const cx = classnames.bind(styles)

const ToggleButton = ({ showClose }) => (
  <label className={cx('toggle', { showClose })}>
    <b className={styles.bar} />
    <b className={styles.bar} />
    <b className={styles.bar} />
    <b className={styles.bar} />
  </label>
)

export default ToggleButton

import * as React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './Menu.css'

const Menu = ({ list }) => (
  <div className={styles.menu}>
    <ul>
      {
        list.map((link, idx) => (
          <li key={idx}>
            <Link className={styles.Link} to={link.to}>
              {link.label}
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
)

Menu.propTypes = {
  list: PropTypes.array.isRequired
}

export default Menu

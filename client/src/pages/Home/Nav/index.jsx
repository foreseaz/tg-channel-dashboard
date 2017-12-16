import React from 'react'
import classnames from 'classnames/bind'
import ClickOutside from 'react-click-outside'
import _union from 'lodash/union'

import ToggleButton from '~/components/ToggleButton'

import styles from './Nav.css'
const cx = classnames.bind(styles)

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navOpened: false
    }

    this.toggleNav = () => {
      this.setState({ navOpened: !this.state.navOpened })
    }
    this.closeNav = () => {
      this.setState({ navOpened: false })
    }
    this.getAllTypes = () => {
      const { msgs } = this.props
      let allTypes = []
      msgs.forEach(msg => {
        allTypes = _union(allTypes, msg.tags)
      })
      console.log(allTypes)
      return allTypes
    }
  }

  render () {
    return (
      <ClickOutside onClickOutside={this.closeNav}>
        <div className={cx('nav', { open: this.state.navOpened })}>
          <div className={styles.strip} onClick={this.toggleNav}>
            <ToggleButton showClose={this.state.navOpened} />
            <span className={styles.slogan}>
              <strong>T.C.:</strong> A personal thoughts catcher based on Telegram Channel.
            </span>
          </div>
          <div className={styles.bg}>
            <section>
              <h4>Filter By Type</h4>
              <ul>
                {
                  this.getAllTypes().map((type, idx) => (
                    <li key={idx} className={styles.type}>
                      <a className={styles.tag}>{type}</a>
                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </div>
      </ClickOutside>
    )
  }
}

export default Nav

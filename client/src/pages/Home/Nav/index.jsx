import React from 'react'
import classnames from 'classnames/bind'
import ClickOutside from 'react-click-outside'

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
            tags & extra content
          </div>
        </div>
      </ClickOutside>
    )
  }
}

export default Nav

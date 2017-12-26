import React from 'react'
import classnames from 'classnames/bind'
import ClickOutside from 'react-click-outside'
import _union from 'lodash/union'

import { connect } from 'react-redux'
import { addTag } from '~/actions/Dashboard'

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
      return allTypes
    }
    this.tagClickHandler = (tag) => {
      console.log('----', tag)
      this.props.addTag(tag)
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
                  this.getAllTypes().map((tag, idx) => (
                    <li key={idx} className={styles.type} onClick={() => this.tagClickHandler(tag)}>
                      <a className={cx('tag', 'blue')}>{tag}</a>
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

const mapStateToProps = state => ({
  filteredMsgs: state.dashboard.msgs
})
const mapDispatchToProps = {
  addTag
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

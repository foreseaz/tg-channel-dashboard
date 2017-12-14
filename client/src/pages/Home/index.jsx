import * as React from 'react'
import _orderBy from 'lodash/orderBy'

import { connect } from 'react-redux'
import { getMsgs } from '~/actions/Dashboard'

// import t from '~/utils/locales'
import Msgs from './Msgs'
import Side from './Side'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  componentDidMount () {
    this.props.getMsgs()
  }

  render () {
    const { msgs } = this.props
    return (
      <main className={styles.container}>
        {Msgs({ msgs })}
        {Side({ msgs })}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  // msgs: state.dashboard.msgs,
  msgs: _orderBy(state.dashboard.msgs, ['created_date'], ['desc'])
})
const mapDispatchToProps = {
  getMsgs
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

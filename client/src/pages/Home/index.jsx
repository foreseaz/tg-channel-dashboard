import * as React from 'react'

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
    const { dashboard: { msgs } } = this.props
    return (
      <main className={styles.container}>
        {Msgs({ msgs })}
        {Side({ msgs })}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
})
const mapDispatchToProps = {
  getMsgs
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

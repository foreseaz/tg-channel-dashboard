import * as React from 'react'

import { connect } from 'react-redux'
import { getMsgs } from '~/actions/Dashboard'

// import t from '~/utils/locales'

import Page from '~/components/Page'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  componentDidMount () {
    this.props.getMsgs()
  }

  render () {
    const { dashboard } = this.props
    return (
      <Page>
        <Page.Main>
          {dashboard.msgs && dashboard.msgs.map((msg, idx) => (
            <div key={idx} className={styles.card}>
              <div>tags: {msg.tags}</div>
              <div>{msg.raw.text}</div>
            </div>
          ))}
        </Page.Main>
        <Page.Side>
        </Page.Side>
      </Page>
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

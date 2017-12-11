import * as React from 'react'
import Logo from '~/assets/icons/logo.svg'

import { connect } from 'react-redux'
import * as UserAction from '~/actions/User'

import t from '~/utils/locales'

import Page from '~/components/Page'
import LocaleToggler from '~/components/LocaleToggler'

import styles from './Home.css'
import '~/styles/global/global.css'

class Home extends React.Component {
  componentDidMount () {
    this.props.getUser('foreseaz')
  }

  render () {
    return (
      <Page>
        <Page.Row>
          <div className={styles.container}>
            <Logo />
            <h2>{t('title')}</h2>
          </div>
        </Page.Row>
        <Page.Row>
          <LocaleToggler />
        </Page.Row>
        <Page.Main>
          <p className='global-without-hash'>This is text with global css</p>
          <pre>
            {JSON.stringify(this.props.user, null, 2)}
          </pre>
        </Page.Main>
        <Page.Side>
          <p>
            Lorem ipsum dolor sit amet, et graece latine vix, eum ut inermis propriae consulatu, at qui summo iisque reformidans. Nam ex impedit consulatu. Nam integre iuvaret argumentum at, in natum adipisci usu. No sed enim iriure petentium. Ei per tation detraxit, eum verterem vituperatoribus id, has id laudem appareat.
          </p>
          <p>
            Nulla graecis cu usu, populo tibique ne his. Accusamus sadipscing ad vel. Regione sapientem ut mel. Nec tation dissentiet in, laudem democritum scripserit no his, indoctum liberavisse intellegebat ut duo. Ut quo labitur incorrupte, eu sit tantas invenire scripserit, eu mea idque omnes discere.
          </p>
          <p>
            Pertinax similique sit ea, eu vix prima nobis scripta. Ei mea elitr aperiri, an dicat reformidans pri. Nibh adhuc id mea. Est at indoctum assentior referrentur, inermis persecuti expetendis ex usu. Ad dicam officiis conclusionemque vix. Alia nominavi at pri, eum ut quem concludaturque.
          </p>
        </Page.Side>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = {
  ...UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

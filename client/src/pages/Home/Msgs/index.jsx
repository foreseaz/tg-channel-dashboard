import React from 'react'
import Autolinker from 'autolinker'
import StackGrid from 'react-stack-grid'
import _get from 'lodash/get'

import Card from '~/components/Card'
import Spinner from '~/assets/icons/spinner.svg'
import styles from './Msgs.css'

const getCleanText = (text) => {
  if (!text) return ''
  let withoutTags = text.replace(/\[(.*?)\]/g, '')

  return Autolinker.link(withoutTags)
}

const Msgs = ({ msgs }) => (
  <div className={styles.wrapper}>
    <div>{msgs.length === 0 && <Spinner />}</div>
    <StackGrid
      columnWidth={340}
      gutterWidth={40}
      gutterHeight={20}
    >
      {msgs && msgs.map((msg, idx) => (
        <Card
          key={idx}
          createdDate={msg.created_date}
          text={getCleanText(msg.raw.text)}
          img={_get(msg, ['preview', 'mercury', 'lead_image_url'], '')}
          tags={msg.tags}
        />
      ))}
    </StackGrid>
  </div>
)

export default Msgs

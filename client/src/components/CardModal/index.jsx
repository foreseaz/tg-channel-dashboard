import React from 'react'
import { connect } from 'react-redux'

import { openModal, closeModal } from '~/actions/Dashboard'
import { currentMsgSelector } from './_selector.js'

import CloseIcon from '~/assets/icons/close.svg'
import Modal from '~/components/Modal'
import Detail from './Detail'

import styles from './CardModal.css'

class CardModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log('currentMsg', this.props.currentMsg)
    const { currentMsg } = this.props

    return (
      <Modal
        modalIsOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
      >
        <div className={styles.container}>
          <span
            className={styles.close}
            onClick={this.props.closeModal}
          >
            <CloseIcon />
          </span>
          <Detail msg={currentMsg} />
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  currentMsg: currentMsgSelector(state),
  isModalOpen: state.dashboard.isModalOpen,
  currentMsgId: state.dashboard.currentMsgId
})
const mapDispatchToProps = {
  openModal,
  closeModal
}
const Connect = connect(mapStateToProps, mapDispatchToProps)(CardModal)
export default Connect

import React from 'react'
import { connect } from 'react-redux'

import { openModal, closeModal } from '~/actions/Dashboard'

import CloseIcon from '~/assets/icons/close.svg'
import Modal from '~/components/Modal'

import styles from './CardModal.css'

class CardModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Modal
        modalIsOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
      >
        <div className={styles.container}>
          <span
            className={styles.close}
            onClick={this.props.closeLoginModal}
          >
            <CloseIcon />
          </span>
          fooooooo
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  isModalOpen: state.dashboard.isModalOpen
})
const mapDispatchToProps = {
  openModal,
  closeModal
}
const Connect = connect(mapStateToProps, mapDispatchToProps)(CardModal)
export default Connect

import { showLoading, hideLoading } from 'react-redux-loading-bar'

import * as ACTION_TYPES from './types'
import Dashboard from '~/utils/api/Dashboard'

export const getMsgs = () => (dispatch) => {
  dispatch(showLoading())
  Dashboard.Msgs.get()
    .then(({ data }) => {
      dispatch(hideLoading())
      dispatch({
        type: ACTION_TYPES.GET_MSGS,
        data
      })
    })
}

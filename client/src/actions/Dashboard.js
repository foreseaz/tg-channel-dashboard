import * as ACTION_TYPES from './types'
import Dashboard from '~/utils/api/Dashboard'

export const getMsgs = () => (dispatch) => {
  Dashboard.Msgs.get()
    .then(({ data }) => {
      dispatch({
        type: ACTION_TYPES.GET_MSGS,
        data
      })
    })
}

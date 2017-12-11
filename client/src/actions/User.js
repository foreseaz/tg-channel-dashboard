import * as ACTION_TYPES from './types'
import User from '~/utils/api/User'

export const getUser = (id) => (dispatch) => {
  User.Info.get(id)
    .then(({ data }) => {
      dispatch({
        type: ACTION_TYPES.GET_USER,
        data
      })
    })
}

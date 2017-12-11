import * as ACTION_TYPES from '~/actions/types'

const initialState = {
  userInfo: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER:
      return {
        ...state,
        userInfo: action.data
      }
    default:
      return state
  }
}

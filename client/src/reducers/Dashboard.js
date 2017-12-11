import * as ACTION_TYPES from '~/actions/types'

const initialState = {
  msgs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MSGS:
      return {
        ...state,
        msgs: action.data
      }
    default:
      return state
  }
}

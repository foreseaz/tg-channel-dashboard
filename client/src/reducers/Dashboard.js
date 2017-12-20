import * as ACTION_TYPES from '~/actions/types'

const initialState = {
  isFetching: false,
  msgs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MSGS:
      return {
        ...state,
        msgs: action.data
      }
    case ACTION_TYPES.FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case ACTION_TYPES.FETCHING_END:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

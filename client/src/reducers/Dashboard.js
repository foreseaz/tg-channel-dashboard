import * as ACTION_TYPES from '~/actions/types'
import _uniq from 'lodash/uniq'

const initialState = {
  isFetching: false,
  msgs: [],
  tags: [],
  filteredMsgs: []
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
    case ACTION_TYPES.ADD_TAG:
      return {
        ...state,
        tags: _uniq(state.tags.concat(action.tag))
      }
    default:
      return state
  }
}

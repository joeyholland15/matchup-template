import { FETCH_UPCOMING_MATCHUPS } from '../actions/types'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_UPCOMING_MATCHUPS:
      return action.payload.data
    default:
      return state
  }
}
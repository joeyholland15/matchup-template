import { FETCH_TEAM_RANKINGS } from '../actions/types'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TEAM_RANKINGS:
      return action.payload.data
    default:
      return state
  }
}
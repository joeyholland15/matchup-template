import { SET_MATCHUP } from '../actions/types'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_MATCHUP:
      return action.teams
    default:
      return state
  }
}
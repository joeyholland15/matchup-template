import { SET_TEAM_FILTER } from '../actions/types'

export default function(state = 'Oregon', action) {
  switch(action.type) {
    case SET_TEAM_FILTER:
      return action.team
    default: 
      return state
  }
}
import { FETCH_TEAM_ROSTER } from '../actions/types'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_TEAM_ROSTER:
      return action.payload.data
    default: 
      return state
  }
}
import { SET_PLAYER_FILTER } from '../actions/types'

export default function(state = 'Marcus Mariota', action) {
  switch(action.type) {
    case SET_PLAYER_FILTER:
      return action.player
    default: 
      return state
  }
}
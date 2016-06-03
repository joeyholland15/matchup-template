import { SET_CONFERENCE_FILTER } from '../actions/types'

export default function(state = 'DASH', action) {
  switch(action.type) {
    case SET_CONFERENCE_FILTER:
      return action.conference
    default: 
      return state
  }
}


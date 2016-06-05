import { combineReducers } from 'redux';
import rankings from './ranking_reducer'
import activeConference from './conference_reducer'
import activeTeam from './team_reducer'
import teamRoster from './roster_reducer'

const rootReducer = combineReducers({
  rankings,
  activeConference,
  activeTeam,
  teamRoster
});

export default rootReducer;
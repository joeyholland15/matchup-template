import { combineReducers } from 'redux';
import rankings from './ranking_reducer'
import upcomingMatchups from './matchup_reducer'
import activeConference from './conference_reducer'
import activeTeam from './team_reducer'
import activePlayer from './player_reducer'
import teamRoster from './roster_reducer'
import matchup from './set_matchup_reducer'

const rootReducer = combineReducers({
  rankings,
  activeConference,
  activeTeam,
  activePlayer,
  teamRoster,
  upcomingMatchups,
  matchup
});

export default rootReducer;
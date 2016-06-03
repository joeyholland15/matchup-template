import { combineReducers } from 'redux';
import rankings from './team_reducer'
import activeConference from './conference_reducer'

const rootReducer = combineReducers({
  rankings,
  activeConference
});

export default rootReducer;
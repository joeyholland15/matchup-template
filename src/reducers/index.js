import { combineReducers } from 'redux';
import rankings from './team_reducer'
import conferences from './conference_reducer'

const rootReducer = combineReducers({
  rankings,
  conferences
});

export default rootReducer;
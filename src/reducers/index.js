import { combineReducers } from 'redux';
import rankings from './team_reducer'

const rootReducer = combineReducers({
  rankings
});

export default rootReducer;
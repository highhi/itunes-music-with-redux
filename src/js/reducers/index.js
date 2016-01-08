import { combineReducers } from 'redux';
import getMusic from './getMusic';
import getMovie from './getMovie';

const rootReducer = combineReducers({
  getMusic,
  getMovie
});

export default rootReducer;

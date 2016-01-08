import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk, logger()
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

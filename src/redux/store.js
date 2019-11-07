import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import combineReducers from './root-reducer';
const middlewares = [logger];

const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;

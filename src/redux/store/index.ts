import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {createRootReducer} from '../reducers';
import initialState from './initialState';
import middlewares from './middlewares';

export default createStore(
  createRootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

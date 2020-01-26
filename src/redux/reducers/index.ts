import {combineReducers} from 'redux';

import me from './me';

export const createRootReducer = () =>
  combineReducers({
    me,
  });

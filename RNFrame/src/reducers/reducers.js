import { combineReducers } from 'redux';
import common from './common';
import homeReducer from './homeReducer';

const app = combineReducers({
  common,
  home: homeReducer
})

export default app;
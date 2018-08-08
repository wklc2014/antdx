import { combineReducers } from 'redux';

import _example from './_example.js'

//合并 reducer
const rootRedux = combineReducers({
  _example,
})

export default rootRedux;

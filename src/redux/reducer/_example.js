import actionType from '../actionType/index.js';
import _example from '../initstate/_example.js';

export default function(state = _example, action) {
  const { type, payload } = action;
  switch (type) {
    case actionType.UPDATE:
      return {...state, ...payload};
    default:
      return state;
  }
}

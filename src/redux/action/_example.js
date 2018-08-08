import actionType from '../actionType/index.js';

export function onUpdate({ id, value }) {
  return {
    type: actionType.UPDATE,
    payload: { [id]: value },
  }
}


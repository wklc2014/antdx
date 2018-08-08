import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import env from '../../utils/env.js';

const middleware = [thunk];

if (env === 'dev') {
  middleware.push(createLogger({
    collapsed: true,
  }))
}

export default applyMiddleware(...middleware);

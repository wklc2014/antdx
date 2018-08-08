import { createStore } from 'redux';

import rootRedux from '../reducer/index.js';
import middleware from '../middleware/index.js';

const store = createStore(rootRedux, middleware);

export default store;

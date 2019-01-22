import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from '../pages/App/App.jsx';
import '../common/less/index.less';
import env from '../common/js/env.js';
import '../common/js/global.js';

if (env === 'development') {
  require('../mocks/index.js');
}

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);

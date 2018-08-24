import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../About/IndexContainer.jsx';
import Help from '../Help/Help.jsx';
import Nav from './Nav.jsx';

import NoMatch from './NoMatch.jsx';
import AuthRoute from './AuthRoute.jsx';

const App = (props) => {

  return (
    <div>
      <Nav />
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

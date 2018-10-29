import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Demo from '../Demo/IndexContainer.jsx';
import Api from '../Api/Index.jsx';
import Nav from './Nav.jsx';

import NoMatch from './NoMatch.jsx';
import AuthRoute from './AuthRoute.jsx';

const App = (props) => {

  return (
    <div>
      <Nav />
      <div>
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/api" component={Api} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

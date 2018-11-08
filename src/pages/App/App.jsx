import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from '../../lib/MainLayout/MainLayout.jsx';
import Demo from '../Demo/IndexContainer.jsx';
import Api from '../Api/Index.jsx';
import Home from '../Home/HomeContainer.jsx';

import WarterMark from '../../lib/WarterMark/WarterMark.jsx';

import AuthRoute from './AuthRoute.jsx';

import navConfigs from '../../lib/MainLayout/exampleConfig/exampleConfig.js';

const App = (props) => {

  const MainLayoutProps = {
    configs: navConfigs,
  }

  return (
    <MainLayout {...MainLayoutProps}>
      <WarterMark text={props.warterMarkText} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/demo" component={Demo} />
        <Route path="/api" component={Api} />
        <Route path="/a" render={() => <h1>Page A</h1>} />
        <Route path="/b" render={() => <h1>Page B</h1>} />
        <Route path="/c" render={() => <h1>Page C</h1>} />
        <Route render={() => <h1>NoMatch</h1>} />
      </Switch>
    </MainLayout>
  );
}

export default App;

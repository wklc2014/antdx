/**
 * 权限路由
 */
import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, auth, to, ...rest }) => {
  const render = (props) => {
    if (auth) {
      return <Component {...props} />;
    }
    return <Redirect to={to} />;
  }

  return <Route {...rest} render={render} />;
}

export default AuthRoute;

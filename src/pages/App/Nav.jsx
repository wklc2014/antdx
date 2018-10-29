import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <ul>
      <li>
        <Link to="/demo">Demo</Link>
      </li>
      <li>
        <Link to="/api">Api</Link>
      </li>
      <li>
        <Link to="/404">404</Link>
      </li>
    </ul>
  )
}

Nav.propTypes = {

}

Nav.defaultProps = {

}

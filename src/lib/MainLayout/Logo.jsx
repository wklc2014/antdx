/**
 * logo
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.less';

const Logo = (props) => {

  const { title } = props;

  return (
    <section className={styles.logoWraper}>
      <Link to="/" className={styles.logo}>{title}</Link>
    </section>
  )

}

Logo.propTypes = {
  title: propTypes.string,
}

Logo.defaultProps = {
  title: 'Logo',
}

export default Logo;

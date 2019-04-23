/**
 * 自定义链接内容
 */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { withRouter, router } from 'react-router';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const MyNavLink = (props) => {
  const { icon, className, title, path, location = {} } = props;
    const { pathname } = location;

  const LinkProps = {
    to: path,
    replace: path === pathname,
  };

  return (
    <Link {...LinkProps}>
      { icon && <Icon type={icon} /> }
      { className && <i className={`anticon iconfont ${className}`} /> }
      <span>{title}</span>
    </Link>
  )
}

MyNavLink.propTypes = {
  title: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
  icon: propTypes.string,
  className: propTypes.string,
}

export default withRouter(MyNavLink);

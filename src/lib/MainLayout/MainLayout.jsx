/**
 * 主体布局
 * 包括左侧导航菜单和右侧内容区域
 */
import React, { Fragment, Component } from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Layout, Menu, Icon } from 'antd';

import Logo from './Logo.jsx';
import MyNavLink from './MyNavLink.jsx';

import styles from './styles.less';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class MainLayout extends Component {

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  getMenuTitle = (title) => {
    if (is.object(title)) {
      const { icon, name, className } = title;
      return (
        <Fragment>
          { icon && <Icon type={icon} /> }
          { className && <i className={`anticon iconfont ${className}`} /> }
          <span>{name}</span>
        </Fragment>
      );
    }
    return title;
  }

  getSubMenuChildren = (subMenus) => {
    const subMenuChildren = subMenus.map((s, j) => {
      return (
        <Item key={s.path}>
          <MyNavLink {...s} />
        </Item>
      )
    })
    return subMenuChildren;
  }

  getMenuChildren = () => {
    const { configs } = this.props;
    const menuChildren = configs.filter((c) => !c.hide).map((c, i) => {
      const { title, subMenus } = c;
      const key = `${i}`;
      const subTitle = this.getMenuTitle(title);

      if (subMenus) {
        return (
          <SubMenu key={subMenus[0].path} title={subTitle}>
            {this.getSubMenuChildren(subMenus)}
          </SubMenu>
        );
      }

      return (
        <Item key={c.path}>
          <MyNavLink {...c} />
        </Item>
      );
    });

    return menuChildren;
  }

  getSelectedNav = () => {
    const { location = {}, configs } = this.props;
    const { pathname } = location;
    const selectedKeys = [];
    configs.filter((c) => !c.hide).some((c) => {
      if (c.subMenus) {
        return c.subMenus.some(s => {
          if (s.path === pathname) {
            selectedKeys.push(s.path);
          }
          return s.path === pathname;
        })
      }
      if (pathname === c.path) {
        selectedKeys.push(c.path);
      }
      return pathname === c.path;
    })
    return selectedKeys;
  }

  render() {
    const { collapsed } = this.state;
    const { className, sideMenus } = this.props;

    const LogoProps = {
      title: collapsed ? 'HForm' : 'learn-hform',
    }

    const MenuProps = {
      theme: 'dark',
      mode: 'vertical',
      selectedKeys: this.getSelectedNav(),
    }

    const SideProps = {
      collapsible: true,
      collapsed,
      onCollapse: this.handleCollapse,
    }

    return (
      <section className={className}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider {...SideProps}>
            <Logo {...LogoProps} />
            <Menu {...MenuProps}>
              {this.getMenuChildren()}
            </Menu>
          </Sider>
          <Layout>
            <div className={styles.mainlayoutWraper}>
              {this.props.children}
            </div>
          </Layout>
        </Layout>
      </section>
    );
  }
}

MainLayout.propTypes = {
  className: propTypes.string,
  configs: propTypes.array.isRequired,
};

export default withRouter(MainLayout);

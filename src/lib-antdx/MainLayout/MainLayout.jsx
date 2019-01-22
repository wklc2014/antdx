/**
 * 带侧边栏导航的布局组件
 */
import React, { Fragment, Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Menu, Icon } from 'antd';

import MyNavLink from './MyNavLink.jsx';

import styles from './styles.less';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class MainLayout extends Component {

  static defaultProps = {
    configs: [],
    menuProps: {},
    siderProps: {},
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

  renderMenuTitle = (title) => {
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

  renderSubMenuChildren = (subMenus) => {
    const subMenuChildren = subMenus.map((s, j) => {
      return (
        <Item key={s.path}>
          <MyNavLink {...s} />
        </Item>
      )
    })
    return subMenuChildren;
  }

  renderMenuChildren = () => {
    const { configs } = this.props;
    return configs.filter(menu => !menu.hide).map((menu, i) => {
      const key = `${i}`;
      const { title, subMenus } = menu;
      const subTitle = this.renderMenuTitle(title);

      if (subMenus) {
        return (
          <SubMenu key={subMenus[0].path} title={subTitle}>
            {this.renderSubMenuChildren(subMenus)}
          </SubMenu>
        );
      }

      return (
        <Item key={menu.path}>
          <MyNavLink {...menu} />
        </Item>
      );
    });
  }

  getMenuSelectedKeys = () => {
    const { location = {}, configs } = this.props;
    const { pathname } = location;
    const selectedKeys = [];

    configs.filter(menu => !menu.hide).some(menu => {
      if (menu.subMenus) {
        return menu.subMenus.some(subMenu => {
          if (subMenu.path === pathname) {
            selectedKeys.push(subMenu.path);
          }
          return subMenu.path === pathname;
        })
      }
      if (pathname === menu.path) {
        selectedKeys.push(menu.path);
      }
      return pathname === menu.path;
    })

    return selectedKeys;
  }

  render() {
    const { collapsed } = this.state;
    const { menuProps, sideMenus, siderProps } = this.props;

    const SideProps = {
      collapsible: true,
      ...siderProps,
      collapsed,
      onCollapse: this.handleCollapse,
    };

    const MenuProps = {
      theme: 'dark',
      mode: 'vertical',
      ...menuProps,
      selectedKeys: this.getMenuSelectedKeys(),
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider {...SideProps}>
          <div className={styles.box}>
            <Link to="/" className={styles.logo}>antdx</Link>
          </div>
          <Menu {...MenuProps}>
            {this.renderMenuChildren()}
          </Menu>
        </Sider>
        <Layout>
          <div className={styles.wraper}>
            {this.props.children}
          </div>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  /**
   * 导航配置
   * @type {Array}
   */
  configs: propTypes.array,

  /**
   * antd Menu 组件配置
   * @type {Object}
   */
  menuProps: propTypes.object,


  /**
   * antd Sider 组件配置
   * @type {Object}
   */
  siderProps: propTypes.object,
};

export default withRouter(MainLayout);

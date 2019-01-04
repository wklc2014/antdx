/**
 * 侧边导航配置
 */

export default [
  {
    icon: 'home',
    title: '主页',
    path: '/',
  },
  {
    title: {
      name: '示例',
      icon: 'user',
    },
    subMenus: [
      { icon: 'user', title: 'HForm', path: '/example/hform' },
      { icon: 'user', title: '二级页面 B', path: '/b' },
      { icon: 'user', title: '二级页面 C', path: '/c' },
    ]
  },
  {
    icon: 'phone',
    title: '错误页面',
    path: '/error',
  },
];

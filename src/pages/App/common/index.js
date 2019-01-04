/**
 * 侧边导航配置
 */

export default [
  {
    icon: 'home',
    title: 'Home',
    path: '/',
  },
  {
    title: {
      name: 'Example',
      icon: 'user',
    },
    subMenus: [
      { icon: 'user', title: 'HForm', path: '/example/hform' },
      { icon: 'user', title: 'HPicture', path: '/example/hpicture' },
      { icon: 'user', title: 'WarterMark', path: '/example/wartermark' },
      { icon: 'user', title: 'HTagGroup', path: '/example/taggroup' },
    ]
  },
  {
    icon: 'user',
    title: 'Api',
    path: '/api',
  },
  {
    icon: 'pushpin',
    title: 'Help',
    path: '/help',
  },
  {
    icon: 'phone',
    title: 'Error',
    path: '/error',
  },
];

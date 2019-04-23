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
      icon: 'export',
    },
    subMenus: [
      { icon: 'lock', title: 'HForm', path: '/example/hform' },
      { icon: 'code', title: 'HPicture', path: '/example/hpicture' },
      { icon: 'file', title: 'WarterMark', path: '/example/wartermark' },
      { icon: 'tag', title: 'HTagGroup', path: '/example/taggroup' },
    ]
  },
  {
    icon: 'fund',
    title: 'Api',
    path: '/api',
  },
];

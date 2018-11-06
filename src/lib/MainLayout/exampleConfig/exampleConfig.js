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
    icon: 'login',
    title: '示例文档',
    path: '/demo',
  },
  {
    icon: 'book',
    title: '接口文档',
    path: '/api',
  },
  {
    title: {
      name: '理赔审核',
      icon: 'user',
    },
    subMenus: [
      { icon: 'user', title: '自营审核', path: '/a' },
      { icon: 'user', title: '子工单审核', path: '/b' },
      { icon: 'user', title: '质检审核', path: '/c' },
    ]
  },
  {
    icon: 'copy',
    title: '错误页面',
    path: '/error',
  },
];

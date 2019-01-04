import Mock from 'mockjs';

Mock.mock('/user', 'post', (url, type, body) => {
  return {
    success: true,
    data: [
      { name: '成都' },
      { name: '绵阳' },
      { name: '北京' },
      { name: '上海' },
      { name: '合肥' },
      { name: '深圳' },
      { name: '呼和浩特' },
    ]
  }
})
import Mock from 'mockjs';

Mock.mock('/user', 'post', (url, type, body) => {
  return {
    success: true,
    data: [
      { value: 1, label: '成都' },
      { value: 2, label: '绵阳' },
      { value: 3, label: '北京' },
      { value: 4, label: '上海' },
      { value: 5, label: '合肥' },
      { value: 6, label: '深圳' },
      { value: 7, label: '呼和浩特' },
    ]
  }
})
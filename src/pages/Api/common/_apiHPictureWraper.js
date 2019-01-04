export const dataSource = [
  {
    id: 1,
    params: 'source',
    description: '图片数组',
    type: 'Array',
    defaultValue: '[ ]',
  },
  {
    id: 2,
    params: 'index',
    type: 'Number',
    description: '当前显示图片序号',
    defaultValue: '0',
  },
  {
    id: 3,
    params: 'onPrev',
    type: 'Func',
    description: '切换上一张图片的回调',
    defaultValue: '() => {}',
  },
  {
    id: 4,
    params: 'onNext',
    type: 'Func',
    description: '切换下一张图片的回调',
    defaultValue: '() => {}',
  },
]
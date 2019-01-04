export const dataSource = [
  {
    id: 1,
    params: 'cols',
    description: '表单组列数, 即: 表单组一行显示表单元素的个数',
    type: 'Number',
    defaultValue: '1',
  },
  {
    id: 2,
    params: 'configs',
    description: '表单配置数组',
    type: 'Array',
    defaultValue: '[ ]',
  },
  {
    id: 3,
    params: 'extMap',
    description: '表单元素附加配置，该配置会直接附加到每一个表单元素上',
    type: 'Object',
    defaultValue: '{ }',
  },
  {
    id: 4,
    params: 'layout',
    description: '表单布局类型, 仅支持 antd 提供的表单布局 horizontal vertical inline 三种, 其中 inline 布局不建议表单元素过多的时候使用',
    type: 'String',
    defaultValue: 'horizontal',
  },
  {
    id: 5,
    params: 'onChange',
    description: '可控表单搜集表单值的事件方法，绑定到 onChange/onBlur 事件',
    type: 'Func',
    defaultValue: 'null',
  },
  {
    id: 6,
    params: 'values',
    description: '整个表单值',
    type: 'Object',
    defaultValue: '{ }',
  },
]
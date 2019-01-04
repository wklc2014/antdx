export const dataSource = [
  {
    id: 1,
    params: 'config',
    description: '表单元素配置',
    type: 'Array/Object',
    defaultValue: '必填',
  },
  {
    id: 2,
    params: 'extMap',
    description: '表单元素扩展配置',
    type: 'Object',
    defaultValue: '{}',
  },
  {
    id: 3,
    params: 'touches',
    description: '记录表单元素是否是首次验证',
    type: 'Object',
    defaultValue: '{}',
  },
  {
    id: 4,
    params: 'onChange',
    description: '可控表单搜集表单值的事件方法，绑定到 onChange/onBlur 事件',
    type: 'Func',
    defaultValue: 'null',
  },
  {
    id: 6,
    params: 'values',
    description: '表单值',
    type: 'Object',
    defaultValue: '{}',
  },
]
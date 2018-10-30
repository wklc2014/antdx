export const dataSource = [
  {
    id: 1,
    params: 'formItemConfig',
    description: '表单元素配置',
    type: 'Array/object',
    defaultValue: '必填',
  },
  {
    id: 2,
    params: 'formItemLabel',
    description: '表单元素 label 属性，标识表单元素的名称',
    type: 'String',
    defaultValue: '-',
  },
  {
    id: 3,
    params: 'formItemExtMap',
    description: '表单元素扩展配置',
    type: 'Object',
    defaultValue: '-',
  },
  {
    id: 4,
    params: 'formItemTouches',
    description: '记录表单元素是否是首次验证',
    type: 'Object',
    defaultValue: '-',
  },
  {
    id: 5,
    params: 'onChange',
    description: '可控表单搜集表单值的事件方法，绑定到 onChange/onBlur 事件',
    type: 'Func',
    defaultValue: '必填',
  },
  {
    id: 6,
    params: 'formValues',
    description: '表单值',
    type: 'Object',
    defaultValue: '必填',
  },
]
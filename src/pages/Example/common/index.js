export default [
  {
    config: {
      id: 'cols',
      type: 'number',
      ext: {
        initValue: 2,
      },
    },
    extMap: {
      label: '表单列数',
    }
  },
  {
    config: {
      id: 'space',
      type: 'number',
      ext: {
        initValue: 10,
      },
    },
    extMap: {
      label: '表单元素右侧间距',
    }
  },
  {
    config: {
      id: 'flex',
      type: 'number',
      ext: {
        initValue: 100,
      },
    },
    extMap: {
      label: '表单元素label长度',
    }
  },
  {
    config: {
      id: 'layout',
      type: 'select',
      ext: {
        initValue: 'horizontal',
        data: [
          { value: 'horizontal', label: '水平' },
          { value: 'vertical', label: '垂直' },
          { value: 'inline', label: '内联' },
        ]
      },
    },
    extMap: {
      label: '表单布局',
    }
  },
  {
    config: {
      id: 'validateForm',
      type: 'button',
      api: {
        type: 'primary',
      },
      ext: {
        value: 'btn1',
        label: '验证表单',
      },
    },
    extMap: {
      label: false,
    }
  },
  {
    config: {
      id: 'resetForm',
      type: 'button',
      api: {
        type: 'primary',
      },
      ext: {
        value: 'btn2',
        label: '重置表单',
      },
    },
    extMap: {
      label: false,
    }
  },
  {
    config: {
      id: 'errorForm',
      type: 'button',
      api: {
        type: 'primary',
      },
      ext: {
        value: 'btn3',
        label: '获取表单验证结果',
      },
    },
    extMap: {
      label: false,
    }
  },
]
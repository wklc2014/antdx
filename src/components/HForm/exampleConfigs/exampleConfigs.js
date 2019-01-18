/**
 * FormGroup 组件配置示例
 */
import moment from 'moment';

export default [
  {
    config: [
      {
        id: 'accidentCity',
        type: 'cascader',
        api: {},
        ext: {
          city: 'quanGuo',
          span: 12,
          rules: [
            { required: true, message: '出险城市不能为空' },
          ],
        },
      },
      {
        id: 'accidentCity-note',
        type: 'input',
        api: {
          placeholder: '请输入城市备注',
        },
        ext: {
          span: 12,
          trim: true,
          rules: [
            { required: true, message: '城市备注不能为空' },
          ],
        },
      },
    ],
    extMap: {
      label: '出险城市',
    },
  },
  {
    config: {
      id: 'user_name',
      type: 'input',
      api: {},
      ext: {
        toUpperCase: false,
        toLowerCase: false,
        trim: false,
        span: 24,
        rules: [
          { required: true, message: '用户姓名必填' },
          { min: 2, message: '最少2位' },
          { max: 5, message: '最多5位' },
        ],
      },
    },
    extMap: {
      label: '用户姓名',
      // className: '',
      // colon: false,
      // colspan: 1,
      // extra: '',
      // gutter: 8,
      // hide: false,
      // layout: 80,
      // minWidth: 160,
      // maxWidth: 1000,
      // pLayout: '',
      // space: 0,
    },
  },
  {
    config: {
      id: 'imageView',
      type: 'picture',
      api: {
        toolTipApi: {
          placement: 'topRight',
        },
        pictureApi: {
          picWidth: 100,
        },
        modalApi: {

        },
        boxStyle: {

        },
      },
      ext: {

      },
    },
    extMap: {
      colspan: 2,
      label: '图片显示',
    },
  },
  {
    config: {
      id: 'loosPart',
      type: 'checkbox',
      api: {
        options: [
          { label: '无损', value: '01' },
          { label: '正前方', value: '02' },
          { label: '前方左侧', value: '03' },
          { label: '前方右侧', value: '04' },
          { label: '车身左侧', value: '05' },
          { label: '车身右侧', value: '06' },
          { label: '正后方', value: '07' },
          { label: '后方左侧', value: '08' },
          { label: '后方右侧', value: '09' },
          { label: '汽车排气管', value: '10' },
          { label: '雨刮器', value: '11' },
          { label: '左后视镜', value: '12' },
          { label: '后备箱', value: '13' },
          { label: '左后轮胎', value: '14' },
          { label: '右后轮胎', value: '15' },
          { label: '左前轮胎', value: '16' },
          { label: '右前轮胎', value: '17' },
        ],
      },
      ext: {
        rules: [
          { required: true, message: '受损部位必选' },
        ],
      },
    },
    extMap: {
      colspan: 2,
      label: '受损部位',
      maxWidth: 400,
    },
  },
  {
    config: [
      {
        id: 'surname',
        type: 'input',
        api: {
          placeholder: '请输入用户姓',
        },
        ext: {
          toUpperCase: true,
          rules: [
            { required: true, message: '用户姓必填' },
          ],
          span: 12,
          toUpperCase: true,
          initValue: 123,
        },
      },
      {
        id: 'nation',
        type: 'select',
        api: {
          placeholder: '请选择用户国籍',
          disabled: false,
          mode: 'tags',
        },
        ext: {
          data: [
            {
              label: '国籍',
              children: [
                { value: 'zh', label: '中国' },
                { value: 'en', label: '英国' },
                { value: 'ao', label: '澳大利亚' },
                { value: 'jap', label: '日本', disabled: true, },
              ]
            },
            {
              label: '城市',
              children: [
                { value: 'shanghai', label: '上海' },
                { value: 'chengdu', label: '成都' },
                { value: 'guangzhou', label: '广州' },
                { value: 'tianjin', label: '天津' },
              ]
            }
          ],
          rules: [
            { required: true, message: '请选择用户国籍' },
          ],
          span: 12,
          pright: 0,
          initValue: ['en', 'ao'],
        },
      },
      {
        id: 'userNote',
        type: 'input',
        api: {
          placeholder: '请输入用户备注',
          disabled: false,
        },
        ext: {
          rules: [
            { required: true, message: '请输入用户备注' },
          ],
          span: 12,
          pright: 8,
          initValue: 'test',
        },
      },
    ],
    extMap: {
      extra: '这里是帮助提示信息',
      label: '用户姓名',
    },
  },
  {
    config: {
      id: 'reportDate',
      type: 'datePicker',
      api: {
        format: 'YYYY-MM-DD',
        renderExtraFooter: () => 'footer',
      },
      ext: {
        rules: [
          { required: true, message: '报案日期必填' },
        ],
      }
    },
    extMap: {
      label: '报案日期',
    }
  },
  {
    config: {
      id: 'reportMonth',
      type: 'monthPicker',
    },
    extMap: {
      label: '报名年月',
    }
  },
  {
    config: {
      id: 'translateDate',
      type: 'rangePicker',
      api: {
        showTime: true,
        format: 'YYYY-MM-DD HH:mm:ss',
        ranges: {
          一周内: [moment().subtract(7, 'days'), moment()],
          一月内: [moment().subtract(1, 'months'), moment()],
          三月内: [moment().subtract(3, 'months'), moment()],
        },
      },
      ext: {
        rules: [
          { required: true, message: '运输日期不能为空' },
        ],
      }
    },
    extMap: {
      label: '运输日期',
    }
  },
  {
    config: {
      id: 'dinnerTime',
      type: 'timePicker',
    },
    extMap: {
      label: '就餐时间',
    }
  },
  {
    config: [
      {
        id: 'contactPhone',
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, whitespace: true, message: '联系人电话必填' },
            { phone: true, message: '手机号码不正确' },
          ],
          span: 12,
        },
      },
      {
        id: 'contactPhoneBtn',
        type: 'radio',
        ext: {
          data: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02' },
          ],
          span: 12,
        },
      },
    ],
    extMap: {
      label: '联系人电话',
    }
  },
  {
    config: [
      {
        id: 'accidentCreate',
        type: 'textarea',
        ext: {
          span: 18,
        },
      },
      {
        id: 'accidentCreateBtn',
        type: 'button',
        ext: {
          data: [
            { label: '生成描述', value: '01', type: 'primary' },
          ],
          span: 6,
        },
        api: {

        },
      },
    ],
    extMap: {
      colspan: 2,
      label: '描述模版',
    },
  },
  {
    config: {
      id: 'payMoney',
      type: 'number',
      ext: {
        rules: [
          { required: true, message: '保单金额必填' },
        ],
      },
    },
    extMap: {
      label: '赔付金额',
    }
  },
  {
    config: {
      id: 'accidentType',
      type: 'radioButton',
      ext: {
        data: [
          { label: '车险', value: '01' },
          { label: '非车险', value: '02' },
        ],
      },
    },
    extMap: {
      label: '险种类型',
    }
  },
  {
    config: {
      id: 'score',
      type: 'rate',
      api: {
        allowHalf: true,
      },
    },
    extMap: {
      label: '打分',
    }
  },
  {
    config: {
      id: 'carNumber',
      type: 'search',
      api: {
        enterButton: 'Enter',
      },
      ext: {
        toUpperCase: true,
      },
    },
    extMap: {
      label: '搜索框',
    }
  },
  {
    config: {
      id: 'carMarkType',
      type: 'select',
      api: {
        mode: 'multiple',
        allowClear: true,
      },
      ext: {
        rules: [
          { required: true, message: '号牌种类必填' },
        ],
        data: [
          '大型汽车号牌',
          '小型汽车号牌',
          '使馆汽车号牌',
          '领馆汽车号牌',
          '境外汽车号牌',
          '外籍汽车号牌',
          '两、三轮摩托车号牌',
          '轻便摩托车号牌',
          '使馆摩托车号牌',
        ],
      },
    },
    extMap: {
      label: '汽车类型',
    }
  },
  {
    config: {
      id: 'sliderInput',
      type: 'slider',
      api: {
        marks: {
          '0': 'A',
          '20': 'B',
          '40': 'C',
          '60': 'D',
          '80': 'E',
          '100': 'F',
        },
      },
    },
    extMap: {
      label: '滑动输入',
    }
  },
  {
    config: {
      id: 'onOff',
      type: 'switch',
      api: {
        checkedChildren: 'OK',
        unCheckedChildren: 'NO',
      },
    },
    extMap: {
      label: '开关',
    }
  },
  {
    config: {
      id: 'myName',
      type: 'text',
      ext: {
        data: [
          { value: '111', label: '111成都' },
          { value: '222', label: '222成都' },
          { value: '333', label: '333成都' },
          { value: '444', label: '444成都' },
        ],
        initValue: '222',
      },
    },
    extMap: {
      label: '文本显示',
    }
  },
  {
    config: {
      id: 'treeSelect',
      type: 'treeSelect',
      ext: {
        city: 'quanGuo',
      },
    },
    extMap: {
      label: '树形选择',
    }
  },
  {
    config: {
      id: 'buttonGroup',
      type: 'button',
      api: {
        type: 'primary',
      },
      ext: {
        data: [
          { label: '选择', value: '001' },
          { label: '北京', value: '002', type: 'default' },
          { label: '西安', value: '003', type: 'dashed' },
          { label: '绵阳', value: '004', type: 'danger' },
        ],
      },
    },
    extMap: {
      label: false,
    },
  },
  {
    config: {
      id: 'searchData',
      type: 'service',
      api: {
        allowClear: true,
      },
      ext: {
        service: {
          url: '/user',
          params: 'a=1&b=22&keyword={{value}}',
          method: 'post',
          time: 300,
          path: 'name',
        },
      },
    },
    extMap: {
      label: '输入搜索',
    }
  },
  {
    config: {
      id: 'operators',
      type: 'tag',
      api: {

      },
      ext: {
        data: [
          { value: 'cheng_du', label: '成都' },
          { value: 'shang_hai', label: '上海' },
          { value: 'bei_jing', label: '北京' },
          { value: 'wu_lu_mu_qi', label: '乌鲁木齐' },
        ],
      },
    },
    extMap: {
      label: '基础标签',
    }
  }
]
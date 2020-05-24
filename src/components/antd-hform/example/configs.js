import moment from 'moment';

export default [
  {
    config: [
      {
        id: 'first_name',
        type: 'input',
        itemApi: {
          rules: [{ required: true, message: '用户姓必填' }],
          extra: '这里是帮助提示信息',
        },
        contentApi: {
          placeholder: '请输入用户姓',
        },
        colApi: {},
        ext: {
          toUpperCase: true,
          defaultValue: 'abcd',
        },
      },
      {
        id: 'last_name',
        type: 'input',
        itemApi: {
          rules: [{ required: true, message: '用户名必填' }],
        },
        contentApi: {
          placeholder: '请输入用户名',
        },
        ext: {
          toUpperCase: false,
          defaultValue: 123,
        },
      },
    ],
    extMap: {
      label: '用户姓名',
      itemApi: {},
      rowApi: {},
      colApi: {},
      ext: {},
    },
  },
  {
    config: {
      id: 'loginPassword',
      type: 'input',
      ext: {
        subType: 'password',
      },
    },
    extMap: {
      label: '密码框',
    },
  },
  {
    config: {
      id: 'loginPassword',
      type: 'input',
      contentApi: {
        enterButton: '提交',
      },
      ext: {
        subType: 'search',
      },
    },
    extMap: {
      label: '搜索框',
    },
  },
  {
    config: [
      {
        id: 'accidentCreate',
        type: 'input',
        colApi: {
          span: 18,
        },
        ext: {
          subType: 'textarea',
        },
      },
      {
        id: 'accidentCreateBtn',
        type: 'button',
        api: {},
        colApi: {
          span: 6,
        },
        ext: {
          data: [{ label: '生成描述', value: '01', type: 'primary' }],
        },
      },
    ],
    extMap: {
      colspan: 2,
      label: '出险描述',
    },
  },
  {
    config: [
      {
        id: 'accidentCity',
        type: 'cascader',
        itemApi: {
          rules: [{ required: true, message: '出险城市不能为空' }],
          extra: '这里是帮助信息',
        },
        colApi: {},
        ext: {
          data: [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                {
                  value: 'hangzhou',
                  label: '杭州',
                  children: [
                    {
                      value: 'xihu',
                      label: '西湖',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: '江苏',
              children: [
                {
                  value: 'nanjing',
                  label: '南京',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: '中华门',
                    },
                  ],
                },
              ],
            },
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
      id: 'loosPart',
      type: 'checkbox',
      itemApi: {
        rules: [{ required: true, message: '受损部位必选' }],
      },
      contentApi: {
        options: [
          { label: '无损', value: '01' },
          { label: '正前方', value: '02', disabled: true },
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
        defaultValue: ['01', '03'],
      },
    },
    extMap: {
      label: '受损部位',
      colApi: {
        span: 24,
      },
    },
  },
  {
    config: {
      id: 'report',
      type: 'date',
      itemApi: {
        rules: [{ required: true, message: '报案日期必填' }],
      },
      contentApi: {
        format: 'YYYY-MM-DD HH:mm:ss',
        renderExtraFooter: () => 'footer',
        showTime: true,
      },
      ext: {},
    },
    extMap: {
      label: '报案日期',
    },
  },
  {
    config: {
      id: 'accident',
      type: 'date',
      contentApi: {
        picker: 'year',
      },
      ext: {},
    },
    extMap: {
      label: '报名年份',
    },
  },
  {
    config: {
      id: 'start-learn',
      type: 'date',
      contentApi: {
        picker: 'month',
      },
      ext: {},
    },
    extMap: {
      label: '开学月份',
    },
  },
  {
    config: {
      id: 'start-week',
      type: 'date',
      contentApi: {
        picker: 'week',
      },
      ext: {},
    },
    extMap: {
      label: '开学周期',
    },
  },
  {
    config: {
      id: 'translateDate',
      type: 'date',
      itemApi: {
        rules: [{ required: true, message: '运输日期不能为空' }],
      },
      contentApi: {
        ranges: {
          一周内: [moment().subtract(7, 'days'), moment()],
          一月内: [moment().subtract(1, 'months'), moment()],
          三月内: [moment().subtract(3, 'months'), moment()],
        },
      },
      ext: {
        subType: 'range',
      },
    },
    extMap: {
      label: '运输日期',
    },
  },
  {
    config: {
      id: 'dinnerTime',
      type: 'date',
      ext: {
        subType: 'time',
      },
    },
    extMap: {
      label: '早餐时间',
    },
  },
  {
    config: {
      id: 'payMoney',
      type: 'number',
      itemApi: {
        rules: [{ required: true, message: '赔付金额必填' }],
      },
    },
    extMap: {
      label: '赔付金额',
    },
  },
  {
    config: [
      {
        id: 'contactPhone',
        type: 'input',
        itemApi: {
          rules: [
            { required: true, whitespace: true, message: '联系人电话必填' },
            { phone: true, message: '手机号码不正确' },
          ],
        },
        ext: {},
      },
      {
        id: 'contactPhoneType',
        type: 'radio',
        ext: {
          data: [
            { label: '座机号码', value: '01' },
            { label: '手机号码', value: '02' },
          ],
        },
      },
    ],
    extMap: {
      label: '联系人电话',
    },
  },
  {
    config: {
      id: 'accidentType',
      type: 'radio',
      ext: {
        data: [
          { label: '车险', value: '01' },
          { label: '非车险', value: '02' },
        ],
        subType: 'button',
      },
    },
    extMap: {
      label: '险种类型',
    },
  },
  {
    config: {
      id: 'score',
      type: 'rate',
      contentApi: {
        allowHalf: true,
      },
    },
    extMap: {
      label: '综合打分',
    },
  },
  {
    config: {
      id: 'all-situation',
      type: 'render',
      ext: {
        render: () => {
          return '不容乐观，各处形势严峻';
        },
      },
    },
    extMap: {
      label: '全国概况',
      itemApi: {},
    },
  },
  {
    config: [
      {
        id: 'province',
        type: 'select',
        itemApi: {
          rules: [{ required: true, message: '车牌号码省份不能为空' }],
        },
        contentApi: {
          style: { width: '50%' },
        },
        ext: {
          span: 12,
          data: ['川', '京', '深'],
        },
      },
      {
        id: 'carNo',
        type: 'input',
        itemApi: {
          rules: [{ required: true, message: '车牌号码不能为空' }],
          style: { width: '50%' },
        },
        contentApi: {
          style: { width: '50%' },
        },
        ext: {},
      },
    ],
    extMap: {
      label: '车牌号码',
      type: 'inputGroup',
    },
  },
  {
    config: {
      id: 'carType',
      type: 'select',
      itemApi: {
        rules: [{ required: true, message: '车辆类型必填' }],
      },
      contentApi: {
        mode: 'multiple',
        allowClear: true,
      },
      ext: {
        data: [
          '大型汽车',
          '小型汽车',
          '使馆汽车',
          '领馆汽车',
          '境外汽车',
          '外籍汽车',
          '两轮摩托车',
          '三轮摩托车',
          '轻便摩托车',
          '使馆摩托车',
        ],
      },
    },
    extMap: {
      label: '车辆类型',
    },
  },
  {
    config: {
      id: 'searchData',
      type: 'service',
      itemApi: {
        rules: [{ required: true, message: '疾病名称不能为空' }],
      },
      contentApi: {
        allowClear: true,
      },
      ext: {
        service: '',
        callback: resp =>
          resp.data.map(v => ({ value: v.name, label: v.name })),
      },
    },
    extMap: {
      label: '疾病名称',
    },
  },
  {
    config: {
      id: 'training',
      type: 'slider',
      contentApi: {
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
      label: '考评',
    },
  },
  {
    config: {
      id: 'onOff',
      type: 'switch',
      contentApi: {
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
      },
      itemApi: {
        rules: [{ required: true, message: '是否纳税开关必须开启' }],
      },
    },
    extMap: {
      label: '是否纳税',
    },
  },
  {
    config: {
      id: 'cityName',
      type: 'text',
      ext: {
        data: [
          { value: 'cheng_du', label: '成都' },
          { value: 'bei_jing', label: '北京' },
          { value: 'mian_yang', label: '绵阳' },
          { value: 'guang_zhou', label: '广州' },
        ],
        defaultValue: '222',
      },
    },
    extMap: {
      label: '出生城市',
    },
  },
  {
    config: {
      id: 'learn-material',
      type: 'treeselect',
      ext: {
        data: [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-1',
                key: '0-0-1',
              },
              {
                title: 'Child Node2',
                value: '0-0-2',
                key: '0-0-2',
              },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
          },
        ],
      },
    },
    extMap: {
      label: '学习课程',
    },
  },
  {
    config: {
      id: 'operate',
      type: 'button',
      contentApi: {
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
      itemApi: {
        style: {
          paddingLeft: '100px',
        },
      },
    },
  },
];

/* eslint-disable max-lines */
import moment from 'moment';

// 用户调查字段配置
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
        },
      },
      {
        id: 'nation',
        type: 'select',
        api: {
          placeholder: '请选择用户国籍',
          disabled: false,
          // mode: 'tags',
        },
        ext: {
          data: [
            { value: 'zh', label: '中国' },
            { value: 'en', label: '英国' },
          ],
          rules: [
            { required: true, message: '请选择用户国籍' },
          ],
          span: 12,
          pright: 0,
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
      id: 'sex',
      type: 'radio',
      ext: {
        data: [
          { label: '男', value: '01' },
          { label: '女', value: '02' },
          { label: '男女', value: '03' },
          { label: '女男', value: '04' },
        ],
      },
    },
    extMap: {
      label: '性别',
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
          { value: '01', label: '大型汽车号牌' },
          { value: '02', label: '小型汽车号牌' },
          { value: '03', label: '使馆汽车号牌' },
          { value: '04', label: '领馆汽车号牌' },
          { value: '05', label: '境外汽车号牌' },
          { value: '06', label: '外籍汽车号牌' },
          { value: '07', label: '两、三轮摩托车号牌' },
          { value: '08', label: '轻便摩托车号牌' },
          { value: '09', label: '使馆摩托车号牌' },
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
    config: [
      {
        id: 'accidentDescription',
        type: 'textarea',
        ext: {
          rules: [
            { required: true, message: '出险描述必填' },
          ],
          span: 16,
        },
      },
      {
        id: 'accidentDescriptionOfCity',
        type: 'cascader',
        api: {
          placeholder: '请选择出险城市',
        },
        ext: {
          city: 'quanGuo',
          span: 8,
        },
      },
    ],
    extMap: {
      colspan: 2,
      label: '出险描述',
    },
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
        id: 'companyAddress',
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, message: '用户姓名必填' },
            { max: 4, message: '用户姓名最多4位' },
            { min: 2, message: '用户姓名至少2位' },
          ],
          span: 12,
        },
      },
      {
        id: 'companyAddressBtn',
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          data: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02', type: 'default' },
          ],
          span: 12,
        },
      },
    ],
    extMap: {
      label: '公司地址',
    },
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
      id: 'myName',
      type: 'text',
      ext: {
        data: [
          { value: '111', label: '111成都' },
          { value: '222', label: '222成都' },
          { value: '333', label: '333成都' },
          { value: '444', label: '444成都' },
        ],
      },
    },
    extMap: {
      label: '文本显示',
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
        id: 'phoneNumber',
        type: 'input',
        api: {
        },
        ext: {
          rules: [
            { required: true, message: '手机号码必填' },
            { len: 11, message: '手机号码必须为11位' },
          ],
          span: 12,
        },
      },
      {
        id: 'phoneNumberBtn',
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          data: [
            { label: '参数', value: 'edit' },
          ],
          span: 12,
        },
      },
    ],
    extMap: {
      label: '手机号码',
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
      id: 'imageView',
      type: 'picture',
      api: {
        toolTipApi: {
          placement: 'topRight',
        },
        hPictureApi: {
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
      id: 'mybtn',
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
];
import * as _formItemLayouts from './_formItemLayouts.js';

/**
 * 获取 FormItem 表单元素的删格布局
 * @param  {number} params.formCols               [表单几列布局, 默认为1]
 * @param  {string} params.formLayout             [表单布局类型]
 * @param  {number} params.formItemColspan        [某个表单元素横跨几列, 默认为1]
 * @param  {object} params.formItemLayout         [表单元素配置的栅格布局]
 * @return {object/null}                          [表单元素栅格化布局属性]
 */
export default function getFormItemLayout(params = {}) {
  const {
    formCols = 1,
    formLayout = 'horizontal',
    formItemColspan = 1,
    formItemLayout = '',
  } = params;

  /**
   * 只有当表单布局为 horizontal 时，
   * 表单元素才采用栅格布局
   */
  if (formLayout !== 'horizontal') {
    return {};
  }

  /**
   * 如果直接配置了表单元素栅格布局
   * 则优先采用
   */
  if (formItemLayout) {
    return _formItemLayouts[formItemLayout] || formItemLayout;
  }

  // 一个表单元素最多横跨列数, 最多和表单组列数相同
  const newFormItemColspan = Math.min(formCols, formItemColspan);

  switch (formCols) {
    case 4:
      return [
        {
          labelCol:   { xs: 24, sm: 6,  md: 6,  lg: 6,  xl: 12 },
          wrapperCol: { xs: 24, sm: 18, md: 18, lg: 18, xl: 12 },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 3,  xl: 6   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 18  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 2,  xl: 4   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 20  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 2,  xl: 3   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 22, xl: 21  },
        },
      ][newFormItemColspan - 1];
    case 3:
    case 2:
      return [
        {
          labelCol:   { xs: 24, sm: 6,  md: 6,  lg: 6,  xl: 6   },
          wrapperCol: { xs: 24, sm: 18, md: 18, lg: 18, xl: 18  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 3,  xl: 3   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 21  },
        },
        {
          labelCol:   { xs: 24, sm: 6,  md: 3,  lg: 3,  xl: 2   },
          wrapperCol: { xs: 24, sm: 18, md: 21, lg: 21, xl: 22  },
        },
      ][newFormItemColspan - 1];
    case 1:
    default:
      return {
        labelCol:   { xs: 24, sm: 6   },
        wrapperCol: { xs: 24, sm: 16  },
      }
  }
}

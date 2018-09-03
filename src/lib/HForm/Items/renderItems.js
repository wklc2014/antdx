/**
 * 统一处理各种表单输入类型
 */
import React from 'react';

import MyButton from './MyButton.jsx';
import MyCascader from './MyCascader.jsx';
import MyCheckbox from './MyCheckbox.jsx';
import MyDatePicker from './MyDatePicker.jsx';
import MyInput from './MyInput.jsx';
import MyMonthPicker from './MyMonthPicker.jsx';
import MyNumber from './MyNumber.jsx';
import MyPicture from './MyPicture.jsx';
import MyRadio from './MyRadio.jsx';
import MyRadioButton from './MyRadioButton.jsx';
import MyRangePicker from './MyRangePicker.jsx';
import MyRate from './MyRate.jsx';
import MySearch from './MySearch.jsx';
import MySelect from './MySelect.jsx';
import MyService from './MyService.jsx';
import MySlider from './MySlider.jsx';
import MySwitch from './MySwitch.jsx';
import MyText from './MyText.jsx';
import MyTextArea from './MyTextArea.jsx';
import MyTimePicker from './MyTimePicker.jsx';
import MyTreeSelect from './MyTreeSelect.jsx';

export default function renderItems(params = {}) {
  const { type, ...restProps } = params;

  switch (type) {
    case 'button':
      return <MyButton {...restProps} />;
    case 'cascader':
      return <MyCascader {...restProps} />;
    case 'checkbox':
      return <MyCheckbox {...restProps} />;
    case 'input':
      return <MyInput {...restProps} />;
    case 'date':
      return <MyDatePicker {...restProps} />;
    case 'month':
      return <MyMonthPicker {...restProps} />;
    case 'number':
      return <MyNumber {...restProps} />;
    case 'picture':
      return <MyPicture {...restProps} />;
    case 'radio':
      return <MyRadio {...restProps} />;
    case 'radioButton':
      return <MyRadioButton {...restProps} />;
    case 'range':
      return <MyRangePicker {...restProps} />;
    case 'rate':
      return <MyRate {...restProps} />;
    case 'search':
      return <MySearch {...restProps} />;
    case 'select':
      return <MySelect {...restProps} />;
    case 'service':
      return <MyService {...restProps} />;
    case 'slider':
      return <MySlider {...restProps} />;
    case 'switch':
      return <MySwitch {...restProps} />;
    case 'text':
      return <MyText {...restProps} />;
    case 'textarea':
      return <MyTextArea {...restProps} />;
    case 'time':
      return <MyTimePicker {...restProps} />;
    case 'treeSelect':
      return <MyTreeSelect {...restProps} />;
    default:
      throw Error(`form item type: '${type}' is error`);
  }

}
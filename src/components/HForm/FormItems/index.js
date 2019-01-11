/**
 * 统一处理各种表单输入类型
 */
import React from 'react';
import is from 'is_js';

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
import MyTag from './MyTag.jsx';
import MyText from './MyText.jsx';
import MyTextArea from './MyTextArea.jsx';
import MyTimePicker from './MyTimePicker.jsx';
import MyTreeSelect from './MyTreeSelect.jsx';

const FormItemTypes = {
  button: MyButton,
  cascader: MyCascader,
  checkbox: MyCheckbox,
  datePicker: MyDatePicker,
  input: MyInput,
  monthPicker: MyMonthPicker,
  number: MyNumber,
  picture: props => <MyPicture {...props} />,
  radio: MyRadio,
  radioButton: MyRadioButton,
  rangePicker: MyRangePicker,
  rate: MyRate,
  search: MySearch,
  select: MySelect,
  service: props => <MyService {...props} />,
  slider: MySlider,
  switch: MySwitch,
  tag: MyTag,
  text: MyText,
  textarea: MyTextArea,
  timePicker: MyTimePicker,
  treeSelect: MyTreeSelect,
}

export default FormItemTypes;
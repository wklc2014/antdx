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
  button: props => <MyButton {...props} />,
  cascader: props => <MyCascader {...props} />,
  checkbox: props => <MyCheckbox {...props} />,
  datePicker: props => <MyDatePicker {...props} />,
  input: props => <MyInput {...props} />,
  monthPicker: props => <MyMonthPicker {...props} />,
  number: props => <MyNumber {...props} />,
  picture: props => <MyPicture {...props} />,
  radio: props => <MyRadio {...props} />,
  radioButton: props => <MyRadioButton {...props} />,
  rangePicker: props => <MyRangePicker {...props} />,
  rate: props => <MyRate {...props} />,
  search: props => <MySearch {...props} />,
  select: props => <MySelect {...props} />,
  service: props => <MyService {...props} />,
  slider: props => <MySlider {...props} />,
  switch: props => <MySwitch {...props} />,
  tag: props => <MyTag {...props} />,
  text: props => <MyText {...props} />,
  textarea: props => <MyTextArea {...props} />,
  timePicker: props => <MyTimePicker {...props} />,
  treeSelect: props => <MyTreeSelect {...props} />,
}

export default FormItemTypes;

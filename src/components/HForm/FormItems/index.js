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
import MyNumber from './MyNumber.jsx';
import MyPicture from './MyPicture.jsx';
import MyRadio from './MyRadio.jsx';
import MyRate from './MyRate.jsx';
import MySelect from './MySelect.jsx';
import MyService from './MyService.jsx';
import MySlider from './MySlider.jsx';
import MySwitch from './MySwitch.jsx';
import MyTag from './MyTag.jsx';
import MyText from './MyText.jsx';
import MyTreeSelect from './MyTreeSelect.jsx';

const FormItemTypes = {
  button      : props => <MyButton {...props} />,
  cascader    : props => <MyCascader {...props} />,
  checkbox    : props => <MyCheckbox {...props} />,
  date        : props => <MyDatePicker {...props} />,
  input       : props => <MyInput {...props} />,
  number      : props => <MyNumber {...props} />,
  picture     : props => <MyPicture {...props} />,
  radio       : props => <MyRadio {...props} />,
  rate        : props => <MyRate {...props} />,
  select      : props => <MySelect {...props} />,
  service     : props => <MyService {...props} />,
  slider      : props => <MySlider {...props} />,
  switch      : props => <MySwitch {...props} />,
  tag         : props => <MyTag {...props} />,
  text        : props => <MyText {...props} />,
  treeSelect  : props => <MyTreeSelect {...props} />,
}

export default FormItemTypes;

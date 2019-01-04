/**
 * HOC Input
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

export default function hocInput(WraperComponent) {
  return class extends Component {
    static defaultProps = {
      inputApi: {},
      onConfirm: () => {},
    }

    constructor(props) {
      super(props);
      this.state = {
        /**
         * 是否显示 Input 输入组件
         * @type {Boolean}
         */
        inputVsible: false,

        /**
         * 输入的标签内容
         * @type {String}
         */
        inputValue: '',
      }
    }

    // Input 组件 onChange 事件
    onChange = (e) => {
      this.setState({
        inputValue: e.target.value,
      });
    }

    // 回车/移除焦点事件
    onConfirm = () => {
      const { inputValue } = this.state;
      this.setState({
        inputVsible: false,
        inputValue: '',
      }, () => {
        this.props.onConfirm(inputValue);
      });
    }

    // 点击添加标签按钮时，显示 Input 组件
    onVisible = (tag) => {
      this.setState({
        inputVsible: true,
        inputValue: tag,
      }, () => {
        this.inst.focus();
        this.inst.input.select();
      });
    }

    render() {
      const { inputApi, ...restProps } = this.props;
      const { inputVsible, inputValue } = this.state;

      if (inputVsible) {
        const InputProps = {
          type: 'text',
          size: 'small',
          ...inputApi,
          style: {
            width: 80,
            marginRight: 8,
            ...inputApi.style,
          },
          value: inputValue,
          ref: inst => this.inst = inst,
          onChange: this.onChange,
          onBlur: this.onConfirm,
          onPressEnter: this.onConfirm,
        }

        return <Input {...InputProps} />;
      }

      const WraperComponentProps = {
        ...restProps,
        onVisible: this.onVisible,
      }

      return <WraperComponent {...WraperComponentProps} />;
    }
  }
}
/**
 * Modal 包裹组件
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

function hocModal(WraperComponent) {
  return class extends Component {

    static defaultProps = {
      /**
       * Modal 框标题
       * @type {String}
       */
      title: '弹出框',

      /**
       * Modal 框点击【确定】按钮回调
       * @return {Func}
       */
      onOk: () => {},

      /**
       * Modal 框点击【取消】按钮回调
       * @return {Func}
       */
      onCancel: () => {},
    }

    constructor(props) {
      super(props);
      this.state = {
        visible: false,
      }
    }

    onVisible = () => {
      this.setState({ visible: true });
    }

    onOk = () => {
      this.setState({ visible: false }, this.props.onOk);
    }

    onCancel = () => {
      this.setState({ visible: false }, this.props.onCancel);
    }

    render() {
      const { visible } = this.state;

      const WraperComponentProps = {
        ...this.props,
        visible,
        onOk: this.onOk,
        onCancel: this.onCancel,
        onVisible: this.onVisible,
      }

      return <WraperComponent {...WraperComponentProps} />
    }
  }
}



hocModal.propTypes = {
  onOk: propTypes.func,
  onCancel: propTypes.func,
}

export default hocModal;


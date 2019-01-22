/**
 * 多张图片显示效果
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { message } from 'antd';
import HPicture from './HPicture.jsx';
import BUTTONS from './utils/_buttons.js';

class HPictureWraper extends Component {

  static defaultProps = {
    source: [],
    index: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      index: props.index,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const next = JSON.stringify(nextProps);
    const prev = JSON.stringify(this.props);
    if (prev !== next) {
      this.setState({
        source: nextProps.source,
        index: nextProps.index,
      })
    }
  }

  onPrev = () => {
    const { source, index } = this.state;
    const length = source.length;

    if (index <= 0) {
      message.destroy();
      message.info('已经是第一张了');
    } else {
      this.setState({
        index: index - 1
      }, this.props.onPrev)
    }
  }

  onNext = () => {
    const { source, index } = this.state;
    const length = source.length;

    if (index >= length - 1) {
      message.destroy();
      message.info('已经是最后一张了');
    } else {
      this.setState({
        index: index + 1,
      }, this.props.onNext);
    }
  }

  render() {
    const { source, index } = this.state;

    const HPictureProps = {
      src: source[index],
      onPrev: this.onPrev,
      onNext: this.onNext,
      buttons: [
        { label: '上一张', value: 'prev' },
        { label: '下一张', value: 'next' },
        ...BUTTONS,
      ]
    }

    return <HPicture {...HPictureProps} />
  }

}

HPictureWraper.propTypes = {
  /**
   * 待显示图片数组
   * @type {Array}
   */
  source: propTypes.array,

  /**
   * 起始显示图片序号
   * @type {Number}
   */
  index: propTypes.number,

  /**
   * 图片上一张
   * @type {Number}
   */
  onPrev: propTypes.func,

  /**
   * 图片下一张
   * @type {Number}
   */
  onNext: propTypes.func,
}

export default HPictureWraper;

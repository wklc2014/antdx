/**
 * 图片展示
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Tooltip, Modal, message } from 'antd';

import HPicture from '../HPicture.jsx';
import _operations from '../utils/_operations.js';

import styles from '../styles.less';

export default class MyPicture extends Component {

  static defaultProps = {
    api: {},
    value: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      index: 0,
    }
  }

  /**
   * 点击图片弹出 Modal 框，显示详图
   * @param  {Number} index [当前图片序号]
   */
  handleClick = (index) => {
    this.setState({
      visible: true,
      index,
    })
  }

  /**
   * 隐藏 Modal 弹框
   */
  onCancel = () => {
    this.setState({ visible: false });
  }

  /**
   * 下一张图片
   */
  onNext = () => {
    const { value } = this.props;
    const { index } = this.state;
    const length = value.length;
    if (index === length - 1) {
      message.destroy();
      message.info('已经是最后一张了');
    } else {
      this.setState({
        index: index + 1,
      })
    }
  }

  /**
   * 上一张图片
   */
  onPrev = () => {
    const { index } = this.state;
    if (index === 0) {
      message.destroy();
      message.info('已经是第一张了');
    } else {
      this.setState({
        index: index - 1,
      })
    }
  }

  render() {
    const { value, api } = this.props;
    const { visible, index } = this.state;
    const {
      toolTipApi= {},
      hPictureApi = {},
      modalApi = {},
      boxStyle = {},
    } = api;

    const pictureEle = value.map((val, i) => {
      const { path = '' } = val;
      const key = `my-picture-${i}`;
      const newBoxStyle = {
        ...boxStyle,
        backgroundImage: `url(${path})`,
      };
      return (
        <div className={styles.pictureItemWraper} key={key}>
          <Tooltip {...toolTipApi} title="点击显示详图">
            <div
              className={styles.pictureItem}
              style={newBoxStyle}
              onClick={() => this.handleClick(i)}
            />
          </Tooltip>
        </div>
      );
    });

    const operations = [
      { value: 'prev', label: '上一张', onClick: this.onPrev },
      { value: 'next', label: '下一张', onClick: this.onNext },
      ..._operations,
    ];

    const src = value[index] && value[index].path;
    const HPictureProps = {
      ...hPictureApi,
      src,
      operations,
    }

    const ModalProps = {
      title: '详图',
      ...modalApi,
      footer: false,
      visible,
      onCancel: this.onCancel,
    }

    return (
      <div className={styles.picture}>
        {pictureEle}
        <Modal {...ModalProps}>
          <HPicture {...HPictureProps} />
        </Modal>
      </div>
    )
  }

}

MyPicture.propTypes = {
  value: propTypes.arrayOf(propTypes.object),
  api: propTypes.object,
}

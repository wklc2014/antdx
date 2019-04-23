/**
 * 图片展示
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Tooltip, Modal, message } from 'antd';

import HPictureWraper from '../../HPicture/HPictureWraper.jsx';
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

  handleClick = (idx) => {
    this.setState({
      index: idx,
      visible: true,
    });
  }

  onVisible = (status) => {
    const { onVisible = () => {} } = this.props;
    this.setState({
      visible: false
    }, () => {
      onVisible(status);
    });
  }

  render() {
    const { api, value } = this.props;
    const { index, visible } = this.state;
    const {
      tooltipApi= {},
      pictureApi = {},
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
          <Tooltip {...tooltipApi} title="点击显示详图">
            <div
              className={styles.pictureItem}
              style={newBoxStyle}
              onClick={() => this.handleClick(i)}
            />
          </Tooltip>
        </div>
      );
    });

    const source = value.map(v => v.path);
    const HPictureWraperProps = {
      ...pictureApi,
      source,
      index,
    }

    const ModalProps = {
      title: '详图',
      ...modalApi,
      footer: false,
      visible,
      onCancel: () => this.onVisible('cancel'),
      onOk: () => this.onVisible('ok'),
    }

    return (
      <div className={styles.picture}>
        {pictureEle}
        {visible && (
          <Modal {...ModalProps}>
            <HPictureWraper {...HPictureWraperProps} />
          </Modal>
        )}
      </div>
    )
  }

}

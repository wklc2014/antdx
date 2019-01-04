/**
 * 图片展示
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Tooltip, Modal, message } from 'antd';

import HPictureWraper from '../../HPicture/HPictureWraper.jsx';
import hocModal from '../../Hoc/hocModal.js';
import styles from '../styles.less';

class MyPicture extends Component {

  static defaultProps = {
    api: {},
    value: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  handleClick = (idx) => {
    this.setState({
      index: idx,
    }, this.props.onVisible);
  }

  render() {
    const { value, api, visible } = this.props;
    const { index } = this.state;
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
      source,
      index,
    }

    const ModalProps = {
      title: '详图',
      ...modalApi,
      footer: false,
      visible,
      onCancel: this.props.onCancel,
      onOk: this.props.onOk,
    }

    return (
      <div className={styles.picture}>
        {pictureEle}
        <Modal {...ModalProps}>
          <HPictureWraper {...HPictureWraperProps} />
        </Modal>
      </div>
    )
  }

}

MyPicture.propTypes = {
  value: propTypes.arrayOf(propTypes.object),
  api: propTypes.object,
}

export default hocModal(MyPicture);

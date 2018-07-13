/**
 * 图片显示区域
 */
import React from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Alert } from 'antd';

import styles from './styles.less';

export default function HPictureView(props) {

  const {
    src,
    width,
    rotate,
    positionX,
    positionY,
    tips,
    onDrag,
    onWheel,
    onDoubleClick,
  } = props;

  if (!!tips) {
    return (
      <div className={styles.box}>
        <Alert message={tips} showIcon type="error" />
      </div>
    )
  }

  const picStyle = {
    backgroundImage: `url(${src})`,
    width,
    transform: `rotate(${rotate}deg)`,
  }

  const handleStyle = {
    transform: `rotate(${rotate}deg)`,
  }

  return (
    <div className={styles.box}>
      <Draggable
        position={{ x: positionX, y: positionY }}
        onDrag={onDrag}
        handle={`.${styles.handle}`}
      >
        <div className={styles.drag}>
          <div className={styles.pic} style={picStyle} />
          <div
            className={styles.handle}
            onWheel={onWheel}
            onDoubleClick={onDoubleClick}
            style={handleStyle}
          />
        </div>
      </Draggable>
    </div>
  )
}

HPictureView.propTypes = {
  /**
   * 图片 url 地址
   * @type {string}
   */
  src: propTypes.string.isRequired,

  /**
   * 图片显示宽度
   * @type {number}
   */
  width: propTypes.number.isRequired,

  /**
   * 图片显示旋转角度
   * @type {Number}
   */
  rotate: propTypes.number,

  /**
   * 图片显示 x 坐标
   * @type {Number}
   */
  positionX: propTypes.number,

  /**
   * 图片显示 y 坐标
   * @type {Number}
   */
  positionY: propTypes.number,

  /**
   * 图片加载错误提示信息
   * @type {String}
   */
  tips: propTypes.string,

  /**
   * 鼠标事件
   * @type {func}
   */
  onWheel: propTypes.func.isRequired,

  /**
   * 双击事件
   * @type {func}
   */
  onDoubleClick: propTypes.func.isRequired,

  /**
   * 拖拽事件
   * @type {func}
   */
  onDrag: propTypes.func.isRequired,
}

HPictureView.defaultProps = {
  rotate: 0,
  positionX: 0,
  positionY: 0,
  tips: '',
}

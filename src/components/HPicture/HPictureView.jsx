/**
 * 图片显示区域
 */
import React from 'react';
import propTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Alert } from 'antd';

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

  const wraperStyle = {
    width: '100%',
    height: '100%',
    border: '1px solid #ddd',
    overflow: 'hidden',
    position: 'relative',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  if (!!tips) {
    return (
      <div style={wraperStyle}>
        <Alert message={tips} showIcon type="error" />
      </div>
    )
  }

  const picStyle = {
    backgroundImage: `url(${src})`,
    width,
    transform: `rotate(${rotate}deg)`,
    zIndex: '1',
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }

  const handleStyle = {
    transform: `rotate(${rotate}deg)`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '2',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  }

  return (
    <div style={wraperStyle}>
      <Draggable
        position={{ x: positionX, y: positionY }}
        onDrag={onDrag}
        handle=".hpictureview-handle"
      >
        <div style={{ display: 'inline-block' }}>
          <div style={picStyle}>
            <div style={{ paddingBottom: '100%' }} />
          </div>
          <div
            className="hpictureview-handle"
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

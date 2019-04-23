/**
 * 前端水印组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import generateDataBase64ByCanvas from './utils/generateDataBase64ByCanvas.js';
import styles from './styles.less';

const WARTER_MARK_DOM_ID = `warter-mark-dom-id-${new Date().getTime()}`;

class WarterMark extends Component {

  static defaultProps = {
    text: 'canvas',
    textAlign: 'middle',
    textRotate: -20,
    fontColor: '#000',
    fontFamily: 'Arial',
    fontSize: 20,
    fontShadowColor: 'rgba(0, 0, 0, 0.5)',
    fontShadowOffsetX: 3,
    fontShadowOffsetY: 3,
    fontShadowBlur: 3,
    backgroundColor: '#fff',
    maskWidth: 200,
    maskHeight: 100,
    maskOpacity: 1,
    style: {},
  }

  componentDidMount() {
    this.renderWarterMark(this.props);
    this.checkWarterMark();
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.renderWarterMark(nextProps);
    }
  }

  checkWarterMark = () => {
    const mutationObserver = new MutationObserver((mutations, instance) => {
      const dom = document.getElementById(WARTER_MARK_DOM_ID);
      if (!dom) {
        this.renderWarterMark(this.props);
      }
    });
    const config = {
      attributes: true,
      childList: true,
      characterData: true
    }
    mutationObserver.observe(document.body, config);
  }

  renderWarterMark = (props) => {
    const params = {
      text: props.text,
      textAlign: props.textAlign,
      textRotate: props.textRotate,
      fontColor: props.fontColor,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontShadowColor: props.fontShadowColor,
      fontShadowOffsetX: props.fontShadowOffsetX,
      fontShadowOffsetY: props.fontShadowOffsetY,
      fontShadowBlur: props.fontShadowBlur,
      backgroundColor: props.backgroundColor,
      maskWidth: props.maskWidth,
      maskHeight: props.maskHeight,
      maskOpacity: props.maskOpacity,
    };
    const warterMark = generateDataBase64ByCanvas(params);
    let dom = document.getElementById(WARTER_MARK_DOM_ID);
    if (!dom) {
      dom = document.createElement('div');
      dom.id = WARTER_MARK_DOM_ID;
      dom.className = styles.warterMark;
    }
    dom.style.backgroundImage = `url(${warterMark})`;
    document.body.appendChild(dom);
  }

  render() {
    return null;
  }

}

WarterMark.propTypes = {
  /**
   * 水印文本-内容
   * @type {String}
   */
  text: propTypes.string,

  /**
   * 水印文本-对其方式
   * @type {String}
   */
  textAlign: propTypes.string,

  /**
   * 水印文本-旋转角度
   * @type {Number}
   */
  textRotate: propTypes.number,

  /**
   * 水印文本-颜色
   * @type {String}
   */
  fontColor: propTypes.string,

  /**
   * 水印文本-字体
   * @type {String}
   */
  fontFamily: propTypes.string,

  /**
   * 水印文本-大小
   * @type {Number}
   */
  fontSize: propTypes.number,

  /**
   * 文本阴影颜色
   * @type {String}
   */
  fontShadowColor: propTypes.string,

  /**
   * 文本阴影 x 偏移
   * @type {Number}
   */
  fontShadowOffsetX: propTypes.number,

  /**
   * 文本阴影 y 偏移
   * @type {Number}
   */
  fontShadowOffsetY: propTypes.number,

  /**
   * 轻微模糊阴影
   * @type {Number}
   */
  fontShadowBlur: propTypes.number,

  /**
   * 背景颜色
   * @type {String/Boolean}
   */
  backgroundColor: propTypes.oneOfType([
    propTypes.string,
    propTypes.bool,
  ]),

  /**
   * 生成图像宽度
   * @type {Number}
   */
  maskWidth: propTypes.number,

  /**
   * 生成图像高度
   * @type {Number}
   */
  maskHeight: propTypes.number,

  /**
   * 生成图像透明度
   * @type {Number}
   */
  maskOpacity: propTypes.number,

  /**
   * 水印 css 样式
   * @type {Object}
   */
  style: propTypes.object,
}

export default WarterMark;

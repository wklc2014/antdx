/**
 * 单张图片显示效果
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';

import HPictureView from './HPictureView.jsx';
import HPictureOperation from './HPictureOperation.jsx';

import asyncLoadImage from './utils/asyncLoadImage.js';
import _operations from './utils/_operations.js';

import styles from './styles.less';

export default class HPicture extends Component {

  static defaultProps = {
    className: '',
    view: {
      width: '100%',
      height: 400,
    },
    src: '',
    width: 0,
    rotate: 0,
    positionX: 0,
    positionY: 0,
    rotateRate: 3,
    zoomRate: 3,
    actions: true,
    onPrev: null,
    onNext: null,
  }

  constructor(props) {
    super(props);
    const {
      width = 0,
      rotate = 0,
      positionX = 0,
      positionY = 0,
    } = props;
    this.state = {
      /**
       * 图片原始宽度
       * @type {Number}
       */
      originWidth: 0,

      /**
       * 图片原始高度
       * @type {Number}
       */
      originHeight: 0,

      /**
       * 图片最佳显示宽度
       * @type {Number}
       */
      bestWidth: 0,

      /**
       * 图片显示宽度
       * @type {Number}
       */
      width,

      /**
       * 图片显示旋转角度
       * @type {Number}
       */
      rotate,

      /**
       * 图片显示 x 坐标
       * @type {Number}
       */
      positionX,

      /**
       * 图片显示 y 坐标
       * @type {Number}
       */
      positionY,

      /**
       * 图片加载错误提示信息
       * @type {String}
       */
      tips: '',
    }
  }

  componentDidMount() {
    const { src } = this.props;
    const params = this.getChangeState({}, this.props);
    const isInit = !params.width;
    this.planRender(src, params, isInit);
    window.addEventListener('resize', this.planWindowResize);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { src: prevSrc } = this.props;
    const { src: nextSrc } = nextProps;
    const params = this.getChangeState(this.props, nextProps);
    if (nextSrc && nextSrc !== prevSrc) {
      // 图片地址改变后，重新 planRender
      this.planRender(nextSrc, params);
    } else {
      // 仅仅是其他 props 改变
      this.setState(params);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.planWindowResize);
  }

  /**
   * 计算 props 改变时，引起的 state 改变
   * @param  {Object} prev [当前 props]
   * @param  {Object} next [新的 props]
   * @return {object}      [改变的 state]
   */
  getChangeState = (prev = {}, next = {}) => {
    const params = {};
    const stateKeys = ['width', 'rotate', 'positionX', 'positionY']
    stateKeys.forEach((key) => {
      if (next[key] && prev[key] !== next[key]) {
        params[key] = next[key];
      }
    })
    return params;
  }

  /**
   * 计算图片最佳显示
   * @param  {number} originWidth  [原始宽度]
   * @param  {number} originHeight [原始高度]
   * @return {object}              [图片最佳显示的宽度和高度]
   */
  getPictureBestView = (originWidth, originHeight) => {
    const viewDom = this.inst;
    if (!viewDom) {
      return { width: originWidth, height: originHeight }
    }
    const viewWidth = viewDom.clientWidth;
    const viewHeight = viewDom.clientHeight;
    let imageWidth = originWidth;
    let imageHeight = originHeight;
    if (originWidth > viewWidth || originHeight > viewHeight) {
      const rate = originWidth / originHeight;
      imageWidth = viewWidth;
      imageHeight = viewWidth / rate;
      if (imageHeight > viewHeight) {
        imageHeight = viewHeight;
        imageWidth = viewHeight * rate;
      }
    }
    return { width: imageWidth, height: imageHeight }
  }

  /**
   * 窗口变化重置 bestWidth
   */
  planWindowResize = () => {
    const { originWidth, originHeight } = this.state;
    if (originWidth && originHeight) {
      const bestSize = this.getPictureBestView(originWidth, originHeight);
      this.setState({ bestWidth: bestSize.width });
    }
  }

  /**
   * 渲染新的图片
   * @param  {string}  src    [图片地址]
   * @param  {Object}  params [state 改变]
   * @param  {Boolean} isInit [是否是初始化渲染]
   * @return {promise}        [图片渲染结果]
   */
  planRender = (src, params = {}, isInit = false) => {
    asyncLoadImage(src)
      .then((image) => {
        const originWidth = image.width;
        const originHeight = image.height;
        const bestSize = this.getPictureBestView(originWidth, originHeight);
        const newState = {
          originWidth,
          originHeight,
          bestWidth: bestSize.width,
          ...params,
          tips: '',
        };
        if (isInit) {
          newState.width = bestSize.width;
        }
        this.setState(newState);
      })
      .catch((e) => {
        let tips = '图片加载错误！';
        try {
          tips = e.toString();
        } catch (e) {}
        this.setState({ tips, ...params });
      });
  }

  /**
   * 鼠标缩放
   * @param  {event} event [鼠标事件]
   */
  onWheel = (event) => {
    event.preventDefault();
    const { zoomRate, rotateRate } = this.props;
    const { rotate } = this.state;
    const { shiftKey } = event;
    const zoom = this.getPicZoom();
    const type = shiftKey ? 'rotate' : 'zoom';
    const value = shiftKey
      ? rotate + (rotateRate * (event.deltaY > 0 ? -1 : 1))
      : zoom + (zoomRate * (event.deltaY > 0 ? -1 : 1));
    this.operating(type, value);
  }

  /**
   * 双击还原显示图片
   */
  onDoubleClick = () => {
    this.operating('reset');
  }

  /**
   * 图片执行各种变化
   * @param  {string} type [图片变化类型]
   * @param  {number} num  [zoom, rotate 变化值]
   */
  operating = (type, num) => {
    const { onPrev, onNext } = this.props;
    const { originWidth, bestWidth } = this.state;
    switch (type) {
      case 'zoom':
        this.setState({
          width: lodash.round(originWidth * num * 0.01),
        });
        break;
      case 'reset':
        this.setState({
          width: bestWidth,
          rotate: 0,
          positionX: 0,
          positionY: 0,
        });
        break;
      case 'rotate':
        this.setState({
          rotate: num,
        });
        break;
      default:
    }
  }

  /**
   * 鼠标拖动
   */
  onDrag = (e, data) => {
    this.setState({
      positionX: data.x,
      positionY: data.y,
    });
  }

  /**
   * 操作按钮
   */
  getOperations = () => {
    const { operations } = this.props;
    const { tips } = this.state;
    if (is.boolean(operations)) {
      if (!operations) {
        return [];
      }
      return setActions(_operations);
    }
    return setActions(operations);

    function setActions(array = []) {
      return array.map((btn) => {
        let disabled = false;
        switch (btn.value) {
          case 'zoom':
          case 'rotate':
          case 'reset':
            disabled = !!tips;
            break;
          default:
        }
        return { ...btn, disabled };
      })
    }
  }

  /**
   * 获取图片缩放级别
   */
  getPicZoom = () => {
    const { width, originWidth } = this.state;
    return width / originWidth * 100;
  }

  /**
   * 获取图片显示区域大小
   */
  getPicViews = () => {
    const { view } = this.props;
    if (is.string(view) || is.number(view)) {
      return { width: view, height: view };
    } else if (is.array(view)) {
      if (view.length) {
        return { width: view[0], height: view[0] || view[1] };
      }
      throw Error('view 不能是空数组');
    }
    return view;
  }

  render() {
    const {
      src,
      className,
    } = this.props;

    const {
      width,
      rotate,
      positionX,
      positionY,
      tips,
    } = this.state;

    const zoom = this.getPicZoom();
    const operations = this.getOperations();
    const view = this.getPicViews();

    const HPictureViewProps = {
      src,
      width,
      rotate,
      positionX,
      positionY,
      tips,
      onDoubleClick: this.onDoubleClick,
      onDrag: this.onDrag,
      onWheel: this.onWheel,
    }

    const HPictureOperationProps = {
      rotate,
      zoom,
      operations,
      onChange: this.operating,
    }

    return (
      <section className={`${className} ${styles.wraper}`}>
        <div style={view} ref={inst => this.inst = inst}>
          <HPictureView {...HPictureViewProps} />
        </div>
        <HPictureOperation {...HPictureOperationProps} />
      </section>
    )
  }
}

HPicture.propTypes = {
  /**
   * 组件容器 css 类
   * @type {String}
   */
  className: propTypes.string,

  /**
   * 容器大小
   * @type {string/array/object}
   */
  view: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.arrayOf(propTypes.string),
  ]),

  /**
   * 图片 url 地址
   * @type {String}
   */
  src: propTypes.string,

  /**
   * 图片默认显示宽度
   * @type {number}
   */
  width: propTypes.number,

  /**
   * 图片默认旋转角度
   * @type {number}
   */
  rotate: propTypes.number,

  /**
   * 图片默认拖拽的 x 坐标
   * @type {number}
   */
  positionX: propTypes.number,

  /**
   * 图片默认拖拽的 y 坐标
   * @type {number}
   */
  positionY: propTypes.number,

  /**
   * 图片单次旋转比例
   * @type {number}
   */
  rotateRate: propTypes.number,

  /**
   * 图片单次缩放比例
   * @type {number}
   */
  zoomRate: propTypes.number,

  /**
   * 图片上一张
   * @type {number}
   */
  onPrev: propTypes.func,

  /**
   * 图片下一张
   * @type {number}
   */
  onNext: propTypes.func,

  /**
   * 图片操作按钮
   * @type {array/boolean}
   */
  operations: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.shape({
      value: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
    })),
    propTypes.bool,
  ]),
}

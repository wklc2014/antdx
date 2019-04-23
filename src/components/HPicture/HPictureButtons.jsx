/**
 * 图片操作区域
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button, Popover, Row, Col, Slider, InputNumber } from 'antd';
import styles from './styles.less';

const ButtonGroup = Button.Group;

class HPictureButtons extends Component {

  static defaultProps = {
    buttons: [],
    rotate: 0,
    zoom: 100,
  }

  getPopoverContent = (type, values) => {
    const SliderProps = {
      onChange: e => this.props.onChange(type, e),
      value: values[type],
    };

    const InputNumberProps = {
      ...SliderProps,
      precision: 2,
      step: 0.01,
      style: {
        width: '100%',
      },
    }

    if (type === 'rotate') {
      SliderProps.marks = {
        '0': '0',
        '90': '90',
        '180': '180',
        '270': '270',
        '360': '360',
      };
      SliderProps.min = 0;
      SliderProps.max = 360;
    } else if (type === 'zoom') {
      SliderProps.marks = {
        '0': '0',
        '50': '50',
        '100': '100',
        '150': '150',
        '200': '200',
        '250': '250',
        '300': '300',
      };
      SliderProps.min = 0;
      SliderProps.max = 300;
    } else {
      return null;
    }

    return (
      <Row type="flex" gutter={24} >
        <Col span={18}>
          <Slider {...SliderProps} />
        </Col>
        <Col span={6} style={{ paddingTop: 5 }}>
          <InputNumber {...InputNumberProps} />
        </Col>
      </Row>
    )
  }

  getPopoverTitle = (type) => {
    if (type === 'rotate') {
      return '旋转角度(deg)';
    } else if (type === 'zoom') {
      return '缩放比例(%)';
    }
    return '标题';
  }

  render() {
    const {
      buttons,
      rotate,
      zoom,
    } = this.props;

    const PopoverStyle = { width: 400 };
    const values = { rotate, zoom };

    const operationsEle = buttons.map((val, i) => {
      const key = i;

      if (val.value === 'rotate' || val.value === 'zoom') {
        const content = this.getPopoverContent(val.value, values);
        const title = this.getPopoverTitle(val.value);
        return (
          <Popover
            key={key}
            content={content}
            overlayStyle={PopoverStyle}
            title={title}
            trigger="click"
          >
            <Button disabled={val.disabled}>{val.label}</Button>
          </Popover>
        )
      }

      const handleClick = () => {
        switch (val.value) {
          case 'reset':
            this.props.onChange(val.value);
            break;
          case 'prev':
            this.props.onPrev();
            break;
          case 'next':
            this.props.onNext();
            break;
        }
      }

      return (
        <Button
          key={key}
          onClick={handleClick}
          disabled={val.disabled}
        >
          {val.label}
        </Button>
      )
    })

    return (
      <div className={styles.operations}>
        <ButtonGroup>{operationsEle}</ButtonGroup>
      </div>
    )
  }
}


HPictureButtons.propTypes = {
  /**
   * 图片操作按钮
   * @type {array/boolean}
   */
  operations: propTypes.array,

  /**
   * 图片旋转角度
   * @type {number}
   */
  rotate: propTypes.number,

  /**
   * 图片缩放比例
   * @type {number}
   */
  zoom: propTypes.number,

  /**
   * 图片 onChange 事件
   * @type {func}
   */
  onChange: propTypes.func.isRequired,
}



export default HPictureButtons;

import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, Modal } from 'antd';

import Antdx from '../../components/index.js';
import exampleConfigs from '../../components/HForm/exampleConfigs/exampleConfigs.js';
import controlConfigs from './common/index.js';
import path_1 from './images/1.jpg';
import path_2 from './images/2.jpg';
import path_3 from './images/3.jpg';
import path_4 from './images/4.jpg';
import path_5 from './images/5.jpg';
import path_6 from './images/6.jpg';

const { HForm, getDefaultValues } = Antdx;

class ExampleHForm extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    const values = getDefaultValues({ configs: exampleConfigs });
    const controls = getDefaultValues({ configs: controlConfigs });
    this.state = {
      values: {
        imageView: [
          { path: path_1 },
          { path: path_2 },
          { path: path_3 },
          { path: path_4 },
          { path: path_5 },
          { path: path_6 },
        ],
        ...values,
      },
      controls: {
        ...controls,
      },
      result: '',
      visible: false,
    }
  }

  onChange = ({ id, value }) => {
    this.setState({
      values: {
        ...this.state.values,
        [id]: value,
      }
    }, () => {

    })
  }

  onChangeControls = ({ id, value }) => {
    if (id === 'validateForm') {
      this.inst.setFormValidate();
    } else if (id === 'resetForm') {
      this.inst.resetForm();
    } else if (id === 'errorForm') {
      const result = this.inst.getFormValidate();
      this.setState({ result, visible: true });
    } else {
      this.setState({
        controls: {
          ...this.state.controls,
          [id]: value,
        }
      })
    }
  }

  onModalOk = () => {
    this.setState({ visible: false });
  }

  onModalCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { controls, result, visible } = this.state;
    console.log('values>>>', this.state.values);

    const HFormPropsRight = {
      ref: inst => this.inst = inst,
      cols: controls.cols,
      layout: controls.layout,
      configs: exampleConfigs,
      onChange: this.onChange,
      extMap: {
        space: controls.space,
        layout: controls.flex,
      },
      values: this.state.values,
    }

    const HFormPropsLeft = {
      layout: 'vertical',
      configs: controlConfigs,
      onChange: this.onChangeControls,
      values: controls,
    }

    const ModalProps = {
      title: '表单验证结果',
      width: 500,
      visible,
      onOk: this.onModalOk,
      onCancel: this.onModalCancel,
    }

    return (
      <div>
        <Card title="动态修改表单参数">
          <Card.Grid style={{ width: '20%' }}>
            <HForm {...HFormPropsLeft} />
          </Card.Grid>
          <Card.Grid style={{ width: '80%' }}>
            <HForm {...HFormPropsRight} />
          </Card.Grid>
        </Card>
        <Modal {...ModalProps}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </Modal>
      </div>
    )
  }

}

ExampleHForm.propTypes = {

}

export default ExampleHForm;

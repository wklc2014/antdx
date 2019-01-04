import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, Modal } from 'antd';

import HForm from '../../lib/HForm/HForm.jsx';
import exampleConfigs from '../../lib/HForm/exampleConfigs/exampleConfigs.js';
import getConfigInitValue from '../../lib/HForm/lib/getConfigInitValues.js';
import controlConfigs from './common/index.js';
import hocModal from '../../lib/Hoc/hocModal.js';
import path_1 from './images/1.jpg';
import path_2 from './images/2.jpg';
import path_3 from './images/3.jpg';
import path_4 from './images/4.jpg';
import path_5 from './images/5.jpg';
import path_6 from './images/6.jpg';

class ExampleHForm extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    const values = getConfigInitValue({ configs: exampleConfigs });
    const controls = getConfigInitValue({ configs: controlConfigs });
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
    }
  }

  onChange = ({ id, value }) => {
    this.setState({
      values: {
        ...this.state.values,
        [id]: value,
      }
    })
  }

  onChangeControls = ({ id, value }) => {
    if (id === 'validateForm') {
      this.inst.validateForm();
    } else if (id === 'resetForm') {
      this.inst.resetForm();
    } else if (id === 'errorForm') {
      const result = this.inst.getFormValidate();
      this.setState({ result }, this.props.onVisible);
    } else {
      this.setState({
        controls: {
          ...this.state.controls,
          [id]: value,
        }
      })
    }
  }

  render() {
    const { controls, result } = this.state;

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
      visible: this.props.visible,
      onOk: this.props.onOk,
      onCancel: this.props.onCancel,
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

export default hocModal(ExampleHForm);

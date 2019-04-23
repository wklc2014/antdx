import React, { Component } from 'react';
import propTypes from 'prop-types';
import Antdx from '../../components/index.js';

const { HFormItem } = Antdx;

class Home extends Component {

  static defaultProps = {

  }

  state = {
    values: {},
  }

  onChange = ({ id, value }) => {
    if (id === 'btn') {
      if (value === '1') {
        this.inst.setFormValidate();
      } else if (value === '2') {
        this.inst.resetForm();
      } else if (value === '3') {
        const ret = this.inst.getFormValidate();
        console.log('ret>>>', ret);
      }
    } else {
      this.setState({
        values: {
          ...this.state.values,
          [id]: value,
        }
      })
    }
  }

  onInputChange = (e) => {
    this.setState({
    })
  }

  render() {
    const HFormItemProps_1 = {
      ref: inst => this.inst = inst,
      config: {
        id: 'baseTag',
        type: 'input',
        ext: {
          rules: [
            { required: true, message: '用户姓名必填' },
          ]
        }
      },
      extMap: {
        label: '用户姓名',
      },
      onChange: this.onChange,
      values: this.state.values,
    }

    const HFormItemProps_2 = {
      config: {
        id: 'btn',
        type: 'button',
        api: {
          type: 'primary',
        },
        ext: {
          data: [
            {
              value: '1',
              label: '验证',
            },
            {
              value: '2',
              label: '重置',
            },
            {
              value: '3',
              label: '获取',
            },
          ]
        }
      },
      extMap: {
        label: false,
      },
      onChange: this.onChange,
      // values: {},
    }

    return (
      <div>
        <h2>Home</h2>
        <div style={{ marginBottom: 16 }}>
          <HFormItem {...HFormItemProps_1} />
          <HFormItem {...HFormItemProps_2} />
        </div>
      </div>
    )
  }

}

Home.propTypes = {

}

export default Home;

/**
 * 动态加载数据选项
 */
import React, { Component } from 'react';
import querystring from 'querystring';
import propTypes from 'prop-types';
import lodash from 'lodash';
import { Select } from 'antd';

import request from '../utils/request.js';

const { Option } = Select;
let timeout;

export default class MySelectFetch extends Component {

  static defaultProps = {
    api: {},
    ext: {},
    value: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  handleChange = (value) => {
    if (!value) {
      this.setState({ data: [] });
      return;
    }

    const that = this;
    const { ext = {} } = this.props;
    const { service = {} } = ext;
    const { url, method, params, time, key = 'name' } = service;

    if (timeout) {
      window.clearTimeout(timeout);
      timeout = null;
    }

    async function search() {
      try {
        lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        const compiled = lodash.template(params);
        const newParams = compiled({ value });
        const resp = await request(
          url,
          querystring.parse(newParams),
          { method },
        );
        const data = resp.success ? resp.data : [];
        const list = data.map(v => ({ name: v[key] }));
        that.setState({ data: list });
      } catch (e) {
      }
    }

    timeout = setTimeout(search, time);
  }

  render() {
    const {
      api,
      onChange,
      value,
    } = this.props;

    const { data } = this.state;

    const newProps = {
      defaultActiveFirstOption: false,
      showArrow: false,
      filterOption: false,
      value,
      ...api,
      mode: 'combobox',
      onSearch: this.handleChange,
      onChange,
    }

    const Children = data.map((v, i) => (
      <Option key={i} value={v.name}>
        {v.name}
      </Option>
    ));

    return <Select {...newProps}>{Children}</Select>;
  }

}

MySelectFetch.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

/**
 * 动态加载数据选项
 * type: service
 */
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { AutoComplete } from 'antd';

let timeout;
const { Option } = AutoComplete;

export default function ItemService({ api, ext, onChange }) {
  const [data, updateData] = useState([]);

  function handleSearch(value) {
    if (!value) {
      updateData([]);
      return;
    }

    if (timeout) {
      window.clearTimeout(timeout);
      timeout = null;
    }

    function search() {
      try {
        ext.service(value).then(resp => {
          const data = ext.callback(resp);
          updateData(data);
        });
      } catch (e) {
        console.error('my service error>>>', e);
      }
    }

    timeout = setTimeout(search, ext.time || 300);
  }

  const newProps = {
    options: data.map(v => <Option key={v.value}>{v.label}</Option>),
    onSearch: handleSearch,
    ...api,
    onChange,
  };

  return <AutoComplete {...newProps} />;
}

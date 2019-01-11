/**
 * 可编辑的 Tag 组件
 * 对 Tag 添加、删除、编辑
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';
import { Tag, Input, Tooltip, Button } from 'antd';
import HTagAdd from './HTagAdd.jsx';
import HTagEdit from './HTagEdit.jsx';

class HTagGroup extends Component {

  static defaultProps = {
    buttonApi: {},
    editable: true,
    inputApi: {},
    maxLength: 10,
    onChange: () => {},
    tags: [],
    tagApi: true,
  }

  // 删除 Tag
  onRemove = (tag, index) => {
    const { tags } = this.props;
    const newtags = tags.filter((v, i) => v !== tag);
    this.props.onChange(newtags);
  }

  // 添加标签确认事件
  onInputConfirm = (tag) => {
    const { tags } = this.props;
    const value = lodash.trim(tag);
    const newTags = value ? [...tags, value] : tags;
    this.props.onChange(newTags);
  }

  // 编辑标签确认事件
  onEditConfirm = (tag, index) => {
    const { tags } = this.props;
    const text = lodash.trim(tag);
    const newTags = tags.map((v, i) => {
      if (index === i && text) {
        return text;
      }
      return v;
    })
    this.props.onChange(newTags);
  }

  /**
   * 渲染标签
   */
  renderTagElement = (tag, index) => {
    const { maxLength, inputApi, tagApi, editable } = this.props;
    const key = `tag-${index}`;

    const HTagEditProps = {
      key,
      inputApi,
      tag,
      tagApi,
      editable,
      maxLength,
      onRemove: () => this.onRemove(tag, index),
      onConfirm: (value) => this.onEditConfirm(value, index),
    }

    return <HTagEdit {...HTagEditProps} />
  }

  render() {
    const { buttonApi, inputApi, tags } = this.props;

    const HTagAddProps = {
      inputApi,
      buttonApi,
      onConfirm: this.onInputConfirm,
    };

    return (
      <div>
        {tags.map(this.renderTagElement)}
        <HTagAdd {...HTagAddProps} />
      </div>
    )
  }
}

HTagGroup.propTypes = {
  /**
   * 添加 Tag 的按钮组件的控制属性
   * @type {Object}
   */
  buttonApi: propTypes.object,

  /**
   * 标签是否可以编辑/修改
   * @type {Boolean}
   */
  editable: propTypes.bool,

  /**
   * 添加/编辑 Tag 的文本输入组件的 api
   * @type {Object}
   */
  inputApi: propTypes.object,

  /**
   * 标签文本显示的最大字数
   * 多余文本用省略号表示
   * 完整文本用 ToolTip 显示
   * @type {Number}
   */
  maxLength: propTypes.number,

  /**
   * 回调修改后的 Tag 标签
   * @return {Func}
   */
  onChange: propTypes.func,

  /**
   * 标签数组
   * @type {Array}
   */
  tags: propTypes.array,

  /**
   * Tag 组件的控制属性
   * @type {Object}
   */
  tagApi: propTypes.object,
}

export default HTagGroup;

/**
 * 可编辑的 Tag 组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';
import { Tag, Input, Tooltip, Button } from 'antd';

class TagEditAble extends Component {

  static defaultProps = {
    maxLength: 10,
    inputAttr: {},
    btnAttr: {},
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputVsible: false,
      editId: null,
      editValue: '',
    }
  }

  // 删除 Tag
  handleRemoveTag = (tag) => {
    const { tags } = this.props;
    const Newtags = tags.filter(v => v.id !== tag.id);
    this.props.onChange(Newtags);
  }

  // 编辑 Tag
  handleEditTag = (tag) => {
    if (tag.editable) {
      this.setState({
        editId: tag.id,
        editValue: tag.label,
      }, () => {
        this.refEditInput.focus();
      });
    }
  }

  // 添加 Tag 时，Input 组件 onChange 事件
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  // 点击添加标签按钮时，显示输入标签内容的 Input 组件
  handleShowInput = () => {
    this.setState({
      inputVisible: true,
    }, () => {
      this.refAddInput.focus();
    });
  }

  // 添加标签确认事件
  handleInputConfirm = () => {
    const { tags } = this.props;
    const { inputValue, inputVisible } = this.state;
    const id = lodash.now();
    const value = lodash.trim(inputValue);
    const newTags = value ? [...tags, { id, label: value, closable: true, editable: true }] : tags;
    this.setState({
      inputVisible: false,
      inputValue: '',
    }, () => {
      this.props.onChange(newTags);
    })
  }

  // 编辑标签确认事件
  handleEditConfirm = () => {
    const { tags } = this.props;
    const { editValue, editId } = this.state;
    const value = lodash.trim(editValue);
    const newTags = tags.map(v => {
      const val = {...v};
      if (v.id === editId && value) {
        val.label = value;
      }
      return val;
    })
    this.setState({
      editId: null,
      editValue: '',
    }, () => {
      this.props.onChange(newTags);
    })
  }

  // 编辑 Tag 时，Input 组件 onChange 事件
  handleEditChange = (e) => {
    this.setState({
      editValue: e.target.value,
    });
  }

  render() {
    const { tags = [], inputAttr, btnAttr, maxLength } = this.props;
    const { inputVisible, inputValue, editId, editValue } = this.state;

    const { text, ...restBtnAttr } = btnAttr;

    const ButtonProps = {
      ...restBtnAttr,
      size: 'small',
      type: 'dashed',
      onClick: this.handleShowInput,
    }

    const ButtonText = text || '+ 新标签';

    const commonInputProps = {
      ...inputAttr,
      type: 'text',
      size: 'small',
      style: {
        width: 80,
        marginRight: 8,
        ...inputAttr.style,
      },
    }

    const AddInputProps = {
      ...commonInputProps,
      value: inputValue,
      ref: inst => this.refAddInput = inst,
      onChange: this.handleInputChange,
      onBlur: this.handleInputConfirm,
      onPressEnter: this.handleInputConfirm,
    }

    return (
      <div>
        {tags.map((tag, index) => {
          const key = tag.id;
          const isLongTag = tag.label.length > maxLength;
          const tagText = isLongTag ? lodash.truncate(tag.label, { length: maxLength }) : tag.label;

          const TagProps = {
            key,
            closable: tag.closable,
            afterClose: () => this.handleRemoveTag(tag),
          }

          const TagSpanProps = {
            onClick: () => this.handleEditTag(tag),
          }

          const EditIputProps = {
            key,
            ...commonInputProps,
            value: editValue,
            ref: inst => this.refEditInput = inst,
            onChange: this.handleEditChange,
            onBlur: () => this.handleEditConfirm(),
            onPressEnter: () => this.handleEditConfirm(),
          }

          const tagElem = tag.editable && editId === tag.id ? <Input {...EditIputProps} /> : <Tag {...TagProps}><span {...TagSpanProps}>{tagText}</span></Tag>;

          return isLongTag ? <Tooltip title={tag.label} key={key}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible ? <Input {...AddInputProps} /> : <Button {...ButtonProps}>{ButtonText}</Button>}
      </div>
    )
  }

}

TagEditAble.propTypes = {
  tags: propTypes.arrayOf(propTypes.shape({
    id: propTypes.oneOfType([
      propTypes.string,
      propTypes.number,
    ]).isRequired,
    label: propTypes.string,
    closable: propTypes.bool,
    editable: propTypes.bool,
  })),
  onChange: propTypes.func,
  maxLength: propTypes.number,
  inputAttr: propTypes.object,
  btnAttr: propTypes.object,
}

export default TagEditAble;

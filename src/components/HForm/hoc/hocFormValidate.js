/**
 * 表单验证
 */
import React, { Component } from 'react';
import is from 'is_js';
import getfilterConfig from '../utils/getfilterConfig.js';
import getValidateByRules from '../utils/getValidateByRules.js';

export default function hocFormValidate(HForm) {
  return class extends Component {

    static defaultProps = {}

    constructor(props) {
      super(props);
      this.state = {
        /**
         * 记录表单元素是否首次输入
         * @type {Object}
         */
        touches: {},
      }
    }

    onChange = ({ id, value }) => {
      this.changeTouches(id);
      this.props.onChange({ id, value });
    }

    /**
     * 更新表单元素是否首次触发
     * @param  {String} id 表单元素 ID
     */
    changeTouches = (id) => {
      const { touches } = this.state;
      if (!touches[id]) {
        this.setState({
          touches: { ...touches, [id]: true },
        })
      }
    }

    /**
     * 获取表单配置 IDS
     */
    getConfigIds() {
      const { configs } = this.props;
      const ids = [];

      if (is.not.array(configs)) {
        return ids;
      }

      configs.filter(val => {
        const { extMap = {} } = val;
        return !extMap.hide;
      }).forEach(val => {
        const { config } = val;
        const newConfig = getfilterConfig(config);

        newConfig.forEach((v) => {
          v.id && ids.push(v.id);
        })
      })

      return ids;
    }

    /**
     * 获取所有表单验证结果
     */
    getAllValidate = () => {
      const { configs, values } = this.props;
      const { touches } = this.state;
      const validates = {};

      configs.forEach((val) => {
        const { config } = val;
        const newConfig = getfilterConfig(config);

        newConfig.forEach((val) => {
          const { id, ext = {} } = val;
          const { rules } = ext;

          // 待验证的值
          const value = values[id];
          const result = getValidateByRules({ value, rules });
          if (is.not.empty(result)) {
            validates[id] = {...result};
          }
        })
      })

      return validates;
    }

    /**
     * 获取表单验证结果
     */
    getFormValidate = (fields = []) => {
      const { configs, values } = this.props;
      const ids = this.getConfigIds();
      const target = fields.length ? fields : ids;
      const validate = this.getAllValidate();
      if (is.array(target)) {
        const errors = {};
        target.forEach((field) => {
          if (validate[field]) {
            errors[field] = {
              type: 'error',
              message: validate[field].help,
              value: values[field],
            };
          }
        })
        return errors;
      }
      return validate;
    }

    /**
     * 验证表单
     */
    validateForm = (fields = []) => {
      const { configs } = this.props;
      const ids = this.getConfigIds();
      const touches = {};
      ids.forEach((id) => {
        if (is.array(fields)) {
          if (fields.length === 0 || is.inArray(id, fields)) {
            touches[id] = true;
          }
        } else {
          touches[id] = true;
        }
      })
      this.setState({ touches });
    }

    /**
     * 重置表单
     */
    resetForm = () => {
      this.setState({ touches: {} });
    }

    render() {
      const { touches } = this.state;

      const HFormProps = {
        ...this.props,
        onChange: this.onChange,
        touches,
      }

      return <HForm {...HFormProps} />
    }
  }
}
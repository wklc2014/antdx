/**
 * 表单验证
 */
import React, { Component } from 'react';
import is from 'is_js';
import getfilterConfig from '../utils/getfilterConfig.js';
import getValidateByRules from '../utils/getValidateByRules.js';

export default function hocHForm(ComponentWraper) {
  return class extends Component {

    static defaultProps = {}

    constructor(props) {
      super(props);
      this.state = {
        /**
         * 记录表单元素验证结果
         * @type {Object}
         */
        validates: {},
      }
    }

    /**
     * 表单 onChange 事件
     * 处理表单元素值的搜集和验证
     */
    onChange = ({ id, value, validate }) => {
      const { validates } = this.state;
      this.setState({
        validates: {
          ...validates,
          ...validate,
        }
      })
      this.props.onChange({ id, value });
    }

    /**
     * 获取目标配置数组
     */
    getTargetConfigs = () => {
      const { configs, config } = this.props;
      if (config !== undefined) {
        return getfilterConfig(config);
      }
      if (is.array(configs)) {
        const newConfigs = [];
        configs.filter(val => {
          const { extMap = {} } = val;
          return !extMap.hide;
        }).forEach(val => {
          const { config } = val;
          newConfigs.push(...getfilterConfig(config));
        })
        return newConfigs;
      }
      return [];
    }


    /**
     * 获取表单配置 IDS
     */
    getConfigIds() {
      const newConfigs = this.getTargetConfigs();
      const ids = [];
      newConfigs.forEach((v) => {
        v.id && ids.push(v.id);
      })
      return ids;
    }

    /**
     * 获取特定表单验证结果
     */
    getTargetValidate = (targetIDs) => {
      const { values = {} } = this.props;
      const validates = {};
      const newConfigs = this.getTargetConfigs();
      newConfigs.forEach((val) => {
        const { id, ext = {} } = val;
        const { rules } = ext;

        if (is.inArray(id, targetIDs)) {
          // 待验证的值
          const value = values[id];
          const result = getValidateByRules({ value, rules });
          if (is.not.empty(result)) {
            validates[id] = {...result};
          }
        }
      })

      return validates;
    }

    /**
     * 获取表单验证结果
     */
    getFormValidate = (fields = []) => {
      const { values = {} } = this.props;
      const ids = this.getConfigIds();
      const target = is.array(fields) && fields.length ? fields : ids;
      const targetValidate = this.getTargetValidate(target);
      const validateResult = [];
      Object.keys(targetValidate).forEach(v => {
        validateResult.push({
          id: v,
          status: 'error',
          msg: targetValidate[v].msg,
          value: values[v],
        })
      })
      return validateResult;
    }

    /**
     * 验证表单
     */
    setFormValidate = (fields = []) => {
      const { validates } = this.state;
      const { values = {} } = this.props;
      const ids = this.getConfigIds();
      const target = is.array(fields) && fields.length ? fields : ids;
      const targetValidate = this.getTargetValidate(target);
      this.setState({
        validates: {
          ...validates,
          ...targetValidate,
        }
      });
    }

    /**
     * 重置表单
     */
    resetForm = () => {
      this.setState({ validates: {} });
    }

    render() {
      const { validates } = this.state;

      const ComponentWraperProps = {
        ...this.props,
        onChange: this.onChange,
        validates,
      }

      return <ComponentWraper {...ComponentWraperProps} />
    }
  }
}
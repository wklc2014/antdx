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
      const { touches } = this.state;
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
      const target = fields.length ? fields : ids;
      if (is.array(target)) {
        const targetValidate = this.getTargetValidate(target);
        const validateResult = [];
        Object.keys(targetValidate).forEach(v => {
          validateResult.push({
            id: v,
            type: 'error',
            message: targetValidate[v].help,
            value: values[v],
          })
        })
        return validateResult;
      }
      return [];
    }

    /**
     * 验证表单
     */
    validateForm = (fields = []) => {
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

      const ComponentWraperProps = {
        ...this.props,
        onChange: this.onChange,
        touches,
      }

      return <ComponentWraper {...ComponentWraperProps} />
    }
  }
}
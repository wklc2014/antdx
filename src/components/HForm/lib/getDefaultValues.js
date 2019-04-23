/**
 * 获取配置配置值
 */
import is from 'is_js';
import getfilterConfig from '../utils/getfilterConfig.js';

export default function getDefaultValues(params = {}) {

  const { configs = [] } = params;

  const initValues = {};

  if (is.not.array(configs)) {
    return initValues;
  }

  configs.forEach((val) => {
    const { config } = val;
    const newConfig = getfilterConfig(config);

    newConfig.forEach((v) => {
      const { ext = {} } = v;
      const { initValue } = ext;
      if (initValue) {
        initValues[v.id] = initValue;
      }
    })
  })

  return initValues;
}
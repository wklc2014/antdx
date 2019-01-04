/**
 * 获取配置配置值
 */
import is from 'is_js';

export default function getConfigInitValues(params = {}) {

  const { configs = [] } = params;

  const initValues = {};

  if (is.not.array(configs)) {
    return initValues;
  }

  configs.forEach((val) => {
    const { config } = val;
    const newConfig = is.array(config) ? config : [config];

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
import is from 'is_js';

/**
 * 获取所有表单元素的配置 id
 */
export default function getFormConfigIds(params = {}) {

  const { configs = [] } = params;

  const ids = [];

  if (is.not.array(configs)) {
    return ids;
  }

  configs
    .filter((val) => {
      const { extMap = {} } = val;
      return !extMap.hide;
    })
    .forEach((val) => {
      const { config } = val;
      const newConfig = is.array(config) ? config : [config];

      newConfig
        .filter((val) => {
          const { ext = {} } = val;
          return !ext.hide;
        })
        .forEach((v) => {
          v.id && ids.push(v.id);
        })
    })

  return ids;
}

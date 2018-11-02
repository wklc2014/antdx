import is from 'is_js';

/**
 * 获取配置表单元素的 id
 * @param  {Array}  configs     [表单配置]
 * @return {Array}              [表单元素ids]
 */
export default function getFormConfigIds(params = {}) {

  const { configs = [] } = params;

  const ids = [];

  if (is.not.array(configs)) {
    return ids;
  }

  configs.forEach((val) => {
    const { config } = val;
    if (is.array(config)) {
      config.forEach((v) => {
        v.id && ids.push(v.id);
      })
    } else {
      config.id && ids.push(config.id);
    }
  })

  return ids;
}

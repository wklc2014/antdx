/**
 * 获取配置中默认的表单值
 */
import is from 'is_js';

export default function getFormDefaultValue({ config }) {
  if (is.not.array(config)) return {};

  const values = {};

  config.forEach(v => {
    const conf = v.config;
    const confArray = is.array(conf) ? conf : [conf];
    confArray.forEach(a => {
      const { ext = {}, id } = a;
      const { defaultValue } = ext;
      if (defaultValue && id) {
        values[id] = defaultValue;
      }
    });
  });

  return values;
}

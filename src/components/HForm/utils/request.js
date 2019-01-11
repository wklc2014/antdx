import axios from 'axios';

/**
 * 请求后台接口方法
 * @param  {string} url     [请求地址]
 * @param  {Object} params  [接口参数]
 * @param  {Object} options [axios 参数]
 * @return {promise}        [接口返回]
 */
export default function request(url, params = {}, options = {}) {

  const newParams = Object.assign({}, params, {
    _input_charset: 'utf-8',
    _random: new Date().getTime(),
  });

  const axiosOptions = {
    url,
    timeout: 10000,
    ...options,
  }

  const { method = 'get' } = options;

  if (method.toLowerCase() === 'get') {
    axiosOptions.params = newParams;
  } else {
    axiosOptions.data = newParams;
  }

  return new Promise((resolve) => {
    axios(axiosOptions)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        let msg;
        try {
          msg = err.toString();
        } catch (e) {
          msg = `${url} 请求错误: ${err}`;
        }
        const resp = {
          success: false,
          msg,
        }
        resolve(resp);
      });
  })
}

/**
 * 判断是否需要绑定Blur事件
 * @param  {Object} options.ext [表单元素扩展配置]
 * @return {Boolean}            [是否需要绑定Blur事件]
 */
export default function checkIsBlur({ ext }) {
  const { trim } = ext;
  const isBlur = trim;

  return isBlur;
}
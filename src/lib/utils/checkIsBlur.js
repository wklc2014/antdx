/**
 * 判断是否需要绑定Blur事件
 * @param  {Object} options.ext [表单元素扩展配置]
 * @return {Boolean}            [是否需要绑定Blur事件]
 */
export default function checkIsBlur({ ext }) {
  const { toUpperCase, toLowerCase, trim } = ext;
  const isBlur = toUpperCase || toLowerCase || trim;

  return isBlur;
}
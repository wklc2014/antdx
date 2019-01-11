/**
 * 判断组件是否需要绑定 Blur 事件
 * @param  {Object} options.ext [表单元素扩展配置]
 * @return {Boolean}            [是否需要绑定 Blur 事件]
 */
export default function shouldBindBlurEvent({ ext }) {

  const { trim, toUpperCase, toLowerCase } = ext;

  const isBlur = trim || toUpperCase || toLowerCase;

  return isBlur;
}
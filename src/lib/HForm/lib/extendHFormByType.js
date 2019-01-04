/**
 * 扩展 HForm 表单元素类型
 */
import is from 'is_js';

export default function extendHFormByType(type, WraperComponent) {
  const types = Object.keys(FormItemTypes);
  if (is.not.isArray(type, types)) {
    Object.assign(FormItemTypes, {
      type: WraperComponent,
    })
  }
}
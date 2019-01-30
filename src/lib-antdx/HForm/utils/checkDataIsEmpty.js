/**
 * 确保 data 属性是数组
 */
import is from 'is_js';

export default function checkDataIsEmpty({ ext }) {
  const { data } = ext;

  if (is.not.array(data)) {
    return [];
  }

  return data;
}
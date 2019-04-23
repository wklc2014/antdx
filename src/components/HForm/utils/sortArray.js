/**
 * 数组排序
 */
import underscore from 'underscore';

export default function sortArray(array) {
  return _.sortBy(array, 'order');
}
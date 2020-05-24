/**
 * 获取栅格布局
 */
import is from 'is_js';

export default function getFormColLayouts(colLayout, cols = 1) {
  if (cols < 1) return 24;

  if (is.number(colLayout)) {
    const span = parseInt(24 / cols, 10) * colLayout;
    return {
      span: Math.min(span, 24),
    };
  } else if (is.object(colLayout)) {
    return colLayout;
  }

  return null;
}


export default function getFormItemRowStyle(extMap) {
  const { pLayout, space = 0, minWidth = 160, maxWidth } = extMap;

  const RowStyle = {};

  if (space) {
    RowStyle.paddingRight = space;
  }

  if (pLayout === 'inline') {
    RowStyle.minWidth = minWidth;
    if (maxWidth) {
      RowStyle.maxWidth = maxWidth;
    }
  }

  return RowStyle;
}
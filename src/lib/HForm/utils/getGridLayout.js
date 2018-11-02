/**
 * 获取 Form 表单栅格布局
 * @param  {Number} options.cols          [表单布局列数]
 * @param  {Number} options.colspan   [某个表单元素横跨几列, 默认为1]
 * @return {object}                           [表单栅格化布局属性]
 */
export default function getFormGridLayout({ cols = 1, colspan = 1 }) {

  // 一个表单元素最多横跨列数，最多和表单组列数相同
  const newColspan = Math.min(cols, colspan);

  switch (cols) {
    case 4:
      return [
        { xs: 24, sm: 24, md: 12, lg: 8,  xl: 6  },
        { xs: 24, sm: 24, md: 24, lg: 16, xl: 12 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 18 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
      ][newColspan - 1];
    case 3:
      return [
        { xs: 24, sm: 24, md: 12, lg: 12, xl: 8  },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 16 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
      ][newColspan - 1];
    case 2:
      return [
        { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 },
        { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
      ][newColspan - 1];
    default:
      return { span: 24 };
  }
}
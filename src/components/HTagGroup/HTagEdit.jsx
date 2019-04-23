/**
 * 编辑 Tag
 */
import React from 'react';
import lodash from 'lodash';
import { Tag, Tooltip } from 'antd';
import hocInput from './hoc/hocInput.js';

const HTagEdit = (props) => {
  const { maxLength, tag, tagApi, onRemove, onVisible, editable } = props;
  const isLongTag = tag.length > maxLength;
  const tagText = isLongTag ? lodash.truncate(tag, { length: maxLength }) : tag;

  const TagProps = {
    closable: true,
    onClose: (e) => {
      e.preventDefault();
      onRemove();
    },
    ...tagApi,
  }

  const WraperProps = {
    onClick: () => {
      if (editable) {
        onVisible(tag);
      }
    },
    style: {
      display: 'inline-block',
      marginBottom: 8,
    },
  }

  const tagElement = (
    <div {...WraperProps}>
      <Tag {...TagProps}>
        {tagText}
      </Tag>
    </div>
  );

  if (isLongTag) {
    return <Tooltip title={tag}>{tagElement}</Tooltip>;
  }

  return tagElement;
}

export default hocInput(HTagEdit);

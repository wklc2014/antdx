import React from 'react';
import propTypes from 'prop-types';

const Lines = (props) => {

  const {

  } = props;

  return (
    <div>
      <h2>线</h2>
      <div className="inline">
        <div className="line-item line-diagonal">
          <span>对角线</span>
        </div>
      </div>
      <div className="inline">
        <div className="line-item line-level">
          <span>水平线</span>
        </div>
      </div>
      <div className="inline">
        <div className="line-item line-vertical">
          <span>垂直线</span>
        </div>
      </div>
    </div>
  )
}

Lines.propTypes = {

}

Lines.defaultProps = {

}

export default Lines;

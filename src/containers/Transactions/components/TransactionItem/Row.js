import React from 'react';

const Row = ({ detail, className, style }) => (
  <div className={className}>
    <span className="trn-detail" style={style}>{detail}</span>
  </div>
);

export default Row;

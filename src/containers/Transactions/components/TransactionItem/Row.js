import React from 'react';

const Row = ({ title, detail, className, style }) => (
  <div className={className}>
    <span className="trn-title">{title}</span>
    <span className="trn-detail" style={style}>{detail}</span>
  </div>
);

export default Row;

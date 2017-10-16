import React from 'react';

const RowHeader = ({ title, className }) => (
  <div className={className}>
    <span className="trn-title">{title}</span>
  </div>
);

export default RowHeader;

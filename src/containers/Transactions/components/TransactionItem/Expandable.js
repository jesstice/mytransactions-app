import React from 'react';

const Expandable = ({ title, detail }) => (
  <div className="expandable-item">
    <span className="trn-title">{title} </span>
    <span className="trn-detail">{detail}</span>
  </div>
);

export default Expandable;

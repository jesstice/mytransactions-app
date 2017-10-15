import React from 'react';

const AccountItem = ({ title, detail, className, style }) => (
  <div className={className}>
    <span className="item-title">{title}</span>
    <span className="item-detail" style={style}>{detail}</span>
  </div>
);

export default AccountItem;

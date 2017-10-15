import React from 'react';
import {
  Card
} from 'material-ui/Card';

import './styles.css';

const AccountItem = ({ accountInfo }) => (
  <Card containerStyle={{ margin: 10, padding: 20 }}>
    <div className="account-details">
      <div className="first-item">
        <span className="item-title">Account Name</span>
        <span className="item-detail">{accountInfo.accountName}</span>
      </div>
      <div className="single-item">
        <span className="item-title">Transit Number</span>
        <span className="item-detail">{accountInfo.transitNumber}</span>
      </div>
      <div className="single-item">
        <span className="item-title">Balance</span>
        <span className="item-detail">${accountInfo.balance}</span>
      </div>
      <div className="single-item">
        <span className="item-title">Last Updated</span>
        <span className="item-detail">{accountInfo.balanceUpdated}</span>
      </div>
    </div>
  </Card>
);

export default AccountItem;

import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';

import './styles.css';

const AccountItem = ({ accountInfo }) => (
  <Card containerStyle={{ margin: 10, padding: 20 }}>
    <div className="account-details">
      <div className="single-item">
        <span className="item-title">Account Name</span>
        <span className="item-detail">Account No</span>
      </div>
      <div className="single-item">
        <span className="item-title">Transit Number</span>
        <span className="item-detail">12345</span>
      </div>
      <div className="single-item">
        <span className="item-title">Balance</span>
        <span className="item-detail">$$$$</span>
      </div>
      <div className="single-item">
        <span className="item-title">Last Updated</span>
        <span className="item-detail">Jan-01-2001</span>
      </div>
    </div>
  </Card>
);

export default AccountItem;

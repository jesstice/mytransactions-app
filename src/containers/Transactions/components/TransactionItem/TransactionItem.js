import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import './styles.css';

const TransactionItem = ({ transaction }) => (
  <Card>
    <CardHeader
      actAsExpander={true}
      showExpandableButton={true}
      children={<ItemHeader transaction={transaction} />}
      style={{ display: 'flex' }}
      textStyle={{ display: 'none' }}
      iconStyle={{ position: 'initial' }}
    />
    <CardText expandable={true}>
      <div className="expandable">
        <div className="expandable-item">
          <span className="trn-title">Transaction Id#: </span>
          <span className="trn-detail">{transaction.transactionId}</span>
        </div>
        <div className="expandable-item">
          <span className="trn-title">Category: </span>
          <span className="trn-detail">{transaction.category}</span>
        </div>
      </div>
    </CardText>
  </Card>
);

const ItemHeader = ({ transaction }) => (
  <div className="transaction-details">
    <div className="item-one">
      <span className="trn-title">Date</span>
      <span className="trn-detail">{transaction.transactionDate}</span>
    </div>
    <div className="item">
      <span className="trn-title">Account Name</span>
      <span className="trn-detail">{transaction.accountName}</span>
    </div>
    <div className="trn-item">
      <span className="trn-title">Description</span>
      <span className="trn-detail">{transaction.description}</span>
    </div>
    <div className="trn-item">
      <span className="trn-title">Amount</span>
      <span className="trn-detail">${transaction.amount}</span>
    </div>
    <div className="trn-item">
      <span className="trn-title">Balance</span>
      <span className="trn-detail">${transaction.runningBalance}</span>
    </div>
  </div>
);

export default TransactionItem;

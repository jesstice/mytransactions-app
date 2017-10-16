import React from 'react';
import {
  Card,
  CardHeader,
  CardText 
} from 'material-ui/Card';

import ExpandableItem from './Expandable';
import RowItem from './Row';
import './styles.css';

const TransactionItem = ({ transaction }) => (
  <Card style={{ borderRadius: 0 }} >
    <CardHeader
      actAsExpander={true}
      showExpandableButton={true}
      children={<ItemHeader transaction={transaction} />}
      style={{ display: 'flex' }}
      textStyle={{ display: 'none' }}
      iconStyle={{ position: 'initial' }}
    />
    <CardText expandable={true}>
      <ExpandableItem
        title="Transaction Id#:"
        detail={transaction.transactionDate}
      />
      <ExpandableItem
        title="Category:"
        detail={transaction.category}
      />
    </CardText>
  </Card>
);

const ItemHeader = ({ transaction }) => (
  <div className="transaction-details">
    <RowItem
      title="Date"
      detail={transaction.transactionDate}
      className="first-item"
    />
    <RowItem
      title="Account"
      detail={transaction.accountName}
      className="second-item"
    />
    <RowItem
      title="Description"
      detail={transaction.description}
      className="third-item"
    />
    <RowItem
      title="Amount"
      detail={`$${transaction.deposit ? transaction.deposit : transaction.withdrawal}`}
      className="fourth-item"
      style={{ color: "red" }}
    />
    <RowItem
      title="Balance"
      detail={`$${transaction.runningBalance}`}
      className="fifth-item"
    />
  </div>
);

export default TransactionItem;

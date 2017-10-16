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
        detail={transaction.transactionId}
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
      detail={transaction.transactionDate}
      className="first-item"
    />
    <RowItem
      detail={transaction.accountName}
      className="second-item"
    />
    <RowItem
      detail={transaction.description}
      className="third-item"
    />
    <RowItem
      detail={`$${transaction.deposit ? transaction.deposit : transaction.withdrawal}`}
      className="fourth-item"
      style={ transaction.withdrawal ? { color: "red" } : null}
    />
    <RowItem
      detail={`$${transaction.runningBalance}`}
      className="fifth-item"
    />
  </div>
);

export default TransactionItem;

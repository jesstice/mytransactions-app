import React from 'react';
import {
  Card,
  CardHeader
} from 'material-ui/Card';

import RowItem from './Row';

const TransactionListHeader = ({ transaction }) => (
  <Card style={{ borderRadius: 0, backgroundColor: "#607D8B", borderBottom: "3px solid #607D8B"}} >
    <CardHeader
      children={<ItemHeader transaction={transaction} />}
      style={{ display: 'flex', padding: '8px 16px' }}
      textStyle={{ display: 'none' }}
      iconStyle={{ position: 'initial' }}
    />
  </Card>
);

const ItemHeader = ({ transaction }) => (
  <div className="transaction-details">
    <RowItem
      title="Date"
      className="first-item"
    />
    <RowItem
      title="Account"
      className="second-item"
    />
    <RowItem
      title="Description"
      className="third-item"
    />
    <RowItem
      title="Amount"
      className="fourth-item"
    />
    <RowItem
      title="Balance"
      className="fifth-item"
    />
  </div>
);

export default TransactionListHeader;


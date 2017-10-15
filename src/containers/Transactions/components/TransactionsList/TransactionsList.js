import React from 'react';

import TransactionItem from '../TransactionItem/';

const TransactionsList = ({ transactionsData }) => (
  <div className="transactionslist-wrapper">
  {
    transactionsData.map((transaction) => (
      <TransactionItem key={transaction.transactionId} transaction={transaction} />
    ))
  }
  </div>
);

export default TransactionsList;

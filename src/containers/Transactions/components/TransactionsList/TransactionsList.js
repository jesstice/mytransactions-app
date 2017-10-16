import React from 'react';

import TransactionListHeader from '../TransactionListHeader/';
import TransactionItem from '../TransactionItem/';

const TransactionsList = ({ transactionsData }) => (
  <div className="transactionslist-wrapper">
    <TransactionListHeader />
    {
      transactionsData.map((transaction) => (
        <TransactionItem key={transaction.transactionId} transaction={transaction} />
      ))
    }
  </div>
);

export default TransactionsList;

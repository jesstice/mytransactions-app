import React from 'react';

import FilterHeader from '../FilterHeader/';
import TransactionList from '../TransactionsList/TransactionsList';

const TransactionWrapper = ({ transactionsData, accountsList, accountFilters, categoriesList, categoryFilters }) => (
  <div>
    <FilterHeader
      accountsList={accountsList}
      accountFilters={accountFilters}
      categoriesList={categoriesList}
      categoryFilters={categoryFilters}
    />
    <TransactionList transactionsData={transactionsData} />
  </div>
);

export default TransactionWrapper;
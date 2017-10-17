import React from 'react';

import FilterHeader from '../FilterHeader/';
import TransactionList from '../TransactionsList/TransactionsList';
import './styles.css';

const TransactionWrapper = ({ transactionsData, accountsList, accountFilters, categoriesList, categoryFilters, sortByDate, dateStart, dateEnd, handleChangeStartDate, handleChangeEndDate }) => (
  <div className="transaction-list-wrapper">
    <FilterHeader
      accountsList={accountsList}
      accountFilters={accountFilters}
      categoriesList={categoriesList}
      categoryFilters={categoryFilters}
      sortByDate={sortByDate}
      dateStart={dateStart}
      dateEnd={dateEnd}
      handleChangeStartDate={handleChangeStartDate}
      handleChangeEndDate={handleChangeEndDate}
    />
    <TransactionList transactionsData={transactionsData} />
  </div>
);

export default TransactionWrapper;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TransactionWrapper from './components/TransactionWrapper';

class TransactionsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sorted: false
    }
  }

  filterTransactionsList = () => {
    let { transactions, accountFilters, categoryFilters } = this.props;

    if (accountFilters.length) {
      transactions = transactions.filter(transaction => accountFilters.includes(transaction.accountName));
    }
    if (categoryFilters.length) {
      transactions = transactions.filter(transaction => categoryFilters.includes(transaction.category));
    }
    return transactions;
  }

  sortTransactionList = (list) => {
   return list.sort((a, b) => {
      return new Date(b.transactionDate) - new Date(a.transactionDate)
    });
  }

  updateTransactionList = () => {
    this.setState({ sorted: !this.state.sorted });
  }

  render() {
    let transactions = this.filterTransactionsList();
    if (this.state.sorted) {
      this.sortTransactionList(transactions)
    };
  
    return (
        <TransactionWrapper
          transactionsData={transactions}
          accountsList={this.props.accountsList}
          accountFilters={this.props.accountFilters}
          categoriesList={this.props.categoriesList}
          categoryFilters={this.props.categoryFilters}
          sortByDate={() => this.updateTransactionList}
        />
      );
    }
}

function mapStateToProps(state) {
  return {
    transactions: state.data.transactions,
    accountsList: state.data.accountsList,
    accountFilters: state.filters.accountFilters,
    categoriesList: state.data.categoriesList,
    categoryFilters: state.filters.categoryFilters,
    dateFilters: state.filters.dateFilters
  };
}

export default connect(mapStateToProps)(TransactionsContainer);

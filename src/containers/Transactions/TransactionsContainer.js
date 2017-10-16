import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TransactionWrapper from './components/TransactionWrapper';

class TransactionsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortRecent: false
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

  sortTransactionList = (list, sort) => {
   return list.sort((a, b) => {
      if (sort) {
        return new Date(b.transactionDate) - new Date(a.transactionDate)
      } else {
        return new Date(a.transactionDate) - new Date(b.transactionDate)
      }
    });
  }

  updateTransactionList = () => {
    this.setState({ sortRecent: !this.state.sortRecent });
  }

  render() {
    let transactions = this.filterTransactionsList();
    if (this.state.sortRecent) {
      this.sortTransactionList(transactions, true)
    } else {
      this.sortTransactionList(transactions)
    };

    return (
        <TransactionWrapper
          transactionsData={transactions}
          accountsList={this.props.accountsList}
          accountFilters={this.props.accountFilters}
          categoriesList={this.props.categoriesList}
          categoryFilters={this.props.categoryFilters}
          sortByDate={this.updateTransactionList}
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

TransactionsContainer.propTypes = {
  accountFilters: PropTypes.array,
  accountsList: PropTypes.arrayOf(PropTypes.string),
  categoryFilters: PropTypes.array,
  categoriesList: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      accountId: PropTypes.string,
      accountName: PropTypes.string,
      amount: PropTypes.string,
      category: PropTypes.string,
      deposit: PropTypes.number,
      description: PropTypes.string,
      runningBalance: PropTypes.number,
      transactionDate: PropTypes.string,
      transactionId: PropTypes.string,
    })
  )
}

export default connect(mapStateToProps)(TransactionsContainer);

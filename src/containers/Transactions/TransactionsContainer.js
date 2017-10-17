import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TransactionWrapper from './components/TransactionWrapper';
import { findStartAndEndDates, selectDateStart, completeDateSelection, clearFilterState } from '../../redux/modules/filters';

class TransactionsContainer extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      sortRecent: false,
      filteredTransactions: []
    }
  }

  componentWillMount() {
    const { transactions } = this.props;
    this.setState({ filteredTransactions: transactions });
    this.props.dispatch(findStartAndEndDates(transactions));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.accountFilters !== this.props.accountFilters) {
      this.filterTransactionsList();
    }
    if (prevProps.categoryFilters !== this.props.categoryFilters) {
      this.filterTransactionsList();
    }
    if (prevProps.dateFilter !== this.props.dateFilter) {
      this.filterTransactionsByDate();
    }
    if (this.state.sortRecent) {
      this.sortTransactionList(this.state.filteredTransactions, true)
    } else {
      this.sortTransactionList(this.state.filteredTransactions)
    }
  }

  filterTransactionsList = (date) => {
    const { accountFilters, categoryFilters } = this.props;
    let transactions;
    (this.props.transactions.length !== this.state.filteredTransactions.length) ? transactions = this.props.transactions : transactions = this.state.filteredTransactions;

    if (accountFilters.length) {
      transactions = transactions.filter(transaction => accountFilters.includes(transaction.accountName));
    }
    if (categoryFilters.length) {
      transactions = transactions.filter(transaction => categoryFilters.includes(transaction.category));
    }
    this.setState({ filteredTransactions: transactions });
  }

  filterTransactionsByDate = () => {
    let transactions = this.state.filteredTransactions;
    const { dateStart, dateEnd } = this.props;

    transactions = transactions.filter((transaction) => {
      return transaction.dateObject >= dateStart && transaction.dateObject <= dateEnd
    });
    this.setState({ filteredTransactions: transactions });
  }

  sortTransactionList = (list, sort) => {
   return list.sort((a, b) => {
      if (sort) {
        return b.dateObject - a.dateObject
      } else {
        return a.dateObject - b.dateObject
      }
    });
  }

  updateTransactionList = () => {
    this.setState({ sortRecent: !this.state.sortRecent });
  }

  handleChangeStartDate = (event, date) => {
    this.props.dispatch(selectDateStart(date));
  }

  handleChangeEndDate = (event, date) => {
    this.props.dispatch(completeDateSelection(date));
  }

  clearAllFilters = () => {
    this.props.dispatch(clearFilterState());
  }

  render() {
    return (
        <TransactionWrapper
          transactionsData={this.state.filteredTransactions}
          accountsList={this.props.accountsList}
          accountFilters={this.props.accountFilters}
          categoriesList={this.props.categoriesList}
          categoryFilters={this.props.categoryFilters}
          clearAllFilters={this.clearAllFilters}
          sortByDate={this.updateTransactionList}
          dateStart={this.props.dateStart}
          dateEnd={this.props.dateEnd}
          handleChangeStartDate={this.handleChangeStartDate}
          handleChangeEndDate={this.handleChangeEndDate}
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
    dateStart: state.filters.dateStart,
    dateEnd: state.filters.dateEnd,
    dateFilter: state.filters.filterByDate
  };
}

TransactionsContainer.propTypes = {
  accountFilters: PropTypes.array,
  accountsList: PropTypes.arrayOf(PropTypes.string),
  categoryFilters: PropTypes.array,
  categoriesList: PropTypes.arrayOf(PropTypes.string),
  dateEnd: PropTypes.object,
  dateFilter: PropTypes.bool,
  dateStart: PropTypes.object,
  dispatch: PropTypes.func,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      accountId: PropTypes.string,
      accountName: PropTypes.string,
      amount: PropTypes.number,
      category: PropTypes.string,
      deposit: PropTypes.string,
      description: PropTypes.string,
      runningBalance: PropTypes.string,
      transactionDate: PropTypes.string,
      transactionId: PropTypes.string,
    })
  )
}

export default connect(mapStateToProps)(TransactionsContainer);

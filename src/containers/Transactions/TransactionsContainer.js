import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../../components/Loader/';
import { getTransactionData } from '../../redux/modules/transactions';

class TransactionsContainer extends Component {

  componentDidMount() {
    return this.props.dispatch(getTransactionData());
  }

  render() {

    if (this.props.loading) return <Loader />;
    return <div>Transactions</div>;
  }
}

function mapStateToProps(state) {
  return {
      loading: state.transactions.isLoading,
      data: state.transactions.transactions
  };
}

export default connect(mapStateToProps)(TransactionsContainer);

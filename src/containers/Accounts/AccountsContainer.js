import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AccountsList from './components/AccountsList/';

class AccountsContainer extends Component {

  render() {
    return(
      <AccountsList accountsInfo={this.props.accountsInfo} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accountsInfo: state.data.accounts
  };
}

AccountsContainer.propTypes = {
  accountsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      accountName: PropTypes.string,
      accountNumber: PropTypes.string,
      balance: PropTypes.number,
      balanceUpdated: PropTypes.string,
      institutionName: PropTypes.string,
      transitNumber: PropTypes.string,
    })
  ),
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(AccountsContainer);

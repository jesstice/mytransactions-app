import React, { Component } from 'react';
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

export default connect(mapStateToProps)(AccountsContainer);

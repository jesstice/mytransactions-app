import React, { Component } from 'react';

import AccountsList from './components/AccountsList/';

class AccountsContainer extends Component {

  state = {
    accountsInfo: [
      {
      "accountId": "4163ef9a-4181-4fdd-aa24-76fd2097c30c",
      "institutionName": "Worldwide Savings Bank",
      "accountName": "HIGH INTEREST TFSA SAVINGS ACCOUNT",
      "transitNumber": "54685",
      "accountNumber": "123456781",
      "balance": 67,
      "balanceUpdated": "2017-02-22"
      },
      {
      "accountId": "6408eb5b-e410-4b35-a549-f96d24c2df2a",
      "institutionName": "Worldwide Savings Bank",
      "accountName": "COMPANION SAVINGS ACCOUNT",
      "transitNumber": "54685",
      "accountNumber": "123456780",
      "balance": 14.1,
      "balanceUpdated": "2017-02-22"
      },
      {
      "accountId": "9c6afa54-0301-4df6-a1ad-b965b9abf325",
      "institutionName": "Worldwide Savings Bank",
      "accountName": "UNLIMITED CHEQUING ACCOUNT",
      "transitNumber": "54685",
      "accountNumber": "123456783",
      "balance": 2027.46,
      "balanceUpdated": "2017-02-22"
      },
      {
      "accountId": "c0f43f25-1b2e-453b-900b-4a7f6482d00a",
      "institutionName": "Worldwide Savings Bank",
      "accountName": "BORDERLESS PLAN",
      "transitNumber": "54685",
      "accountNumber": "123456782",
      "balance": 9.79,
      "balanceUpdated": "2017-02-22"
      }
      ]
  }

  render() {
    return(
      <AccountsList accountsInfo={this.state.accountsInfo} />
    );
  }
}

export default AccountsContainer;

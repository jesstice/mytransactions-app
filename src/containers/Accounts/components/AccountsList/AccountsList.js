import React from 'react';

import AccountItem from '../Account';
import './styles.css';

const AccountsList = ({ accountsInfo }) => (
  <div className="accountslist-wrapper">
    {
      accountsInfo.map((account) => (
        <AccountItem key={account.accountId} accountInfo={account} />
      ))
    }
  </div>
);

export default AccountsList;

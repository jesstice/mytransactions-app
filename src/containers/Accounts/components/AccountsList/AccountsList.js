import React from 'react';

import AccountItem from '../AccountItem/AccountItem';
import './styles.css';

const AccountsList = ({ accountsInfo }) => (
  <div className="accountslist-wrapper">
    {
      accountsInfo.map((account) => (
        <AccountItem key={account.accoundId} accountInfo={account} />
      ))
    }
  </div>
);

export default AccountsList;

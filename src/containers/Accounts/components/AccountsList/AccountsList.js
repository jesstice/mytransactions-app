import React from 'react';

import AccountItem from '../Account';
import Total from '../Total/';
import './styles.css';

const AccountsList = ({ accountsInfo, accountsTotal }) => (
  <div className="accountslist-wrapper">
    <Total total={accountsTotal} />
    {
      accountsInfo.map((account) => (
        <AccountItem key={account.accountId} accountInfo={account} />
      ))
    }
  </div>
);

export default AccountsList;

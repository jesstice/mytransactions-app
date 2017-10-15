import React from 'react';
import {
  Card
} from 'material-ui/Card';

import AccountItem from './AccountItem';
import './styles.css';

const Account = ({ accountInfo }) => (
  <Card containerStyle={{ margin: 10, padding: 30 }}>
    <div className="account-details">
      <AccountItem 
        title="Account Name"
        detail={accountInfo.accountName}
        className="account-name"
      />
      <AccountItem 
        title="Transit Number"
        detail={accountInfo.transitNumber}
        className="single-item"
      />
      <AccountItem 
        title="Balance"
        detail={accountInfo.balance}
        className="single-item"
      />
      <AccountItem 
        title="Last Updated"
        detail={accountInfo.balanceUpdated}
        className="single-item"
      />
    </div>
  </Card>
);

export default Account;

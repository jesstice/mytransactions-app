import React from 'react';

import Accounts from '../../../Accounts/';
import Transactions from '../../../Transactions/';

const HomeContent = ({ selected }) => {
  if (selected) {
    return <Accounts />
  } else {
    return <Transactions />
  }
}

export default HomeContent;

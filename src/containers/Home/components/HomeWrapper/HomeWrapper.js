import React from 'react';

import Header from '../Header/';
import HomeContent from '../HomeContent/HomeContent';
import SidebarNav from '../SidebarNav/';
import './styles.css';

const HomeWrapper = ({ selected, displayAccounts, displayTransactions }) => (
  <div className="app-wrapper">
    <div className="sidebar-nav">
      <SidebarNav
        selectedView={selected}
        displayAccounts={displayAccounts}
        displayTransactions={displayTransactions}
      />
    </div>
    <div className="app-content">
      <div>
        <Header />
      </div>
      <div>
        <HomeContent selected={selected} />
      </div>
    </div>
  </div>
);

export default HomeWrapper;

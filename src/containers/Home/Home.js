import React from 'react';

import Accounts from '../Accounts/';
import Header from './components/Header/';
import SidebarNav from './components/SidebarNav/';
import Transactions from '../Transactions/';
import './styles.css';

const Home = ({ selected }) => (
  <div className="app-wrapper">
    <div className="sidebar-nav">
      <SidebarNav />
    </div>
    <div className="app-content">
      <div>
        <Header />
      </div>
      <div>
        {selected === 'account' ? <Accounts /> : <Transactions />}
      </div>
    </div>
  </div>
);

export default Home;

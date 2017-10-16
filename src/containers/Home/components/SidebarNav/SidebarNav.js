import React from 'react';
import Paper from 'material-ui/Paper';

import NavButton from './NavButton';
import Logo from '../../../../assets/piggy-bank.png';
import './styles.css';

const SidebarNav = ({ selectedView, displayAccounts, displayTransactions }) => (
  <div className="sidebar-wrapper">
    <Paper className="sidebar-wrapper" zDepth={1}>
      <div className="logo-wrapper">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="button-wrapper">
        <NavButton
          label="Overview"
          onClick={displayAccounts}
          selectedView={selectedView ? true : false}
        />
        <NavButton 
          label="Transactions"
          onClick={displayTransactions}
          selectedView={selectedView ? false : true}
        />
      </div>
    </Paper>
  </div>
);

export default SidebarNav;

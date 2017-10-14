import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import Logo from '../../../../assets/piggy-bank.png';
import './styles.css';

const SidebarNav = ({ selectedView, displayAccounts, displayTransactions }) => (
  <div className="sidebar-wrapper">
    <Paper className="sidebar-wrapper" zDepth={1}>
      <div className="logo-wrapper">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="button-wrapper">
        <FlatButton
          className="navigation-button"
          label="Overview"
          fullWidth={true}
          primary
          onClick={displayAccounts}
        />
        <FlatButton
          className="navigation-button"
          label="Transactions"
          fullWidth={true}
          primary
          onClick={displayTransactions}
        />
      </div>
    </Paper>
  </div>
);

export default SidebarNav;

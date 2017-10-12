import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import Logo from '../../../../assets/piggy-bank.png';
import './styles.css';

const SidebarNav = () => (
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
        />
        <FlatButton
          className="navigation-button"
          label="Transactions"
          fullWidth={true}
          primary
        />
      </div>
    </Paper>
  </div>
);

export default SidebarNav;

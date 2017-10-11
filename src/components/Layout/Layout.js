import React from 'react';
import PropTypes from 'prop-types';

import SidebarNav from '../SidebarNav/';
import Header from '../Header/';
import './styles.css';

const Layout = ({ children }) => (
  <div className="app-wrapper">
    <div className="sidebar-nav">
      <SidebarNav />
    </div>
    <div className="app-content">
      <div>
        <Header />
      </div>
      <div>
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
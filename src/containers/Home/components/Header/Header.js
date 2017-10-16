import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => (
  <AppBar
    title="Worldwide Savings Bank"
    titleStyle={{ fontSize: '1.25rem' }}
    showMenuIconButton={false}
  />
);

export default Header;

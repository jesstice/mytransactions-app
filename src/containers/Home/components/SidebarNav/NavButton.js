import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const NavButton = ({ label, onClick, selectedView }) => (
  <FlatButton
    backgroundColor={selectedView ? "#ECEFF1" : null}
    className="navigation-button"
    fullWidth={true}
    label={label}
    labelStyle={{ fontSize: '1.1rem' }}
    secondary
    style={{ margin: '0.5rem 0' }}
    onClick={onClick}
  />
);

export default NavButton;
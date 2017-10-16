import React from 'react';
import Paper from 'material-ui/Paper';

import './styles.css';

const Total = ({ total }) => (
  <Paper style={{ width: "max-content", backgroundColor: "#FFAB91", color: "white" }} zDepth={1}>
    <div className="total-wrapper">
      <span className="balance-title">Total Balance: </span>
      <span>${total}</span>
    </div>
  </Paper>
);

export default Total;

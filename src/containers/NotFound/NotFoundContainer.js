import React, { Component } from 'react';
import Logo from '../../assets/piggy-bank.png';

import './styles.css';

class NotFoundContainer extends Component {

  render() {
    return(
      <div className="not-found-wrapper">
        <div>404</div>
        <div>Sorry, page not found!</div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
    );
  }
}

export default NotFoundContainer;

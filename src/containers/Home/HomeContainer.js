import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './components/HomeWrapper/';

class HomeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: true
    }
  }

  displayAccounts = () => {
    this.setState({ selected: true })
  }

  displayTransactions = () => {
    this.setState({ selected: false })
  }

  render() {
    return(
      <Home
        selected={this.state.selected}
        displayAccounts={this.displayAccounts}
        displayTransactions={this.displayTransactions}
      />
    )
  }
}

export default HomeContainer;

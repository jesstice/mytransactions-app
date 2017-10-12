import React, { Component } from 'react';

import Home from './Home';

class HomeContainer extends Component {

  constructor() {
    super()

    this.state = {
      selected: 'account'
    }
  }

  render() {
    return(
      <Home
        selected={this.state.selected}
      />
    )
  }
}

export default HomeContainer;

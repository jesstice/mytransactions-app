import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './components/HomeWrapper/';
import Loader from '../../components/Loader/';
import { getData } from '../../redux/modules/data';

class HomeContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected: true
    }
  }

  componentDidMount() {
    return this.props.dispatch(getData());
  }

  displayAccounts = () => {
    this.setState({ selected: true })
  }

  displayTransactions = () => {
    this.setState({ selected: false })
  }

  render() {
    if (this.props.loading) return <Loader />;
    return(
      <Home
        selected={this.state.selected}
        displayAccounts={this.displayAccounts}
        displayTransactions={this.displayTransactions}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.data.isLoading
  };
}

HomeContainer.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(HomeContainer);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import Filter from '../Filter/Filter';
import { filterByAccount, filterByCategory, filterByDate, clearFilterState } from '../../../../redux/modules/filters';

const FilterHeader = ({ dispatch, accountsList, accountFilters, categoriesList, categoryFilters }) => (
  <div>
    <Filter
      values={accountsList}
      selectedValues={accountFilters}
      onChangeAction={filterByAccount}
      hint="Filter by Account"
    />
    <Filter
      values={categoriesList}
      selectedValues={categoryFilters}
      onChangeAction={filterByCategory}
      hint="Filter by Category"
    />
    <RaisedButton
      label="Clear Filters"
      primary
      onClick={() => dispatch(clearFilterState())}
    />
  </div>
);

export default connect()(FilterHeader);

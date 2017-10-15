import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import Filter from '../Filter/Filter';
import { filterByAccount, filterByCategory, filterByDate, clearFilterState } from '../../../../redux/modules/filters';
import './styles.css';

const FilterHeader = ({ dispatch, accountsList, accountFilters, categoriesList, categoryFilters, sortByDate }) => (
  <div className="fheader-wrapper">
    <div className="filter-wrapper">
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
    </div>
    <div className="action-buttons">
      <RaisedButton
        label="Sort by Date"
        secondary
        onClick={sortByDate}
      />
      <RaisedButton
        label="Clear Filters"
        primary
        onClick={() => dispatch(clearFilterState())}
      />
    </div>
  </div>
);

export default connect()(FilterHeader);

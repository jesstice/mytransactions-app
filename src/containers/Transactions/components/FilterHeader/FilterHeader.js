import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filter from '../Filter/Filter';
import { filterByAccount, filterByCategory, filterByDate } from '../../../../redux/modules/filters';

const FilterHeader = ({ accountsList, accountFilters, categoriesList, categoryFilters }) => (
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
  </div>
);

export default FilterHeader;

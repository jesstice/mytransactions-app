import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import DatePicker from '../DatePicker/DatePicker';
import Filter from '../Filter/Filter';
import { filterByAccount, filterByCategory, clearFilterState } from '../../../../redux/modules/filters';
import './styles.css';

const FilterHeader = ({ dispatch, accountsList, accountFilters, categoriesList, categoryFilters, sortByDate, dateStart, dateEnd, handleChangeStartDate, handleChangeEndDate }) => (
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
    <div className="date-pickers">
      <DatePicker
        dateStart={dateStart}
        dateEnd={dateEnd}
        handleChangeStartDate={handleChangeStartDate}
        handleChangeEndDate={handleChangeEndDate}
      />
    </div>
  </div>
);

export default connect()(FilterHeader);

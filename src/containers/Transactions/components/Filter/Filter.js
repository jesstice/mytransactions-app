import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Filter = ({ dispatch, values, hint, selectedValues, onChangeAction }) => (
  <SelectField
    autoWidth
    multiple
    hintText={hint}
    value={selectedValues}
    onChange={(event, index, value) => dispatch(onChangeAction(value))}
    style={{ width: '45%' }}
  >
    {values.map((value) => (
      <MenuItem
        key={value}
        insetChildren
        checked={selectedValues && selectedValues.includes(value)}
        value={value}
        primaryText={value}
      />
    ))}
  </SelectField>
);

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeAction: PropTypes.func.isRequired
};

export default connect()(Filter);

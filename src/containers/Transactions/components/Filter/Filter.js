import React from 'react';
import { connect } from 'react-redux';

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

export default connect()(Filter);

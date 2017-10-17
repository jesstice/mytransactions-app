import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const DateRangePicker = ({ dateStart, dateEnd, handleChangeStartDate, handleChangeEndDate }) => (
  <div className="date-range-wrapper">
    <DatePicker
      autoOk
      style={{ width: '45%' }}
      onChange={handleChangeStartDate}
      floatingLabelText="Select Start Date"
      container="inline"
      value={dateStart}
    />
    <DatePicker
      autoOk
      style={{ width: '45%' }}
      onChange={handleChangeEndDate}
      floatingLabelText="Select End Date"
      container="inline"
      value={dateEnd}
    />
  </div>
);

export default DateRangePicker;
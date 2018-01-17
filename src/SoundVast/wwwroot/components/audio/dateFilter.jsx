import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import styles from './dateFilter.less';

const DateFilter = ({
  inputYearOnChange,
  dateValues,
  sliderOnChange,
  sliderOnAfterChange,
}) => (
  <span className={styles.dateFilter}>
    <span>
      <input name="filterYear" type="text" onChange={inputYearOnChange} value={dateValues.year} />
      <span>&#47;</span>
      <input name="filterMonth" type="text" defaultValue={dateValues.month} />
      <span>&#47;</span>
      <input name="filterDate" type="text" defaultValue={dateValues.date} />
    </span>
    <Slider
      className={styles.slider}
      defaultValue={dateValues.year}
      min={1500}
      max={new Date().getUTCFullYear()}
      step={1}
      onChange={sliderOnChange}
      onAfterChange={sliderOnAfterChange}
    />
  </span>
);

DateFilter.propTypes = {
  inputYearOnChange: PropTypes.func.isRequired,
  dateValues: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  sliderOnChange: PropTypes.func.isRequired,
  sliderOnAfterChange: PropTypes.func.isRequired,
};

export default DateFilter;

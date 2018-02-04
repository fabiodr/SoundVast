import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import styles from './dateFilter.less';

// TODO: change max to first added
const DateFilter = ({
  inputOnChange,
  inputOnBlur,
  daysAgo,
  sliderOnChange,
  sliderOnAfterChange,
}) => (
  <span className={styles.dateFilter}>
    <input
      name="filterDays"
      type="number"
      onChange={inputOnChange}
      onBlur={inputOnBlur}
      value={daysAgo}
    />
    <Slider
      className={styles.slider}
      defaultValue={Number(daysAgo)}
      min={0}
      max={100}
      step={1}
      onChange={sliderOnChange}
      onAfterChange={sliderOnAfterChange}
    />
  </span>
);

DateFilter.defaultProps = {
  daysAgo: null,
};

DateFilter.propTypes = {
  inputOnChange: PropTypes.func.isRequired,
  inputOnBlur: PropTypes.func.isRequired,
  daysAgo: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  sliderOnChange: PropTypes.func.isRequired,
  sliderOnAfterChange: PropTypes.func.isRequired,
};

export default DateFilter;

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import styles from './filterText.less';

const FilterText = ({ label, dateFrom, dateTo, onAfterChange }) => (
  <div>
    <span>{label} - Released from </span>
    <span className={styles.dateFrom}>
      <span>
        {dateFrom}
      </span>
      <Slider
        className={styles.slider}
        defaultValue={dateFrom}
        step={1}
        onAfterChange={onAfterChange}
      />
    </span>
    <span> to </span>
    <span className={styles.dateTo}>
      <span>
        {dateTo}
      </span>
      <Slider
        className={styles.slider}
        defaultValue={dateTo}
        step={1}
        onAfterChange={onAfterChange}
      />
    </span>
  </div>
);

FilterText.propTypes = {
  label: PropTypes.string.isRequired,
  dateFrom: PropTypes.number.isRequired,
  dateTo: PropTypes.string.isRequired,
  onAfterChange: PropTypes.func.isRequired,
};

export default FilterText;

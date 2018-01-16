import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import styles from './filterText.less';

const FilterText = ({
  label,
  dateFromValues,
  dateToValues,
  onAfterChange,
  audioTypeText,
}) => (
  <div className={styles.filterText}>
    <span>
      Sorting by the
      <span className={styles.label}>
        &nbsp;{label}&nbsp;
      </span>
      {audioTypeText} that were released from
    </span>
    <span className={styles.dateFrom}>
      <span>
        <input name="filterYear" type="text" defaultValue={dateFromValues.year} />
        <span>&#47;</span>
        <input name="filterMonth" type="text" defaultValue={dateFromValues.month} />
        <span>&#47;</span>
        <input name="filterDate" type="text" defaultValue={dateFromValues.date} />
      </span>
      <Slider
        className={styles.slider}
        defaultValue={dateFromValues.year}
        step={1}
        onAfterChange={onAfterChange}
      />
    </span>
    <span>&nbsp;to&nbsp;</span>
    <span className={styles.dateTo}>
      <span className={styles.dateToInputs}>
        <input name="filterYear" type="text" defaultValue={dateToValues.year} />
        <span>&#47;</span>
        <input name="filterMonth" type="text" defaultValue={dateToValues.month} />
        <span>&#47;</span>
        <input name="filterDate" type="text" defaultValue={dateToValues.date} />
      </span>
      <Slider
        className={styles.slider}
        defaultValue={dateToValues.year}
        step={1}
        onAfterChange={onAfterChange}
      />
    </span>
  </div>
);

FilterText.propTypes = {
  label: PropTypes.string.isRequired,
  audioTypeText: PropTypes.string.isRequired,
  dateFromValues: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  dateToValues: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  onAfterChange: PropTypes.func.isRequired,
};

export default FilterText;

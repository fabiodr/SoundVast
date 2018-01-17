import React from 'react';
import PropTypes from 'prop-types';

import styles from './filterText.less';
import DateFilter from './dateFilterContainer';

const FilterText = ({
  label,
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
    <DateFilter dateFilterName="dateFrom" />
    <span>&nbsp;to&nbsp;</span>
    <DateFilter dateFilterName="dateTo" />
  </div>
);

FilterText.propTypes = {
  label: PropTypes.string.isRequired,
  audioTypeText: PropTypes.string.isRequired,
};

export default FilterText;

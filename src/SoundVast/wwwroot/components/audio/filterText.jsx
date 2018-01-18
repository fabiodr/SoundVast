import React from 'react';
import PropTypes from 'prop-types';

import styles from './filterText.less';
import DateFilter from './dateFilterContainer';

const FilterText = ({
  queryFilterLabel,
  genreLabel,
  audioTypeText,
  hasDateFrom,
  hasDateTo,
}) => (
  queryFilterLabel || genreLabel ? (
    <div className={styles.filterText}>
      <span>
        Sorting
        {queryFilterLabel && (
          <span>&nbsp;by the&nbsp;
            <span className={styles.queryFilterLabel}>
              {queryFilterLabel}
            </span>
          </span>
        )}
        &nbsp;{audioTypeText}
        {genreLabel &&
          <span>
            &nbsp;in the <span className={styles.genreLabel}>{genreLabel}</span> genre
          </span>}
      </span>
      {hasDateFrom && (
        <span>&nbsp;that were released from <DateFilter dateFilterName="dateFrom" /></span>
      )}
      {hasDateTo && (
        <span>&nbsp;to&nbsp;<DateFilter dateFilterName="dateTo" /></span>
      )}
    </div>
  ) : null
);

FilterText.defaultProps = {
  genreLabel: null,
  queryFilterLabel: null,
  hasDateFrom: false,
  hasDateTo: false,
};

FilterText.propTypes = {
  hasDateFrom: PropTypes.bool,
  hasDateTo: PropTypes.bool,
  queryFilterLabel: PropTypes.string,
  genreLabel: PropTypes.string,
  audioTypeText: PropTypes.string.isRequired,
};

export default FilterText;

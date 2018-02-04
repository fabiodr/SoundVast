import React from 'react';
import PropTypes from 'prop-types';

import styles from './filterText.less';
import DateFilter from './dateFilterContainer';
import RemoveFilter from './removeFilterContainer';
import ClearAllFilters from './clearAllFiltersContainer';

const FilterText = ({
  queryFilterDictionary,
  genre,
  searchQuery,
  audioTypeText,
  hasDateFrom,
  hasDateTo,
}) => (
  queryFilterDictionary.key || genre || searchQuery ? (
    <div className={styles.filterText}>
      <ClearAllFilters className={styles.clearAllFilters} />
      <span>
        Sorting
        {queryFilterDictionary.key && (
          <span>&nbsp;by the&nbsp;
            <span className={styles.queryFilterLabel}>
              {queryFilterDictionary.label}
              <RemoveFilter name={queryFilterDictionary.key} />
            </span>
          </span>
        )}
        &nbsp;{audioTypeText}
        {genre &&
          <span>
            &nbsp;in the&nbsp;
            <span className={styles.genreLabel}>
              {genre}
              <RemoveFilter name="genre" />
            </span>
            &nbsp;genre
          </span>}
      </span>
      {searchQuery && (
        <span>
          &nbsp;with a search query of&nbsp;
          <span className={styles.searchQueryLabel}>
            {searchQuery}
            <RemoveFilter name="searchQuery" />
          </span>
        </span>
      )}
      {hasDateFrom && (
        <span>&nbsp;that were released from&nbsp;
          <span className={styles.dateFromLabel}>
            <DateFilter dateFilterName="dateFrom" />
            <RemoveFilter name="dateFrom" />
          </span>
        </span>
      )}
      {hasDateTo && (
        <span>&nbsp;to&nbsp;
          <span className={styles.dateToLabel}>
            <DateFilter dateFilterName="dateTo" />
            <RemoveFilter name="dateTo" />
          </span>
        </span>
      )}
    </div>
  ) : null
);

FilterText.defaultProps = {
  genre: null,
  searchQuery: null,
  queryFilterDictionary: {},
  hasDateFrom: false,
  hasDateTo: false,
};

FilterText.propTypes = {
  hasDateFrom: PropTypes.bool,
  hasDateTo: PropTypes.bool,
  queryFilterDictionary: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }),
  genre: PropTypes.string,
  searchQuery: PropTypes.string,
  audioTypeText: PropTypes.string.isRequired,
};

export default FilterText;

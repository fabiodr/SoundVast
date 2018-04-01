import React from 'react';
import PropTypes from 'prop-types';

import styles from './filterText.less';
import RemoveFilter from './removeFilterContainer';

// TODO: Add clear all filters
const FilterText = ({
  queryFilterDictionary,
  genre,
  searchQuery,
  audioTypeText,
}) => (
  queryFilterDictionary.key || genre || searchQuery ? (
    <div className={styles.filterText}>
      <span>
        Sorting
        {queryFilterDictionary.key && (
          <span>
            &nbsp;by the&nbsp;
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
    </div>
  ) : null
);

FilterText.defaultProps = {
  genre: null,
  searchQuery: null,
  queryFilterDictionary: {},
};

FilterText.propTypes = {
  queryFilterDictionary: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }),
  genre: PropTypes.string,
  searchQuery: PropTypes.string,
  audioTypeText: PropTypes.string.isRequired,
};

export default FilterText;

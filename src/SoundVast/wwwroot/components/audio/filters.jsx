import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import styles from './filters.less';

const options = [
  { value: 100000, label: 'All Time' },
  { value: 365, label: 'Yearly' },
  { value: 30, label: '30 days' },
  { value: 7, label: 'Weekly' },
  { value: 1, label: '24 hours' },
];

const Filters = ({ filter }) => (
  <div className={styles.filters}>
    <div role="button" tabIndex={0} onClick={() => filter('newest', true)}>
      Newest
    </div>
    <Select
      className={styles.select}
      searchable={false}
      simpleValue
      placeholder="Top Rated"
      onChange={value => filter('topRatedDays', value)}
      options={options}
    />
    <Select
      className={styles.select}
      searchable={false}
      simpleValue
      placeholder="Most Commented"
      onChange={value => filter('mostCommentedDays', value)}
      options={options}
    />
    <Select
      className={styles.select}
      searchable={false}
      simpleValue
      placeholder="Most Played"
      onChange={value => filter('mostPlayedDays', value)}
      options={options}
    />
  </div>
);

Filters.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filters;

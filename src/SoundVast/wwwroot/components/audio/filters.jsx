import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';
import Select from 'react-select';

import styles from './filters.less';

const Filters = ({ type, onChange }) => (
  <div className={styles.filters}>
    <Link to={`/genres/${type}`}>Genres</Link>
    <div>
      <Select
        className={styles.select}
        searchable={false}
        simpleValue
        placeholder="Top Rated"
        onChange={onChange}
        options={[
          { value: 'allTime', label: 'All Time' },
          { value: 'yearly', label: 'Yearly' },
          { value: '30Days', label: '30 days' },
          { value: 'weekly', label: 'Weekly' },
          { value: '24Hours', label: '24 hours' },
        ]}
      />
    </div>
  </div>
);

Filters.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filters;

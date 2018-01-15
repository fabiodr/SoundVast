import React from 'react';
import PropTypes from 'prop-types';

import styles from './filters.less';
import Button from '../shared/button/button';
import getFormattedDate from '../shared/utilities/getFormattedDate';

const Filters = ({
  filter,
  dateFrom,
  dateTo = getFormattedDate(new Date()),
  className,
}) => (
  <div className={className}>
    <div className={styles.filterToggles}>
      <Button onClick={() => filter('newest', true)}>Newest</Button>
      <Button onClick={() => filter('topRated', [dateFrom, dateTo])}>Top Rated</Button>
      <Button onClick={() => filter('mostCommented', [dateFrom, dateTo])}>Most Commented</Button>
      <Button onClick={() => filter('mostPlayed', [dateFrom, dateTo])}>Most Played</Button>
    </div>
  </div>
);

Filters.defaultProps = {
  dateFrom: '01/01/2000',
  dateTo: undefined,
  className: null,
};

Filters.propTypes = {
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  filter: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Filters;

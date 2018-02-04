import React from 'react';
import PropTypes from 'prop-types';

import styles from './filters.less';
import Button from '../shared/button/button';
import getFormattedDate from '../shared/utilities/getFormattedDate';


const Filters = ({
  filter,
  dateFrom,
  className,
}) => (
  <div className={className}>
    <div className={styles.filterToggles}>
      <Button onClick={() => filter('newest')}>Newest</Button>
      <Button onClick={() => filter('topRated', { dateFrom })}>Top Rated</Button>
      <Button onClick={() => filter('mostCommented', { dateFrom })}>Most Commented</Button>
      <Button onClick={() => filter('mostPlayed', { dateFrom })}>Most Played</Button>
    </div>
  </div>
);

// TODO: Put -30 in .env file
const defaultDateFrom = () => {
  const date = new Date();

  date.setUTCDate(date.getDate() + -30);

  return getFormattedDate(date);
};

Filters.defaultProps = {
  dateFrom: defaultDateFrom(),
  className: null,
};

Filters.propTypes = {
  dateFrom: PropTypes.string,
  filter: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Filters;

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';
import getFormattedDate from '../shared/utilities/getFormattedDate';

const Filters = ({
  filter,
  dateFrom,
  styleName,
}) => (
  <ul>
    <li><Button styleName={styleName} onClick={() => filter('newest')}>Newest</Button></li>
    <li><Button styleName={styleName} onClick={() => filter('topRated', { dateFrom })}>Top Rated</Button></li>
    <li><Button styleName={styleName} onClick={() => filter('mostCommented', { dateFrom })}>Most Commented</Button></li>
    <li><Button styleName={styleName} onClick={() => filter('mostPlayed', { dateFrom })}>Most Played</Button></li>
  </ul>
);

// TODO: Put -30 in .env file
const defaultDateFrom = () => {
  const date = new Date();

  date.setUTCDate(date.getDate() + -30);

  return getFormattedDate(date);
};

Filters.defaultProps = {
  dateFrom: defaultDateFrom(),
  styleName: 'primary',
};

Filters.propTypes = {
  styleName: PropTypes.string,
  dateFrom: PropTypes.string,
  filter: PropTypes.func.isRequired,
};

export default Filters;

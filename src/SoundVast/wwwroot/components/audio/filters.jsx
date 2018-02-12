import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';
import getFormattedDate from '../shared/utilities/getFormattedDate';

const Filters = ({
  filter,
  dateFrom,
  styleName,
}) => [
  <Button key={0} styleName={styleName} onClick={() => filter('newest')}>Newest</Button>,
  <Button key={1} styleName={styleName} onClick={() => filter('topRated', { dateFrom })}>Top Rated</Button>,
  <Button key={2} styleName={styleName} onClick={() => filter('mostCommented', { dateFrom })}>Most Commented</Button>,
  <Button key={3} styleName={styleName} onClick={() => filter('mostPlayed', { dateFrom })}>Most Played</Button>,
];

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

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button/buttonContainer';

const Filters = ({
  filter,
  styleName,
}) => [
  <Button key={0} styleName={styleName} onClick={() => filter('newest')}>Newest</Button>,
];

Filters.defaultProps = {
  styleName: 'primary',
};

Filters.propTypes = {
  styleName: PropTypes.string,
  filter: PropTypes.func.isRequired,
};

export default Filters;

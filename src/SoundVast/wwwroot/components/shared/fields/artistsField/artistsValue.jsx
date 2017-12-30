import React from 'react';
import PropTypes from 'prop-types';

import convertArtistsToString from '../../../shared/utilities/convertArtistsToString';

const ArtistsValue = ({
  values,
}) => (
  <div className="Select-value">
    <span className="Select-value-label">
      {convertArtistsToString(values.map(value => value.label))}
    </span>
  </div>
);

ArtistsValue.propTypes = {
  values: PropTypes.arrayOf([
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default ArtistsValue;

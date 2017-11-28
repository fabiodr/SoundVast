import React from 'react';
import PropTypes from 'prop-types';

import GridCell from './gridCell';

// https://stackoverflow.com/questions/25514579/css-keep-all-flexbox-children-elements-the-same-size
const FlexWrapFix = ({ numberOfGhostElements }) => {
  const ghostElements = [];

  for (let index = 0; index < numberOfGhostElements; index += 1) {
    ghostElements.push(<GridCell key={index}><div /></GridCell>);
  }

  return ghostElements;
};

FlexWrapFix.propType = {
  numberOfGhostElements: PropTypes.number.isRequired,
};

export default FlexWrapFix;

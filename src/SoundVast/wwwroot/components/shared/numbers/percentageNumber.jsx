import React from 'react';
import PropTypes from 'prop-types';

import getPercentage from '../utilities/getPercentage';

/**
 *
 * Gets the percentage of two numbers from the firstValue
 */
const PercentageNumber = ({ firstValue, secondValue, decimalPoints, className }) => {
  const percent = getPercentage(firstValue, secondValue);

  return (
    !isNaN(percent) && (
      <span className={className}>
        {percent.toFixed(decimalPoints)}%
      </span>
    )
  );
};

PercentageNumber.defaultProps = {
  decimalPoints: 0,
  className: null,
};

PercentageNumber.propTypes = {
  className: PropTypes.string,
  firstValue: PropTypes.number.isRequired,
  secondValue: PropTypes.number.isRequired,
  decimalPoints: PropTypes.number,
};

export default PercentageNumber;


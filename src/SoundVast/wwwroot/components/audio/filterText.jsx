import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

const FilterText = ({ filter, label, from, to }) => (
  filter && (
    <div>
      {label}: From the past {from} {pluralize('day', from)} to the last {to} {pluralize('day', to)}
    </div>
  )
);

FilterText.propTypes = {
  filter: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};

export default FilterText;

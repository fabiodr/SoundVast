import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import countries from 'country-list';

import CountrySelectInput from './countrySelectInput';

const countryNames = countries().getNames();
const mappedCountryList = Object.keys(countryNames).map(key => ({
  label: countryNames[key],
  value: countryNames[key],
}));

const CountryField = ({ id, ...props }) => (
  <label htmlFor={`country_${id}`}>
    <span>Country</span>
    <Field
      {...props}
      name="country"
      id={`country_${id}`}
      component={CountrySelectInput}
      options={mappedCountryList}
    />
  </label>
);

CountryField.defaultProps = {
  id: 0,
};

CountryField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CountryField;

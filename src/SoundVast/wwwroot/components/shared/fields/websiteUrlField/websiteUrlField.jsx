import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputTextField from '../inputField/inputTextField';

const WebsiteUrlField = ({ id, ...props }) => (
  <label htmlFor={`websiteUrl_${id}`}>
    <span>Website Url</span>
    <Field
      {...props}
      name="websiteUrl"
      id={`websiteUrl_${id}`}
      component={InputTextField}
    />
  </label>
);

WebsiteUrlField.defaultProps = {
  id: 0,
};

WebsiteUrlField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default WebsiteUrlField;

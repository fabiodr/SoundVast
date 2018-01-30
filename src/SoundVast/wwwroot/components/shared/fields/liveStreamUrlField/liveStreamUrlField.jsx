import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputTextField from '../inputField/inputTextField';

const LiveStreamUrlField = ({ id, ...props }) => (
  <label htmlFor={`liveStreamUrl_${id}`}>
    <span>Live Stream Url *</span>
    <Field
      {...props}
      name="liveStreamUrl"
      id={`liveStreamUrl_${id}`}
      component={InputTextField}
    />
  </label>
);

LiveStreamUrlField.defaultProps = {
  id: 0,
};

LiveStreamUrlField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default LiveStreamUrlField;

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../input/input';
import normalizeBoolean from '../../utilities/normalizeBoolean';

const FreeField = ({ id, label, ...props }) => (
  <div>
    <span>{label}</span>
    <div>
      <label htmlFor={`free_false_${id}`}>False
        <Field name="free" id={`free_false_${id}`} value={false} component={Input} type="radio" normalize={normalizeBoolean} {...props} />
      </label>
      <label htmlFor={`free_true_${id}`}>True
        <Field name="free" id={`free_true_${id}`} value component={Input} type="radio" normalize={normalizeBoolean} {...props} />
      </label>
    </div>
  </div>
);

FreeField.defaultProps = {
  label: 'Free',
  id: 0,
};

FreeField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default FreeField;

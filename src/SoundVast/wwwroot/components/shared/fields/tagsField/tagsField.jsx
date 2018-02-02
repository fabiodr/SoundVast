import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import TagsSelectInput from './tagsSelectInput';

const TagsField = ({ id, ...props }) => (
  <label htmlFor={`tags_${id}`}>
    <span>Tags</span>
    <Field
      {...props}
      name="tags"
      id={`tags_${id}`}
      component={TagsSelectInput}
    />
  </label>
);

TagsField.defaultProps = {
  id: 0,
};

TagsField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TagsField;

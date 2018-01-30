import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import TagsSelectInput from './tagsSelectInput';

const TagsField = ({ id, tags, ...props }) => {
  const options = tags.map(tag => ({
    label: tag.name,
    value: tag.id,
  }));

  return (
    <label htmlFor={`tags_${id}`}>
      <span>Tags</span>
      <Field
        {...props}
        name="tags"
        id={`tags_${id}`}
        component={TagsSelectInput}
        options={options}
      />
    </label>
  );
};

TagsField.defaultProps = {
  tags: [],
  id: 0,
};

TagsField.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TagsField;

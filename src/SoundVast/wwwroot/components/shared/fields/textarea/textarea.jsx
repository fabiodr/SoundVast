import React from 'react';
import PropTypes from 'prop-types';
import ResizableTextArea from 'react-fluid-textarea';

const Textarea = ({ input }) => (
  <ResizableTextArea
    value={input.value}
    onChange={e => input.onChange(e.currentTarget.value)}
    placeholder="Add your comment..."
  />
);

Textarea.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default Textarea;

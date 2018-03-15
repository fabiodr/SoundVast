import React from 'react';
import PropTypes from 'prop-types';

const LikeIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <title>Like</title>
    <path d="M14.5 9c1.141 0 .5 3-.5 3 .5 0 0 2.5-1 2.5 0 1-1 1.5-2 1.5-4.224 0-2.739-1.057-7-1.5v-8c3.764-1.129 7.5-3.96 7.5-6.5.828 0 3 1 0 6h3c1.5 0 1 3 0 3zM3 6.5v8h1v.5H2c-.55 0-1-.675-1-1.5v-6C1 6.675 1.45 6 2 6h2v.5H3z" />
  </svg>
);

LikeIcon.defaultProps = {
  className: null,
};

LikeIcon.propTypes = {
  className: PropTypes.string,
};

export default LikeIcon;

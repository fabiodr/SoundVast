import React from 'react';
import PropTypes from 'prop-types';

const DislikeIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M1.5 7C.359 7 1 4 2 4c-.5 0 0-2.5 1-2.5C3 .5 4 0 5 0c4.224 0 2.739 1.057 7 1.5v8c-3.764 1.129-7.5 3.96-7.5 6.5-.828 0-3-1 0-6h-3c-1.5 0-1-3 0-3zM13 9.5v-8h-1V1h2c.55 0 1 .675 1 1.5v6c0 .825-.45 1.5-1 1.5h-2v-.5h1z" />
  </svg>
);

DislikeIcon.defaultProps = {
  className: null,
};

DislikeIcon.propTypes = {
  className: PropTypes.string,
};

export default DislikeIcon;

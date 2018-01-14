import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
  </svg>
);

SearchIcon.defaultProps = {
  className: null,
};

SearchIcon.propTypes = {
  className: PropTypes.string,
};

export default SearchIcon;

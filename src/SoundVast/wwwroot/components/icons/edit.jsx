import React from 'react';
import PropTypes from 'prop-types';

const EditIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M13.5 0C14.881 0 16 1.119 16 2.5c0 .563-.186 1.082-.5 1.5l-1 1L11 1.5l1-1c.418-.314.937-.5 1.5-.5zM1 11.5L0 16l4.5-1 9.25-9.25-3.5-3.5L1 11.5zm10.181-5.819l-7 7-.862-.862 7-7 .862.862z" />
  </svg>
);

EditIcon.defaultProps = {
  className: null,
};

EditIcon.propTypes = {
  className: PropTypes.string,
};

export default EditIcon;

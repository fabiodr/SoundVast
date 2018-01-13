import React from 'react';
import PropTypes from 'prop-types';

const AddToPlaylistIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M13 0h-2v11.142c-.313-.092-.649-.142-1-.142-1.657 0-3 1.119-3 2.5S8.343 16 10 16s3-1.119 3-2.5V3l3 1V2l-3-2zM5.031 14H0v2h5.839c-.44-.596-.718-1.283-.807-2zm.808-3H0v2h5.031c.089-.717.368-1.404.807-2z" />
    <path d="M9 9.09V8H0v2h6.85c.627-.457 1.364-.768 2.15-.91zM7.031 3H5V1H3v2H.969v2H3v2h2V5h2.031z" />
  </svg>
);

AddToPlaylistIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AddToPlaylistIcon;

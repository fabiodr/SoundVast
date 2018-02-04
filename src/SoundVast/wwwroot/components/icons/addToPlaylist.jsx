import React from 'react';
import PropTypes from 'prop-types';

const AddToPlaylistIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M2.016 15.984v-1.969h7.969v1.969H2.016zM18 14.016h3.984v1.969H18v4.031h-2.016v-4.031H12v-1.969h3.984V9.985H18v4.031zM14.016 6v2.016h-12V6h12zm0 3.984V12h-12V9.984h12z" />
  </svg>
);

AddToPlaylistIcon.defaultProps = {
  className: null,
};

AddToPlaylistIcon.propTypes = {
  className: PropTypes.string,
};

export default AddToPlaylistIcon;

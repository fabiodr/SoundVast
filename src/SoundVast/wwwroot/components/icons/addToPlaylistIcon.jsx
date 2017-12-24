import React from 'react';
import PropTypes from 'prop-types';

const AddToPlaylistIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
    <path d="M33 22c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 20c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9z" />
    <path d="M37 32h-3v-3c0-.553-.448-1-1-1s-1 .447-1 1v3h-3c-.552 0-1 .447-1 1s.448 1 1 1h3v3c0 .553.448 1 1 1s1-.447 1-1v-3h3c.552 0 1-.447 1-1s-.448-1-1-1z" />
    <path fillRule="evenodd" d="M1 2h28c.552 0 1-.447 1-1s-.448-1-1-1H1C.448 0 0 .447 0 1s.448 1 1 1zm23 18H1c-.552 0-1 .447-1 1s.448 1 1 1h23c.552 0 1-.447 1-1s-.448-1-1-1zm5-10H1c-.552 0-1 .447-1 1s.448 1 1 1h28c.552 0 1-.447 1-1s-.448-1-1-1zM17 30H1c-.552 0-1 .447-1 1s.448 1 1 1h16c.552 0 1-.447 1-1s-.448-1-1-1z" />
  </svg>
);

AddToPlaylistIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AddToPlaylistIcon;

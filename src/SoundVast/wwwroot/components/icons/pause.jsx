import React from 'react';
import PropTypes from 'prop-types';

const PauseIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="438.536px" height="438.536px" viewBox="0 0 438.536 438.536">
    <path d="M164.453,0H18.276C13.324,0,9.041,1.807,5.425,5.424C1.808,9.04,0.001,13.322,0.001,18.271v401.991c0,4.948,1.807,9.233,5.424,12.847c3.619,3.617,7.902,5.428,12.851,5.428h146.181c4.949,0,9.231-1.811,12.847-5.428c3.617-3.613,5.424-7.898,5.424-12.847V18.271c0-4.952-1.807-9.231-5.428-12.847C173.685,1.807,169.402,0,164.453,0z" />
    <path d="M433.113,5.424C429.496,1.807,425.215,0,420.267,0H274.086c-4.949,0-9.237,1.807-12.847,5.424c-3.621,3.615-5.432,7.898-5.432,12.847v401.991c0,4.948,1.811,9.233,5.432,12.847c3.609,3.617,7.897,5.428,12.847,5.428h146.181c4.948,0,9.229-1.811,12.847-5.428c3.614-3.613,5.421-7.898,5.421-12.847V18.271C438.534,13.319,436.73,9.04,433.113,5.424z" />
  </svg>
);

PauseIcon.defaultProps = {
  className: null,
};

PauseIcon.propTypes = {
  className: PropTypes.string,
};

export default PauseIcon;

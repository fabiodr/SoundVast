import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="768px" height="768px" viewBox="0 0 768 768">
    <path d="M576 448.5V384H400.5L336 448.5h240zm-384 0h79.5L492 228c6-6 6-16.5 0-22.5l-57-57c-6-6-16.5-6-22.5 0L192 369v79.5zm448.5-384c34.5 0 63 28.5 63 63v384c0 34.5-28.5 64.5-63 64.5H192L64.5 703.5v-576c0-34.5 28.5-63 63-63h513z" />
  </svg>
);

Review.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Review;

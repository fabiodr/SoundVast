import React from 'react';
import PropTypes from 'prop-types';

const ReviewIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M18 14.016V12h-5.484L10.5 14.016H18zm-12 0h2.484l6.891-6.891c.188-.188.188-.516 0-.703l-1.781-1.781c-.188-.188-.516-.188-.703 0L6 11.532v2.484zm14.016-12c1.078 0 1.969.891 1.969 1.969v12c0 1.078-.891 2.016-1.969 2.016H6l-3.984 3.984v-18c0-1.078.891-1.969 1.969-1.969h16.031z" />
  </svg>
);

ReviewIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ReviewIcon;

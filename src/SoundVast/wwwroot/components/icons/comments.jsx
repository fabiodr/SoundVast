import React from 'react';
import PropTypes from 'prop-types';

const CommentsIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32">
    <title>Comments</title>
    <path d="M34 28.161c0 1.422.813 2.653 2 3.256v.498c-.332.045-.671.07-1.016.07-2.125 0-4.042-.892-5.398-2.321-.819.218-1.688.336-2.587.336-4.971 0-9-3.582-9-8s4.029-8 9-8 9 3.582 9 8c0 1.73-.618 3.331-1.667 4.64-.213.463-.333.979-.333 1.522zM16 0c8.702 0 15.781 5.644 15.995 12.672-1.537-.685-3.237-1.047-4.995-1.047-2.986 0-5.807 1.045-7.942 2.943-2.214 1.968-3.433 4.607-3.433 7.432 0 1.396.298 2.747.867 3.993-.163.004-.327.007-.492.007-.849 0-1.682-.054-2.495-.158C10.068 29.279 5.966 29.895 2 29.986v-.841C4.142 28.096 6 26.184 6 24c0-.305-.024-.604-.068-.897C2.313 20.72 0 17.079 0 13 0 5.82 7.163 0 16 0z" />
  </svg>
);

CommentsIcon.defaultProps = {
  className: null,
};

CommentsIcon.propTypes = {
  className: PropTypes.string,
};

export default CommentsIcon;

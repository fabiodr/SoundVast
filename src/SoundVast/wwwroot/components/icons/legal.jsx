import React from 'react';
import PropTypes from 'prop-types';

const LegalIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <title>Legal</title>
    <path d="M6 7.5V7H0v.5C0 8.328.672 9 1.5 9h3C5.328 9 6 8.328 6 7.5zm4 0c0 .828.672 1.5 1.5 1.5h3c.828 0 1.5-.672 1.5-1.5V7h-6v.5z" />
    <path d="M9 2h3.15l-2.087 3.757c-.134.241-.047.546.194.68s.546.047.68-.194L13 2.53l2.063 3.713c.091.164.262.257.438.257.082 0 .165-.02.242-.063.241-.134.328-.439.194-.68l-2.5-4.5C13.349 1.098 13.182 1 13 1H9c0-.552-.448-1-1-1S7 .448 7 1H3c-.182 0-.349.098-.437.257l-2.5 4.5c-.134.241-.047.546.194.68s.546.047.68-.194L3 2.53l2.063 3.713c.091.164.262.257.438.257.082 0 .165-.02.242-.063.241-.134.328-.439.194-.68L3.85 2H7v12l-3 1v1h8v-1l-3-1V2z" />
  </svg>
);

LegalIcon.defaultProps = {
  className: null,
};

LegalIcon.propTypes = {
  className: PropTypes.string,
};

export default LegalIcon;

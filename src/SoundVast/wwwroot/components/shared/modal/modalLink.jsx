import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, onClick, className }) => (
  <a tabIndex={0} role="link" onClick={onClick} className={className}>
    {children}
  </a>
);

Link.defaultProps = {
  className: null,
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Link;

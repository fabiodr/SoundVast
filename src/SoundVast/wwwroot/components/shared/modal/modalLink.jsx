import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, onClick }) => (
  <a tabIndex={0} role="link" onClick={onClick}>
    {children}
  </a>
);

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;

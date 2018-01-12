import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ title, children, onClick, className }) => (
  <a title={title} tabIndex={0} role="link" onClick={onClick} className={className}>
    {children}
  </a>
);

Link.defaultProps = {
  className: null,
  title: null,
};

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Link;

import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const ModalButton = ({ title, children, onClick, className, ...props }) => (
  <Button title={title} onClick={onClick} className={className} {...props}>
    {children}
  </Button>
);

ModalButton.defaultProps = {
  className: null,
  title: null,
};

ModalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default ModalButton;

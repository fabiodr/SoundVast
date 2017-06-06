import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ children, popupClass }) => (
  <div className={popupClass}>
    {children}
  </div>
);

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  popupClass: PropTypes.string.isRequired,
};

export default Popup;

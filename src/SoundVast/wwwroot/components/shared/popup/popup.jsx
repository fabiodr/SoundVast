import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ text, popupClass }) => (
  <div className={popupClass}>
    {text}
  </div>
);

Popup.defaultProps = {
  text: null,
};

Popup.propTypes = {
  text: PropTypes.node,
  popupClass: PropTypes.string.isRequired,
};

export default Popup;

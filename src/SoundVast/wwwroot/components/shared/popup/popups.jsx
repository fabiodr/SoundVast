import React from 'react';
import PropTypes from 'prop-types';

import Popup from './popup';
import styles from './popups.less';

const Popups = ({ popups, hidePopup }) => (
  <div className={styles.popups}>
    {popups.map((popup, index) => (
      <Popup
        key={popup.id}
        index={index}
        text={popup.text}
        hidePopup={hidePopup}
      />
    ))}
  </div>
);

Popups.propTypes = {
  hidePopup: PropTypes.func.isRequired,
  popups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Popups;

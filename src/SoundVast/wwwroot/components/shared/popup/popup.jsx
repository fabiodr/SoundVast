import React from 'react';
import PropTypes from 'prop-types';

import styles from './popup.less';

class Popup extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.hidePopup(this.props.index), 6000);
  }
  render() {
    return (
      <div className={styles.popup}>
        {this.props.text}
      </div>
    );
  }
}

Popup.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  hidePopup: PropTypes.func.isRequired,
};

export default Popup;

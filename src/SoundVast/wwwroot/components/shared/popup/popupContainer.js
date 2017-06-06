import { connect } from 'react-redux';
import classNames from 'classnames';

import styles from './popup.less';
import Popup from './popup';
import { hidePopup } from './popupActions';

const mapStateToProps = ({ popup }, { id }) => ({
  popupClass: classNames(styles.popup, {
    [styles.hide]: popup.currentPopup !== id,
  }),
});

export default connect(mapStateToProps, {
  hidePopup,
})(Popup);

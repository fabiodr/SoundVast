import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import classNames from 'classnames';

import styles from './popup.less';
import Popup from './popup';
import { hidePopup } from './popupActions';

const mapStateToProps = ({ popup }, { id }) => {
  const isCurrentPopup = popup.currentPopup === id;

  return {
    popupClass: classNames(styles.popup, {
      [styles.hide]: !isCurrentPopup,
    }),
    isCurrentPopup,
    text: popup.text,
  };
};

export default compose(
  connect(mapStateToProps, {
    hidePopup,
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.isCurrentPopup) {
        setTimeout(nextProps.hidePopup, 2000);
      }
    },
  }),
)(Popup);

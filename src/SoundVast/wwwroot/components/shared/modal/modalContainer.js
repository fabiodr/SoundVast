import { connect } from 'react-redux';
import classNames from 'classnames';

import styles from './modal.less';
import Modal from './modal';
import { hideModal } from './actions';

const mapStateToProps = ({ modal }, { id }) => ({
  modalContainerClass: classNames({
    [styles.hide]: modal.currentModal !== id,
  }),
});

export default connect(mapStateToProps, {
  hideModal,
})(Modal);

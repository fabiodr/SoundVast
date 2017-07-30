import { connect } from 'react-redux';
import classNames from 'classnames';

import styles from './component.less';
import Modal from './component';
import { hideModal } from './actions';

const mapStateToProps = ({ modal }, { id }) => ({
  modalContainerClass: classNames({
    [styles.hide]: modal.currentModal !== id,
  }),
});

export default connect(mapStateToProps, {
  hideModal,
})(Modal);

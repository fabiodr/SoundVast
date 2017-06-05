import { connect } from 'react-redux';
import classNames from 'classnames';

import styles from './modal.less';
import Modal from './modal';
import { hideModal } from './modalActions';

const mapStateToProps = ({ modal }, { id }) => ({
  containerClass: classNames({
    [styles.hide]: modal.currentModal !== id,
  }),
});

export default connect(mapStateToProps, {
  hideModal,
})(Modal);

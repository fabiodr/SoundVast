import { connect } from 'react-redux';
import classNames from 'classnames';

import styles from './modal.less';
import Modal from './modal';
import { showModal } from './modalActions';

const mapStateToProps = ({ modal }, { id }) => ({
  containerClass: classNames({
    [styles.hide]: modal.currentModal !== id,
  }),
});

export default connect(mapStateToProps, {
  showModal,
})(Modal);

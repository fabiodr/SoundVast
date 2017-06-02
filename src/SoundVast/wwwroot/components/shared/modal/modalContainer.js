import { connect } from 'react-redux';

import Modal from './modal';
import { showModal } from './modalActions';

const mapStateToProps = ({ modal }, { id }) => ({
  showCurrentModal: modal.currentModal === id,
});

export default connect(mapStateToProps, {
  showModal,
})(Modal);

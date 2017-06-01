import { connect } from 'react-redux';

import Modal from './modal';

const mapStateToProps = ({ modal }, { id }) => ({
  showModal: modal.currentModal === id,
});

export default connect(mapStateToProps)(Modal);

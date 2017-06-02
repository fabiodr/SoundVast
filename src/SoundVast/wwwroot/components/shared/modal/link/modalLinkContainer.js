import { connect } from 'react-redux';

import ModalLink from './modalLink';
import { showModal } from '../modalActions';

export default connect(null, {
  showModal,
})(ModalLink);

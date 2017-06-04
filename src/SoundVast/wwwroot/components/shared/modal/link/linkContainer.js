import { connect } from 'react-redux';

import ModalLink from './link';
import { showModal } from '../modalActions';

export default connect(null, {
  showModal,
})(ModalLink);

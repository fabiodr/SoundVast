import { connect } from 'react-redux';

import ModalLink from './modalLink';
import { showModal } from './actions';

export default connect(null, {
  showModal,
})(ModalLink);

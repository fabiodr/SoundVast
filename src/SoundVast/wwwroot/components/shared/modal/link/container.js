import { connect } from 'react-redux';

import ModalLink from './link';
import { showModal } from '../actions';

export default connect(null, {
  showModal,
})(ModalLink);

import { connect } from 'react-redux';

import ModalLink from './component';
import { showModal } from '../actions';

export default connect(null, {
  showModal,
})(ModalLink);

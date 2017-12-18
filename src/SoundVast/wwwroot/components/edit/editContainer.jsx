import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { showModal } from '../shared/modal/actions';
import Edit from './edit';

const handlers = {
  onClick: ({ dispatch, audioId }) => () => {
    dispatch(showModal('editSong', { id: audioId }));
  },
};

export default compose(
  connect(),
  withHandlers(handlers),
)(Edit);

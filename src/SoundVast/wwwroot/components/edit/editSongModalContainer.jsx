import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import EditSongModal from './editSongModal';
import { hideModal } from '../shared/modal/actions';
import editSongMutation from './editSongMutation';
import { showEditPopup } from './actions';

const mapStateToProps = ({ modal }) => ({
  songId: modal.id,
});

const handlers = {
  onSubmit: ({ dispatch, songId }) => input =>
    editSongMutation(input, songId)
      .then(() => {
        dispatch(showEditPopup());
        dispatch(hideModal());
      }).catch((error) => {
        throw new SubmissionError(error);
      }),
};

export default compose(
  connect(mapStateToProps),
  setPropTypes({
    songId: PropTypes.number,
  }),
  withHandlers(handlers),
)(EditSongModal);

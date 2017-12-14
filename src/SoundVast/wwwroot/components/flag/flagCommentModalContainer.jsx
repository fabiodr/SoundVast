import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import FlagCommentModal from './flagCommentModal';
import { hideModal } from '../shared/modal/actions';
import flagCommentMutation from './flagCommentMutation';
import { showFlaggedPopup } from './actions';

const mapStateToProps = ({ modal }) => ({
  commentId: modal.id,
});

const handlers = {
  onSubmit: ({ dispatch, commentId }) => input =>
    flagCommentMutation(input, commentId)
      .then(() => {
        dispatch(showFlaggedPopup());
        dispatch(hideModal());
      }).catch((error) => {
        if (!input.reason) {
          throw new SubmissionError({
            _error: ['A reason for flagging is required'],
          });
        }
        throw new SubmissionError(error);
      }),
};

export default compose(
  connect(mapStateToProps),
  setPropTypes({
    commentId: PropTypes.number,
  }),
  withHandlers(handlers),
)(FlagCommentModal);

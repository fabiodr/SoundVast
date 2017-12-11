import { reduxForm, SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import FlagModal from './flagModal';
import flagValidation from './validation';
import { hideModal } from '../shared/modal/actions';
import flagAudioMutation from './flagAudioMutation';

const mapStateToProps = ({ modal }) => ({
  audioId: modal.id,
});

const handlers = {
  onSubmit: ({ dispatch, audioId }) => input =>
    flagAudioMutation(input, audioId)
      .then(() => {
        dispatch(hideModal());
      }).catch((error) => {
        throw new SubmissionError(error);
      }),
};

export default compose(
  connect(mapStateToProps),
  setPropTypes({
    audioId: PropTypes.number,
  }),
  withHandlers(handlers),
  reduxForm({
    form: 'flag',
    validate: flagValidation,
  }),
)(FlagModal);

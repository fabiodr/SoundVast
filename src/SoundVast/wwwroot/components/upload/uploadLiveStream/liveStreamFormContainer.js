import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import LiveStreamForm from './liveStreamForm';
import uploadValidation from '../validation';
import { submitLiveStream, removeLiveStreamForm } from '../actions';

const mapDispatchToProps = (dispatch, { id, index }) => ({
  onSubmit: values => dispatch(submitLiveStream(id, values)),
  removeLiveStreamForm: () => dispatch(removeLiveStreamForm(index)),
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    validate: uploadValidation,
  }),
)(LiveStreamForm);

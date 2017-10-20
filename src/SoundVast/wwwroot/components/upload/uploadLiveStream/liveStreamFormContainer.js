import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LiveStreamForm from './liveStreamForm';
import uploadValidation from '../validation';
import { submitLiveStream, removeLiveStreamForm } from '../actions';
import { getLiveStreamGenres } from '../../genre/actions';

const mapDispatchToProps = (dispatch, { id, index }) => ({
  onSubmit: values => dispatch(submitLiveStream(id, values)),
  getLiveStreamGenres: () => dispatch(getLiveStreamGenres()),
  removeLiveStreamForm: () => dispatch(removeLiveStreamForm(index)),
});

export default compose(
  connect(null, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getLiveStreamGenres();
    },
  }),
  reduxForm({
    validate: uploadValidation,
  }),
)(LiveStreamForm);

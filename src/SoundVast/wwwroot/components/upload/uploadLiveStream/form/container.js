import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './component';
import uploadValidation from '../../validation';
import { submitLiveStreams } from '../../actions';
import { getLiveStreamGenres } from '../../../genre/actions';

const mapDispatchToProps = (dispatch, { id }) => ({
  onSubmit: values => dispatch(submitLiveStreams(id, values)),
  getLiveStreamGenres: () => dispatch(getLiveStreamGenres()),
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
)(UploadFileForm);

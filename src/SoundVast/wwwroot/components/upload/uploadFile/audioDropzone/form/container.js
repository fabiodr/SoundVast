import { reduxForm, change } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './component';
import { submitFiles } from '../../../actions';
import { getGenres } from '../../../../genre/actions';
import uploadValidation from '../../../validation';

export const mapStateToProps = ({ upload }, { index }) => ({
  initialValues: {
    name: upload.audioFiles[index].title,
    artist: upload.audioFiles[index].artist,
  },
  isSubmitting: upload.audioFiles[index].isSubmitting,
});

const mapDispatchToProps = (dispatch, { index }) => ({
  onSubmit: values => dispatch(submitFiles(values, index)),
  getGenres: () => dispatch(getGenres()),
  change: (...values) => dispatch(change(values)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getGenres();
    },
  }),
  reduxForm({
    validate: uploadValidation,
  }),
)(UploadFileForm);

import { reduxForm, change } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './form';
import { submit } from './actions';
import { getGenres } from '../../../../genre/actions';
import uploadValidation from '../../../validation';

export const mapStateToProps = ({ genre, upload }, { index }) => ({
  initialValues: {
    name: upload.audioFiles[index].title,
    artist: upload.audioFiles[index].artist,
  },
});

const mapDispatchToProps = (dispatch, { index }) => ({
  onSubmit: values => dispatch(submit(values, index)),
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

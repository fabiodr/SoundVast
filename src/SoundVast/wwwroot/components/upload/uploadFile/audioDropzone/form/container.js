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
    coverImageUrl: upload.audioFiles[index].previewCoverImageUrl,
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(submit(values)),
  getGenres: () => dispatch(getGenres()),
  change: (...values) => dispatch(change(values)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getGenres();
    },
    componentWillReceiveProps(nextProps) {
      if (this.props.initialValues.coverImageUrl !== nextProps.initialValues.coverImageUrl) {
        this.props.change(this.props.form, 'coverImageUrl', nextProps.initialValues.coverImageUrl);
      }
    },
  }),
  reduxForm({
    validate: uploadValidation,
  }),
)(UploadFileForm);

import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './component';
import { submitFile, removeMusicForm } from '../../../actions';
import { getMusicGenres } from '../../../../genre/actions';
import uploadValidation from '../../../validation';

const mapStateToProps = ({ upload }, { index }) => ({
  initialValues: {
    name: upload.audioFiles[index].title,
    artist: upload.audioFiles[index].artist,
  },
});

const mapDispatchToProps = (dispatch, { id, index }) => ({
  onSubmit: values => dispatch(submitFile(id, values)),
  getMusicGenres: () => dispatch(getMusicGenres()),
  removeMusicForm: () => dispatch(removeMusicForm(index)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getMusicGenres();
    },
  }),
  reduxForm({
    validate: uploadValidation,
  }),
)(UploadFileForm);

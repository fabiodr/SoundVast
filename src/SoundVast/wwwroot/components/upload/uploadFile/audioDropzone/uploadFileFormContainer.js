import { reduxForm } from 'redux-form';
import { compose, withHandlers, flattenProp } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './uploadFileForm';
import { submitFile, removeMusicForm } from '../../actions';
import uploadValidation from '../../validation';
import validationError from '../../../shared/fetch/validationError/validationError';
import saveSongMutation from './saveSongMutation';

const mapStateToProps = ({ upload }, { index, id }) => ({
  initialValues: {
    name: upload.audioFiles[index].title,
    artist: upload.audioFiles[index].artist,
  },
  coverImage: upload.coverImages[id],
});

const mapDispatchToProps = (dispatch, { id, index }) => ({
  // onSubmit: values => dispatch(submitFile(id, values)),
  removeMusicForm: () => dispatch(removeMusicForm(index)),
});

const handlers = {
  // onSubmit: () => values => saveSongMutation(values),
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  reduxForm({
    validate: uploadValidation,
  }),
)(UploadFileForm);

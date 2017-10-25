import { reduxForm } from 'redux-form';
import { compose, withHandlers, flattenProp, withProps } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import UploadFileForm from './uploadFileForm';
import { submitFile, removeMusicForm } from '../../actions';
import uploadValidation from '../../validation';
import validationError from '../../../shared/fetch/validationError/validationError';
import saveSongMutation from './saveSongMutation';

const mapStateToProps = ({ upload }, { index, id }) => ({
  audioFile: upload.audioFiles[index],
  coverImage: upload.coverImages[id],
});

const mapDispatchToProps = (dispatch, { id, index }) => ({
  // onSubmit: values => dispatch(submitFile(id, values)),
  removeMusicForm: () => dispatch(removeMusicForm(index)),
});

const handlers = {
  onSubmit: () => saveSongMutation,
};

const createProps = ({ title, artist, imagePath }) => ({
  initialValues: {
    name: title,
    artist,
    imagePath,
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  flattenProp('coverImage'),
  flattenProp('audioFile'),
  withProps(createProps),
  reduxForm({
    validate: uploadValidation,
    enableReinitialize: true,
  }),
)(UploadFileForm);

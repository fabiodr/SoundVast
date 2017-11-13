import { reduxForm } from 'redux-form';
import { compose, withHandlers, flattenProp, withProps } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './uploadFileForm';
import { removeMusicForm } from '../actions';
import uploadValidation from '../validation';
import saveSongMutation from './saveSongMutation';

const mapStateToProps = ({ upload }, { index, id }) => ({
  audioFile: upload.audioFiles[index],
  coverImage: upload.coverImages[id],
});

const mapDispatchToProps = (dispatch, { index }) => ({
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

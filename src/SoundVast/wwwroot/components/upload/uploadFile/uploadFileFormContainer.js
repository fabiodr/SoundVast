import { reduxForm } from 'redux-form';
import { compose, withHandlers, flattenProp, withProps } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './uploadFileForm';
import { removeMusicForm } from '../actions';
import { showAddedContributionPoints } from '../../account/actions';
import audioValidation from '../../shared/validation/audioValidation';
import saveSongMutation from './saveSongMutation';

const mapStateToProps = ({ upload }, { index, id }) => ({
  audioFile: upload.audioFiles[index],
  coverImage: upload.coverImages[id],
});

const mapDispatchToProps = (dispatch, { index }) => ({
  removeMusicForm: () => dispatch(removeMusicForm(index)),
  showAddedContributionPoints: newPoints => dispatch(showAddedContributionPoints(newPoints)),
});

const handlers = {
  onSubmit: props => input => saveSongMutation(input)
    .then(({ saveSong }) => {
      props.showAddedContributionPoints(saveSong.contributionPoints);
    }),
};

const createProps = ({ title, artist, album, imagePath }) => ({
  initialValues: {
    name: title,
    album: { label: album, value: album },
    artists: [{ label: artist, value: artist }],
    imagePath,
    free: true,
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  flattenProp('coverImage'),
  flattenProp('audioFile'),
  withProps(createProps),
  reduxForm({
    validate: audioValidation,
    enableReinitialize: true,
  }),
)(UploadFileForm);

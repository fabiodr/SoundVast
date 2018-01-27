import React from 'react';
import PropTypes from 'prop-types';

import EditModal from './editModalContainer';
import NameField from '../shared/fields/nameField/nameField';
import ArtistsField from '../shared/fields/artistsField/artistsField';
import FreeField from '../shared/fields/freeField/freeField';
import SongGenresField from '../shared/fields/genresField/songGenresFieldContainer';
import ImageDropzone from '../shared/imageDropzone/imageDropzone';
import PreviewImage from '../shared/previewImage/previewImage';

const EditSongModal = ({
  onSubmit,
  onDrop,
  initialValues,
  previewUrl,
  isAuthorized,
  songGenres,
}) => (
  <EditModal modalId="editSong" initialValues={initialValues} onSubmit={onSubmit} isAuthorized={isAuthorized}>
    <NameField />
    <ArtistsField />
    <SongGenresField genres={songGenres} />
    <FreeField />
    <ImageDropzone onDrop={onDrop}>
      <PreviewImage previewUrl={previewUrl} />
    </ImageDropzone>
  </EditModal>
);

EditSongModal.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
    imagePath: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ).isRequired,
    free: PropTypes.bool.isRequired,
  }).isRequired,
  previewUrl: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onDrop: PropTypes.func.isRequired,
  songGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditSongModal;

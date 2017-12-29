import React from 'react';
import PropTypes from 'prop-types';

import EditModal from './editModalContainer';
import NameField from '../shared/fields/nameField/nameField';
import ArtistField from '../shared/fields/artistField/artistField';
import FreeField from '../shared/fields/freeField/freeField';
import SongGenresField from '../shared/fields/genreField/songGenresFieldContainer';
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
    <ArtistField />
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
    artist: PropTypes.string,
    genreId: PropTypes.string.isRequired,
  }).isRequired,
  previewUrl: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onDrop: PropTypes.func.isRequired,
  songGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditSongModal;

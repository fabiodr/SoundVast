import React from 'react';
import PropTypes from 'prop-types';

import EditModal from './editModalContainer';
import NameField from '../shared/fields/nameField/nameField';
import ArtistField from '../shared/fields/artistField/artistField';
import FreeField from '../shared/fields/freeField/freeField';
import GenreField from '../shared/fields/genreField/genreFieldContainer';
import genreTypeNames from '../shared/utilities/genreTypeNames';
import ImageDropzone from '../shared/imageDropzone/imageDropzone';
import PreviewImage from '../shared/previewImage/previewImage';

const EditSongModal = ({ onSubmit, onDrop, initialValues, previewUrl, isAuthorized, genres }) => (
  <EditModal modalId="editSong" initialValues={initialValues} onSubmit={onSubmit} isAuthorized={isAuthorized}>
    <NameField />
    <ArtistField />
    <GenreField type={genreTypeNames.music} genres={genres} />
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
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditSongModal;

import React from 'react';
import PropTypes from 'prop-types';

import EditModal from './editModalContainer';
import NameField from '../shared/fields/nameField/nameField';

const EditSongModal = ({ onSubmit, isAuthorized, song }) => (
  <EditModal modalId="editSong" onSubmit={onSubmit} isAuthorized={isAuthorized}>
    <NameField placeholder={song.name} />
  </EditModal>
);

EditSongModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  song: PropTypes.shape({
    coverImageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditSongModal;

import React from 'react';
import PropTypes from 'prop-types';

import EditModal from './editModalContainer';
import NameField from '../shared/fields/nameField/nameField';

const EditSongModal = ({ onSubmit, isAuthorized }) => (
  <EditModal modalId="editSong" onSubmit={onSubmit} isAuthorized={isAuthorized}>
    <NameField />
  </EditModal>
);

EditSongModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default EditSongModal;

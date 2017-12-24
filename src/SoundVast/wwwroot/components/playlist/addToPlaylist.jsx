import React from 'react';
import PropTypes from 'prop-types';

import AddToPlaylistIcon from '../icons/addToPlaylistIcon';
import styles from './addToPlaylist.less';

const AddToPlaylist = ({ onClick }) => (
  <span role="button" tabIndex={0} onClick={onClick}>
    <AddToPlaylistIcon className={styles.addToPlaylistIcon} />
  </span>
);

AddToPlaylist.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToPlaylist;

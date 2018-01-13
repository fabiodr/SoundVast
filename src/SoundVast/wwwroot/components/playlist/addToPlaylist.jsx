import React from 'react';
import PropTypes from 'prop-types';

import AddToPlaylistIcon from '../icons/addToPlaylistIcon';
import styles from './addToPlaylist.less';

const AddToPlaylist = ({ onClick }) => (
  <button className={styles.addToPlaylist} title="Add to playlist" onClick={onClick}>
    <AddToPlaylistIcon className={styles.addToPlaylistIcon} />
  </button>
);

AddToPlaylist.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToPlaylist;

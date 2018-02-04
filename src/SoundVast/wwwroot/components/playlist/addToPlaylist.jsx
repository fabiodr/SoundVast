import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AddToPlaylistIcon from '../icons/addToPlaylist';
import styles from './addToPlaylist.less';

const AddToPlaylist = ({ onClick, className }) => (
  <button className={classnames(styles.addToPlaylist, className)} title="Add to playlist" onClick={onClick}>
    <AddToPlaylistIcon className={styles.addToPlaylistIcon} />
  </button>
);

AddToPlaylist.defaultProps = {
  className: null,
};

AddToPlaylist.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default AddToPlaylist;

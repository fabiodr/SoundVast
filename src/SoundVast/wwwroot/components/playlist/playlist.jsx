import React from 'react';
import PropTypes from 'prop-types';

import CoverImage from '../audio/coverImage';
import Play from './playContainer';

const Playlist = ({ coverImageUrl, id, name, getCurrentPlaylist }) => (
  <div>
    {name}
    <Play id={id} getCurrentPlaylist={getCurrentPlaylist}>
      <CoverImage coverImageUrl={coverImageUrl} />
    </Play>
  </div>
);

Playlist.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  getCurrentPlaylist: PropTypes.func.isRequired,
};

export default Playlist;

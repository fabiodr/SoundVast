import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/soundVastTitle/component';

import Song from './song/component';
import Audios from '../shared/audios/component';

const Songs = ({ songs, fetchSongs, hasMore, getPlaylist }) => (
  <SoundVastTitle title="Songs">
    <Audios audios={songs} fetchAudios={fetchSongs} getPlaylist={getPlaylist} hasMore={hasMore}>
      <Song />
    </Audios>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getPlaylist: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;

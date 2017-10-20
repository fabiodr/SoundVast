import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Song from './song/song';
import Audios from '../audios/audios';

const Songs = ({ songs, fetchNextSongs, getPlaylist, hasMore }) => (
  <SoundVastTitle title="Songs">
    <Audios
      audios={songs}
      fetchNextAudios={fetchNextSongs}
      getPlaylist={getPlaylist}
      hasMore={hasMore}
    >
      <Song />
    </Audios>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getPlaylist: PropTypes.func.isRequired,
  fetchNextSongs: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;

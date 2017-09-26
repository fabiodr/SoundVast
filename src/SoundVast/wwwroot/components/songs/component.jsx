import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/soundVastTitle/component';

import Song from './song/component';
import Audios from '../audios/component';

const Songs = ({ songs, fetchNextSongs, hasMore, getPlaylist }) => (
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
      id: PropTypes.number.isRequired,
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

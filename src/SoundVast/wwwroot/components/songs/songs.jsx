import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Song from './song/song';
import Audios from '../audios/audios';

const Songs = ({ songs, loadMore, hasMore }) => (
  <SoundVastTitle title="Songs">
    <Audios
      audios={songs}
      loadMore={loadMore}
      hasMore={hasMore}
    >
      <Song />
    </Audios>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;

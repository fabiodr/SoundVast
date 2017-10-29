import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Song from './song/song';
import Audios from '../audios/audios';

const Songs = ({ data, getPlaylist, loadMore, hasMore }) => (
  <SoundVastTitle title="Songs">
    <Audios
      audios={data.songs}
      getPlaylist={getPlaylist}
      loadMore={loadMore}
      hasMore={hasMore}
    >
      <Song />
    </Audios>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.object.isRequired,
  getPlaylist: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;

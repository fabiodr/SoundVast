import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/component';
import SoundVastTitle from '../shared/soundVastTitle/component';

import Song from './song/container';
import styles from './component.less';

const Songs = ({ songs, fetchSongs, hasMore }) => (
  <SoundVastTitle title="Songs">
    <div className={styles.songsContainer}>
      <InfiniteScrollGrid loadMore={fetchSongs} hasMore={hasMore} className={styles.songs}>
        {songs.map((song, index) => <Song key={song.id} index={index} {...song} />)}
      </InfiniteScrollGrid>
    </div>
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
  fetchSongs: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;

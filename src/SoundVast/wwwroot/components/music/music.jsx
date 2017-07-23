import React from 'react';
import PropTypes from 'prop-types';

import SoundVastTitle from '../shared/title/soundVastTitle';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/infiniteScrollGrid';
import Audio from './audio/audio';
import styles from './music.less';

const Music = ({ musicAudios, fetchMusic, hasMore }) => (
  <SoundVastTitle title="Music">
    <div className={styles.music}>
      <InfiniteScrollGrid loadMore={fetchMusic} hasMore={hasMore}>
        {musicAudios.map(audio => <Audio key={audio.id} {...audio} />)}
      </InfiniteScrollGrid>
    </div>
  </SoundVastTitle>
);

Music.propTypes = {
  musicAudios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  fetchMusic: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Music;

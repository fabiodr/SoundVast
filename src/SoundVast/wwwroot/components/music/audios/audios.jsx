import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScrollGrid from '../../content/infiniteScrollGrid/infiniteScrollGrid';

import Audio from '../audio/audio';
import styles from './audios.less';

const Audios = ({ musicAudios, fetchMusic, hasMore }) => (
  <InfiniteScrollGrid loadMore={fetchMusic} hasMore={hasMore} className={styles.audios}>
    {musicAudios.map(audio => <Audio key={audio.id} {...audio} />)}
  </InfiniteScrollGrid>
);

Audios.propTypes = {
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

export default Audios;

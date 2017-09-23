import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScrollGrid from '../../content/infiniteScrollGrid/component';

import Audio from './audio/container';
import styles from './component.less';

const Audios = ({ audios, children, fetchAudios, getPlaylist, hasMore }) => (
  <div className={styles.audiosContainer}>
    <InfiniteScrollGrid loadMore={fetchAudios} hasMore={hasMore} className={styles.audios}>
      {audios.map((audio, index) => (
        <Audio
          key={audio.id}
          id={audio.id}
          coverImageUrl={audio.coverImageUrl}
          getPlaylist={getPlaylist}
        >
          {React.cloneElement(children, {
            index,
            ...audio,
          })}
        </Audio>
      ))}
    </InfiniteScrollGrid>
  </div>
);

Audios.propTypes = {
  audios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getPlaylist: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  fetchAudios: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Audios;

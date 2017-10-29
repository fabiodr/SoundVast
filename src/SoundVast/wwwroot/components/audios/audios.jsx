import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/infiniteScrollGrid';

import Audio from './audio/audioContainer';
import styles from './audios.less';

const Audios = ({ audios, children, loadMore, getPlaylist, hasMore }) => (
  <div className={styles.audiosContainer}>
    <InfiniteScrollGrid
      initialLoad={false}
      loadMore={loadMore}
      hasMore={hasMore}
      className={styles.audios}
    >
      {audios.edges.map(({ node }) => (
        <Audio
          key={node.songId}
          coverImageUrl={node.coverImageUrl}
          getPlaylist={getPlaylist}
        >
          {React.cloneElement(children, {
            ...node,
          })}
        </Audio>
      ))}
    </InfiniteScrollGrid>
  </div>
);

Audios.propTypes = {
  audios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getPlaylist: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Audios;

import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Song from './songContainer';
import InfiniteScrollGrid from '../shared/grid/infiniteScrollGrid';
import AudioHeader from '../audio/audioHeader';
import genreTypeNames from '../shared/utilities/genreTypeNames';

const Songs = ({ data, loadMore, hasMore }) => (
  <SoundVastTitle title="Songs">
    <div>
      <AudioHeader type={genreTypeNames.music} />
      <InfiniteScrollGrid
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
      >
        {data.songs.edges.map(({ node }) => <Song key={node.audioId} song={node} />)}
      </InfiniteScrollGrid>
    </div>
  </SoundVastTitle>
);

Songs.propTypes = {
  data: PropTypes.shape({
    songs: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            audioId: PropTypes.number.isRequired,
          }),
        }),
      ),
    }),
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;

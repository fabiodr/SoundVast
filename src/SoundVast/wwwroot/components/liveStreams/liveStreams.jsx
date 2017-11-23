import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import LiveStream from './liveStream/liveStream';
import Grid from '../shared/grid/grid';
import InfiniteScrollGrid from '../shared/grid/infiniteScrollGrid';

const LiveStreams = ({ liveStreams, loadMore, hasMore }) => (
  <SoundVastTitle title="LiveStreams">
    <Grid>
      <InfiniteScrollGrid
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
      >
        {liveStreams.map(radio => (
          <LiveStream
            key={radio.audioId}
            audioId={radio.audioId}
            coverImageUrl={radio.coverImageUrl}
            name={radio.name}
            likes={radio.likes}
            dislikes={radio.dislikes}
          />
        ))}
      </InfiniteScrollGrid>
    </Grid>
  </SoundVastTitle>
);

LiveStreams.propTypes = {
  liveStreams: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default LiveStreams;

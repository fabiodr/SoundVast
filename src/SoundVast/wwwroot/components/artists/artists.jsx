import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Artist from './artistContainer';
import Grid from '../shared/grid/grid';
import Loader from '../shared/loaders/loader';
import Filters from '../audio/filtersContainer';
import AudiosHeader from '../audio/audiosHeader';

const Artists = ({ artists, loadMore, getCurrentPlaylist }) => (
  <SoundVastTitle title="Artists">
    <div>
      <AudiosHeader typeUrl="artists" />
      <Filters />
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={artists.pageInfo.hasNextPage}
        loader={<Loader key={0} />}
        initialLoad={false}
      >
        <Grid>
          {artists.edges.map(({ node }) => (
            <Artist
              key={node.audioId}
              artist={node}
              getCurrentPlaylist={getCurrentPlaylist}
            />
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  </SoundVastTitle>
);

Artists.propTypes = {
  artists: PropTypes.shape({
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool.isRequired,
    }).isRequired,
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          audioId: PropTypes.number.isRequired,
        }),
      }),
    ),
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
  getCurrentPlaylist: PropTypes.func.isRequired,
};

export default Artists;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Song from './songContainer';
import Grid from '../shared/grid/grid';
import SongsHeader from './songsHeader';
import Loader from '../shared/loaders/loader';
import Filters from '../audio/filtersContainer';

const Songs = ({ songs, loadMore }) => (
  <SoundVastTitle title="Songs">
    <div>
      <SongsHeader />
      <Filters />
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={songs.pageInfo.hasNextPage}
        loader={<Loader />}
        initialLoad={false}
      >
        <Grid>
          {songs.edges.map(({ node }) => <Song key={node.audioId} song={node} />)}
        </Grid>
      </InfiniteScroll>
    </div>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.shape({
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
};

export default Songs;

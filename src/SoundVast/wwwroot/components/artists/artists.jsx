import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Artist from './artistContainer';
import Grid from '../shared/grid/grid';
import Loader from '../shared/loaders/loader';
import Filters from '../audio/filtersContainer';

const Songs = ({ artists, loadMore }) => (
  <SoundVastTitle title="Artists">
    <div>
      <Filters />
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={artists.pageInfo.hasNextPage}
        loader={<Loader />}
        initialLoad={false}
      >
        <Grid>
          {artists.edges.map(({ node }) => <Artist key={node.audioId} artist={node} />)}
        </Grid>
      </InfiniteScroll>
    </div>
  </SoundVastTitle>
);

Songs.propTypes = {
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
};

export default Songs;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import UserPlaylist from './userPlaylistContainer';
import Loader from '../shared/loaders/loader';
import Grid from '../shared/grid/grid';

const UserPlaylists = ({ playlists, loadMore }) => (
  <InfiniteScroll
    loadMore={loadMore}
    hasMore={playlists.pageInfo.hasNextPage}
    loader={<Loader />}
    initialLoad={false}
  >
    <Grid>
      {playlists.edges.map(({ node }) =>
        <UserPlaylist key={node.name} name={node.name} playlistId={node.playlistId} data={node} />)}
    </Grid>
  </InfiniteScroll>
);

UserPlaylists.defaultProps = {
  playlists: {
    edges: [],
    pageInfo: {},
  },
};

UserPlaylists.propTypes = {
  playlists: PropTypes.shape({
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool,
    }),
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        playlistId: PropTypes.number.isRequired,
      }),
    })),
  }),
  loadMore: PropTypes.func.isRequired,
};

export default UserPlaylists;

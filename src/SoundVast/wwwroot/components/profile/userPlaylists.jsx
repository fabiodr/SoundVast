import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Playlist from '../playlist/playlist';
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
      {playlists.edges.map(({ node }) => (
        <Playlist
          key={node.playlistId}
          id={node.playlistId}
          name={node.name}
          coverImageUrl={node.coverImageUrl}
          playlists={playlists}
        />
      ))}
    </Grid>
  </InfiniteScroll>
);

UserPlaylists.defaultProps = {
  playlists: {
    edges: [],
    pageInfo: {},
  },
  currentPlaylistId: null,
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
        coverImageUrl: PropTypes.string,
      }),
    })),
  }),
  loadMore: PropTypes.func.isRequired,
};

export default UserPlaylists;

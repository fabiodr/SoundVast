import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Song from '../songs/songContainer';
import Loader from '../shared/loaders/loader';

const UserPlaylist = ({ name, songPlaylists, loadMore }) => (
  <div>
    {name}
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={songPlaylists.pageInfo.hasNextPage}
      loader={<Loader />}
      initialLoad={false}
    >
      {songPlaylists.edges.map(({ node }) => <Song key={node.song.audioId} song={node.song} />)}
    </InfiniteScroll>
  </div>
);

UserPlaylist.propTypes = {
  name: PropTypes.string.isRequired,
  songPlaylists: PropTypes.object.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default UserPlaylist;

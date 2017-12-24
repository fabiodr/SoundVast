import { compose, flattenProp, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import UserPlaylist from './userPlaylist';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';

const fragments = graphql`
  fragment userPlaylistContainer on Playlist {
    songPlaylists (
      first: $count
      after: $cursor
    ) @connection(key: "userPlaylistContainer_songPlaylists") {
      edges {
        cursor
        node {
          song {
            audioId
            ...songContainer_song
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query userPlaylistContainerForwardQuery (
      $id: Int!
      $count: Int!
      $cursor: String
    ) {
      playlist(id: $id) {
        ...userPlaylistContainer
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    id: props.id,
    count,
    cursor,
  }),
};

const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(audiosToLoad),
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
)(UserPlaylist);


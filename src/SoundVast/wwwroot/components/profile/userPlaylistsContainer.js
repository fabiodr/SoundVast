import { compose, flattenProp, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import UserPlaylists from './userPlaylists';
import { playlistsToLoad } from '../shared/utilities/itemsToLoad';

const fragments = graphql`
  fragment userPlaylistsContainer on ApplicationUser {
    playlists (
      first: $count
      after: $cursor
    ) @connection(key: "userPlaylistsContainer_playlists") {
      edges {
        cursor
        node {
          playlistId
          name
          ...userPlaylistContainer
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
    query userPlaylistsContainerForwardQuery (
      $count: Int!
      $cursor: String
    ) {
      user {
        ...userPlaylistsContainer
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
  }),
};

const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(playlistsToLoad),
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
)(UserPlaylists);


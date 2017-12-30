import React from 'react';
import { compose, flattenProp, withHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { connect } from 'react-redux';

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
          coverImageUrl
          songPlaylists (
            first: $count
            after: $cursor
          ) {
            items {
              song {
                audioId
                name
                artists {
                  name
                }
                coverImageUrl
                free
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const query = graphql`
  query userPlaylistsContainerQuery(
    $count: Int!
    $cursor: String
  ) {
    user {
      ...userPlaylistsContainer
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

const UserPlaylistsContainer = compose(
  connect(),
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
)(UserPlaylists);

export const routeConfig = {
  Component: UserPlaylistsContainer,
  query,
  render: ({ props }) => props && <UserPlaylistsContainer data={props.user} />,
  prepareVariables: () => ({
    count: playlistsToLoad,
  }),
};

export default UserPlaylistsContainer;

import React from 'react';
import PropTypes from 'prop-types';
import { compose, flattenProp, withHandlers, setPropTypes } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { connect } from 'react-redux';

import UserPlaylists from './userPlaylists';
import { playlistsToLoad } from '../shared/utilities/itemsToLoad';
import convertSongToMedia from '../shared/utilities/convertSongToMedia';

const propTypes = {
  playlists: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        playlistId: PropTypes.number.isRequired,
        songs: PropTypes.shape({
          items: PropTypes.arrayOf(PropTypes.shape({
            coverImageUrl: PropTypes.string.isRequired,
            audioId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            artist: PropTypes.arrayOf(
              PropTypes.shape({
                name: PropTypes.string,
              }),
            ),
            free: PropTypes.bool.isRequired,
          })),
        }),
      }),
    })),
  }).isRequired,
};

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
          songs {
            items {
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
  getCurrentPlaylist: ({ playlists }) => (id) => {
    const playlist = playlists.edges.find(x => x.node.playlistId === id);
    const footerPlaylist = playlist.node.songs.items.map(song => convertSongToMedia(song));

    return footerPlaylist;
  },
};

const UserPlaylistsContainer = compose(
  connect(),
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  setPropTypes(propTypes),
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

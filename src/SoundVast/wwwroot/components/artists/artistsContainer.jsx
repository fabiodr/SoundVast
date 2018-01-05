import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, flattenProp, setPropTypes } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import Artists from './artists';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';
import getFilterVariables from '../shared/utilities/getFilterVariables';
import convertSongToMedia from '../shared/utilities/convertSongToMedia';

const propTypes = {
  artists: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        audioId: PropTypes.number.isRequired,
        songPlaylists: PropTypes.shape({
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

const query = graphql`
  query artistsContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
    $filter: FilterInput
  ) {
    ...artistsContainer
  }
`;

const fragments = graphql`
  fragment artistsContainer on Query {
    artists(
      first: $count
      after: $cursor
      genre: $genre
      filter: $filter
    ) @connection(key: "artistsContainer_artists") {
      edges {
        cursor
        node {
          audioId
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
          ...artistContainer_artist
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
    query artistsContainerForwardQuery(
      $count: Int!
      $cursor: String
      $genre: String
      $filter: FilterInput
    ) {
      ...artistsContainer
    }
  `,
  getVariables: (_, { count, cursor }, fragmentVariables) => ({
    count,
    cursor,
    filter: fragmentVariables.filter,
  }),
};

const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(audiosToLoad),
  getCurrentPlaylist: ({ artists }) => (id) => {
    const artist = artists.edges.find(x => x.node.audioId === id);
    const footerPlaylist = artist.node.songs.items.map(song => convertSongToMedia(song));

    return footerPlaylist;
  },
};
const enhance = compose(
  connect(null, {
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  setPropTypes(propTypes),
  withHandlers(handlers),
);

const ArtistsContainer = enhance(Artists);

export const routeConfig = {
  Component: ArtistsContainer,
  query,
  render: ({ props }) => props && <ArtistsContainer data={props} />,
  prepareVariables: ({ genre }, { location }) => ({
    count: audiosToLoad,
    genre,
    filter: getFilterVariables(location),
  }),
};

export default ArtistsContainer;

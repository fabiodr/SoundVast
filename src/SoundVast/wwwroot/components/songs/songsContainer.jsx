import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps, lifecycle, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import convertFromSong from '../footerPlaylist/convertFromSong';
import Songs from './songs';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';

const query = graphql`
  query songsContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
    $filter: FilterInput
    $originalCommentId: Int
  ) {
    ...songsContainer
  }
`;

const fragments = graphql`
  fragment songsContainer on Query {
    songs(
      first: $count
      after: $cursor
      genre: $genre
      filter: $filter
    ) @connection(key: "songsContainer_songs") {
      edges {
        cursor
        node {
          audioId
          name
          artist
          coverImageUrl
          free
          ...songContainer_song
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
    query songsContainerForwardQuery(
      $count: Int!
      $cursor: String
      $genre: String
      $filter: FilterInput
      $originalCommentId: Int
    ) {
      ...songsContainer
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
};

const createProps = ({ songs }) => ({
  footerPlaylist: songs.edges.map(({ node }) => convertFromSong(node)),
});

const enhance = compose(
  connect(null, {
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  flattenProp('data'),
  withHandlers(handlers),
  withProps(createProps),
  lifecycle({
    componentDidMount() {
      this.props.setPlaylist('FooterPlaylist', this.props.footerPlaylist);
    },
    componentWillReceiveProps(nextProps) {
      this.props.setPlaylist('FooterPlaylist', nextProps.footerPlaylist);
    },
  }),
);

const SongsContainer = enhance(Songs);

export const routeConfig = {
  Component: SongsContainer,
  query,
  render: ({ props }) => props && <SongsContainer data={props} />,
  prepareVariables: ({ genre }, { location }) => ({
    count: audiosToLoad,
    genre,
    filter: {
      newest: location.query.newest,
      topRatedDays: location.query.topRatedDays,
      mostCommentedDays: location.query.mostCommentedDays,
      mostPlayedDays: location.query.mostPlayedDays,
    },
  }),
};

export default SongsContainer;

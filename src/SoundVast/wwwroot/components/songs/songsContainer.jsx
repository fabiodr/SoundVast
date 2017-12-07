import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'relay-modern-hoc';
import { actions } from 'react-jplaylist';

import Songs from './songs';
import { audiosToLoad } from '../audio/utilities';

const query = graphql`
  query songsContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
    $filter: FilterInput
    $getReplies: Boolean
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
        node {
          audioId
          name
          coverImageUrl
          artist
          likes
          dislikes
          ...commentsContainer
        }
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
    ) {
      ...songsContainer
    }
  `,
  getVariables: (_, { count, cursor }) => ({
    count,
    cursor,
  }),
};

// TODO: load more songs when new songs scroll into view
const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(audiosToLoad),
};

const createProps = ({ relay, data }) => ({
  hasMore: relay.hasMore(),
  songs: data.songs.edges.map(x => x.node),
});

class InitializeSongs extends React.Component {
  componentDidMount() {
    this.props.setPlaylist('FooterPlaylist', this.getPlaylist());
  }
  getPlaylist = () => this.props.songs.map(song => ({
    id: song.audioId,
    title: song.name,
    artist: song.artist,
    sources: {
      mp3: `${window.location.origin}/song/stream?id=${song.audioId}`,
    },
    poster: song.coverImageUrl,
    free: song.free,
  }))
  render() {
    return <Songs {...this.props} />;
  }
}

InitializeSongs.propTypes = {
  setPlaylist: PropTypes.func.isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
      free: PropTypes.bool,
      comments: PropTypes.object,
    }),
  ).isRequired,
};

const enhance = compose(
  connect(null, {
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
  withProps(createProps),
);

const SongsContainer = enhance(InitializeSongs);

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

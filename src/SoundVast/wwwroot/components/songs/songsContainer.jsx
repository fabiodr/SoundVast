import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'relay-modern-hoc';
import { actions } from 'react-jplaylist';

import Songs from './songs';

const songsToLoad = 10;
const query = graphql`
  query songsContainerQuery(
    $count: Int!
    $cursor: String
  ) {
    ...songsContainer
  }
`;

const fragments = graphql`
  fragment songsContainer on Query {
    songs(
      first: $count,
      after: $cursor,
    ) @connection(key: "songsContainer_songs") {
      edges {
        node {
          audioId,
          name,
          coverImageUrl,
          artist,
          likes,
          dislikes,
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
    ) {
      ...songsContainer,
    }
  `,
  getVariables: (_, { count, cursor }) => ({
    count,
    cursor,
  }),
};

// TODO: load more songs when new songs scroll into view
const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(songsToLoad),
};

const createProps = ({ relay, data }) => ({
  hasMore: relay.hasMore(),
  songs: data.songs.edges.map(x => x.node),
});

const mapStateToProps = ({ jPlaylists }) => ({
  playlist: jPlaylists.FooterPlaylist.playlist,
});

class InitializePlaylist extends React.Component {
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

InitializePlaylist.defaultProps = {
  playlist: [],
};

InitializePlaylist.propTypes = {
  setPlaylist: PropTypes.func.isRequired,
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string,
      sources: PropTypes.shape({
        mp3: PropTypes.string.isRequired,
      }).isRequired,
      poster: PropTypes.string.isRequired,
      free: PropTypes.bool,
    }),
  ),
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
      free: PropTypes.bool,
    }),
  ).isRequired,
};

const enhance = compose(
  connect(mapStateToProps, {
    setPlaylist: actions.setPlaylist,
  }),
  paginationContainer(fragments, connectionConfig),
  withHandlers(handlers),
  withProps(createProps),
);

const SongsContainer = enhance(InitializePlaylist);

export const routeConfig = {
  Component: SongsContainer,
  query,
  render: ({ props }) => props && <SongsContainer data={props} />,
  prepareVariables: () => ({ count: songsToLoad }),
};

export default SongsContainer;

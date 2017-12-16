import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';
import { actions } from 'react-jplaylist';

import Radios from './radios';
import { audiosToLoad } from '../audio/utilities';

const query = graphql`
  query radiosContainerQuery(
    $count: Int!
    $cursor: String
    $genre: String
  ) {
    ...radiosContainer
  }
`;

const fragments = graphql`
  fragment radiosContainer on Query {
    liveStreams(
      first: $count
      after: $cursor
      genre: $genre
    ) @connection(key: "radiosContainer_liveStreams") {
      edges {
        node {
          audioId
          name
          coverImageUrl
          liveStreamUrl
          likes
          dislikes
        }
      }
    }
  }
`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query radiosContainerForwardQuery(
      $count: Int!
      $cursor: String
      $genre: String
    ) {
      ...radiosContainer
    }
  `,
  getVariables: (_, { count, cursor }, variables) => ({
    ...variables,
    count,
    cursor,
  }),
};

// TODO: load more live streams when new live streams scroll into view
const handlers = {
  loadMore: ({ relay }) => () => relay.loadMore(audiosToLoad),
};

const createProps = ({ relay, data }) => ({
  hasMore: relay.hasMore(),
  radios: data.liveStreams.edges.map(x => x.node),
});

class InitializePlaylist extends React.Component {
  componentDidMount() {
    this.props.setPlaylist('FooterPlaylist', this.getPlaylist());
  }
  getPlaylist = () => this.props.radios.map(radio => ({
    id: radio.audioId,
    title: radio.name,
    sources: {
      mp3: radio.radioUrl,
    },
    poster: radio.coverImageUrl,
  }))
  render() {
    return <Radios {...this.props} />;
  }
}

InitializePlaylist.defaultProps = {
  playlist: [],
};

InitializePlaylist.propTypes = {
  setPlaylist: PropTypes.func.isRequired,
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      radioUrl: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
      free: PropTypes.bool,
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

const RadiosContainer = enhance(InitializePlaylist);

export const routeConfig = {
  Component: RadiosContainer,
  query,
  render: ({ props }) => props && <RadiosContainer data={props} />,
  prepareVariables: ({ genre }) => ({ count: audiosToLoad, genre }),
};

export default RadiosContainer;

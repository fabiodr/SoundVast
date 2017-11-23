import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'relay-modern-hoc';
import { actions } from 'react-jplaylist';

import LiveStreams from './liveStreams';
import { audiosToLoad } from '../audio/utilities';

const query = graphql`
  query liveStreamsContainerQuery(
    $count: Int!
    $cursor: String
  ) {
    ...liveStreamsContainer
  }
`;

const fragments = graphql`
  fragment liveStreamsContainer on Query {
    liveStreams(
      first: $count,
      after: $cursor,
    ) @connection(key: "liveStreamsContainer_liveStreams") {
      edges {
        node {
          audioId,
          name,
          coverImageUrl,
          liveStreamUrl,
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
    query liveStreamsContainerForwardQuery(
      $count: Int!
      $cursor: String
    ) {
      ...liveStreamsContainer,
    }
  `,
  getVariables: (_, { count, cursor }) => ({
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
  liveStreams: data.liveStreams.edges.map(x => x.node),
});

class InitializePlaylist extends React.Component {
  componentDidMount() {
    this.props.setPlaylist('FooterPlaylist', this.getPlaylist());
  }
  getPlaylist = () => this.props.liveStreams.map(liveStream => ({
    id: liveStream.audioId,
    title: liveStream.name,
    sources: {
      mp3: liveStream.liveStreamUrl,
    },
    poster: liveStream.coverImageUrl,
  }))
  render() {
    return <LiveStreams {...this.props} />;
  }
}

InitializePlaylist.defaultProps = {
  playlist: [],
};

InitializePlaylist.propTypes = {
  setPlaylist: PropTypes.func.isRequired,
  liveStreams: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      liveStreamUrl: PropTypes.string,
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

const LiveStreamsContainer = enhance(InitializePlaylist);

export const routeConfig = {
  Component: LiveStreamsContainer,
  query,
  render: ({ props }) => props && <LiveStreamsContainer data={props} />,
  prepareVariables: () => ({ count: audiosToLoad }),
};

export default LiveStreamsContainer;

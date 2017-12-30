import { compose } from 'recompose';
import { graphql } from 'react-relay';
import { refetchContainer } from 'recompose-relay-modern';
import { connect } from 'react-redux';

import Song from './song';

const mapStateToProps = ({ jPlayers }, { song }) => ({
  isOnCurrentSong: jPlayers.FooterPlaylist.media.id === song.audioId,
});

const fragments = graphql`
  fragment songContainer_song on Song
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 20 }
    cursor: { type: "String", defaultValue: null }
  ) {
    audioId
    name
    coverImageUrl
    artists {
      name
    }
    playCount
    likes
    dislikes
    ...commentsContainer
  }
`;

const query = graphql`
  query songContainerQuery(
    $id: Int!
    $count: Int!
    $cursor: String
  ) {
    song(id: $id) {
      ...songContainer_song @arguments(count: $count, cursor: $cursor)
    }
  }
`;

export default compose(
  refetchContainer(fragments, query),
  connect(mapStateToProps),
)(Song);

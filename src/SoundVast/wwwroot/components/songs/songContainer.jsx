import { compose } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';
import { connect } from 'react-redux';

import Song from './song';

const mapStateToProps = ({ jPlayers }, { song }) => ({
  isOnCurrentSong: jPlayers.FooterPlaylist.media.id === song.audioId,
});

const fragments = graphql`
  fragment songContainer_song on Song {
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

export default compose(
  fragmentContainer(fragments),
  connect(mapStateToProps),
)(Song);

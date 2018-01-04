import { compose } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import SideBar from './sideBar';

const mapStateToProps = ({ jPlayers }) => ({
  currentAudioId: jPlayers.FooterPlaylist.media.id,
});

const fragments = graphql`
  fragment sideBarContainer_audios on Audio @relay(plural: true) {
    audioId
    name
    ...commentBoxContainer_audio
    ...commentsContainer_audio
  }
`;

export default compose(
  connect(mapStateToProps),
  fragmentContainer(fragments),
)(SideBar);

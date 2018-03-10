import { compose, renderNothing, branch } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import SideBar from './sideBar';
import withDisplayType from '../shared/withDisplayType';

const mapStateToProps = ({ jPlayers, audio }, props) => {
  let isCurrentAudio = props.isFirstLiveStream;

  if (typeof (jPlayers.FooterPlaylist.media.id) === 'number') {
    isCurrentAudio = jPlayers.FooterPlaylist.media.id === props.audio.audioId;
  }

  return {
    isCurrentAudio,
    showingSideBar: audio.showingSideBar,
  };
};

const fragments = graphql`
  fragment mobileSideBarContainer_audio on Audio {
    audioId
    name
    ...commentBoxContainer_audio
    ...commentsContainer_audio
  }
`;

export default compose(
  withDisplayType,
  fragmentContainer(fragments),
  connect(mapStateToProps),
  branch(
    props => !props.displayType.isMobile || !props.showingSideBar || !props.isCurrentAudio,
    renderNothing,
  ),
)(SideBar);

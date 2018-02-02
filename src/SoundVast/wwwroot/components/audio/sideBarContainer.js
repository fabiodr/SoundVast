import PropTypes from 'prop-types';
import { compose, renderNothing, branch, setPropTypes } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import SideBar from './sideBar';

const propTypes = {
  audios: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ jPlayers, audio }) => ({
  currentAudioId: jPlayers.FooterPlaylist.media.id,
  showingSideBar: audio.showingSideBar,
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
  setPropTypes(propTypes),
  connect(mapStateToProps),
  fragmentContainer(fragments),
  branch(
    props => !props.showingSideBar || !props.audios.length,
    renderNothing,
  ),
)(SideBar);

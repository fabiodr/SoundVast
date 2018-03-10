import PropTypes from 'prop-types';
import { compose, renderNothing, branch, setPropTypes, withProps } from 'recompose';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import SideBar from './sideBar';
import withDisplayType from '../shared/withDisplayType';

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

const createProps = ({ currentAudioId, audios }) => {
  const newAudioId = currentAudioId || audios[0].audioId;
  const currentAudioIndex = audios.findIndex(({ audioId }) => audioId === newAudioId);
  const audio = audios[currentAudioIndex];

  return {
    audio,
  };
};

export default compose(
  setPropTypes(propTypes),
  withDisplayType,
  fragmentContainer(fragments),
  connect(mapStateToProps),
  branch(
    props => props.displayType.isMobile || !props.showingSideBar,
    renderNothing,
  ),
  withProps(createProps),
)(SideBar);

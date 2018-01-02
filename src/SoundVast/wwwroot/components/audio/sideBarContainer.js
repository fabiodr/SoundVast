import { compose } from 'recompose';
import { connect } from 'react-redux';

import SideBar from './sideBar';

const mapStateToProps = ({ jPlayers }) => ({
  currentAudioId: jPlayers.FooterPlaylist.media.id,
});

export default compose(
  connect(mapStateToProps),
)(SideBar);

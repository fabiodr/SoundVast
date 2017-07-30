import { connect } from 'react-redux';

import FooterPlayer from './component';

const mapStateToProps = ({ music }) => ({
  songs: music.songs,
});

export default connect(mapStateToProps)(FooterPlayer);

import { connect } from 'react-redux';

import FooterPlaylist from './footerPlaylist';

const mapStateToProps = ({ jPlaylists }) => ({
  isPlaylistEmpty: jPlaylists.FooterPlaylist.playlist.length === 0,
});

export default connect(mapStateToProps)(FooterPlaylist);

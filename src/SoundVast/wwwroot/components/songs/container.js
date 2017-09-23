import { connect } from 'react-redux';

import { fetchSongs } from './actions';
import Songs from './component';

const mapStateToProps = ({ music }) => ({
  songs: music.songs,
  hasMore: music.hasMore,
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);

import { connect } from 'react-redux';

import { fetchSongs } from '../actions';
import Songs from './component';

const mapStateToProps = ({ songs }) => ({
  songs: songs.songs,
  hasMore: songs.hasMore,
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);

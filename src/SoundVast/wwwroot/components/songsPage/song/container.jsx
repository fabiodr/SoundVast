import { connect } from 'react-redux';

import { fetchSong } from '../actions';
import Song from './component';

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
});

export default connect(null, mapDispatchToProps)(Song);

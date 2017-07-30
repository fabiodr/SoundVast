import { connect } from 'react-redux';

import { fetchSong } from '../actions';
import Song from './song';

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
});

export default connect(null, mapDispatchToProps)(Song);

import { connect } from 'react-redux';

import { fetchMusic } from '../actions';
import Audios from './audios';

const mapStateToProps = ({ music }) => ({
  musicAudios: music.musicAudios,
  hasMore: music.hasMore,
});

const mapDispatchToProps = dispatch => ({
  fetchMusic: () => dispatch(fetchMusic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Audios);

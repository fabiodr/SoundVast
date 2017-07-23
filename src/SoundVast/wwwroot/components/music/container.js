import { connect } from 'react-redux';

import Music from './music';
import { fetchMusic } from './actions';

const mapStateToProps = ({ music }) => ({
  musicAudios: music.musicAudios.map(musicAudio => ({
    id: musicAudio.id,
    name: musicAudio.name,
    artist: musicAudio.artist,
    coverImageUrl: musicAudio.coverImageUrl,
  })),
  hasMore: music.hasMore,
});

const mapDispatchToProps = dispatch => ({
  fetchMusic: () => dispatch(fetchMusic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);

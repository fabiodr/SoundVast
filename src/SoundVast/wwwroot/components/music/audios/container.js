import { connect } from 'react-redux';

import Audios from './audios';

const mapStateToProps = ({ music }) => ({
  musicAudios: music.musicAudios.map(musicAudio => ({
    id: musicAudio.id,
    name: musicAudio.name,
    artist: musicAudio.artist,
    coverImageUrl: musicAudio.coverImageUrl,
  })),
});

export default connect(mapStateToProps)(Audios);

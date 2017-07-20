import React from 'react';
import PropTypes from 'prop-types';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Audio from './audio/audio';

const Music = ({ musicAudios }) => (
  <SoundVastTitle title="Music">
    <div>
      {musicAudios.map(audio => <Audio key={audio.id} {...audio} />)}
    </div>
  </SoundVastTitle>
);

Music.propTypes = {
  musicAudios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Music;

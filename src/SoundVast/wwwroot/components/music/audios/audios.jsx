import React from 'react';
import PropTypes from 'prop-types';

import Audio from '../audio/audio';

const Audios = ({ musicAudios }) => (
  <div>
    {musicAudios.map(audio => <Audio key={audio.id} {...audio} />)}
  </div>
);

Audios.propTypes = {
  musicAudios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Audios;

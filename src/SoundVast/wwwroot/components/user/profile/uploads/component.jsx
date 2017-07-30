import React from 'react';
import PropTypes from 'prop-types';

import UserAudio from './userAudio/component';

const Uploads = ({ userAudios }) => (
  <div>
    {userAudios.map(userAudio => <UserAudio key={userAudio.id} {...userAudio} />)}
  </div>
);

Uploads.defaultProps = {
  userAudios: [],
};

Uploads.propTypes = {
  userAudios: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string.isRequired,
    artist: PropTypes.string,
  })),
};

export default Uploads;

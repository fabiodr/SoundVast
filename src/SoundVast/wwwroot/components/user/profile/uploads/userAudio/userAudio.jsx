import React from 'react';
import PropTypes from 'prop-types';

const UserAudio = ({ coverImageUrl, name, artist }) => (
  <div>
    <figure>
      <img alt="" src={coverImageUrl} />
      <figcaption>{name} - {artist}</figcaption>
    </figure>
  </div>
);

UserAudio.defaultProps = {
  artist: null,
};

UserAudio.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string,
  coverImageUrl: PropTypes.string.isRequired,
};

export default UserAudio;

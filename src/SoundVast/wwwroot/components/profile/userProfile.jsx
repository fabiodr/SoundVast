import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import SoundVastTitle from '../shared/title/soundVastTitle';

const Profile = ({ userName, children }) => (
  <SoundVastTitle title={`${userName} profile`}>
    <div>
      <h3>{userName} profile</h3>

      <Link to="/profile/playlists">Playlists</Link>
      <Link to="/profile/uploads">Liked Audios</Link>
      <Link to="/profile/liked">Uploads</Link>

      {children}
    </div>
  </SoundVastTitle>
);

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Profile;

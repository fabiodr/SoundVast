import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import UserPlaylists from './userPlaylistsContainer';
import UserUploads from './userUploads';
import UserLikedSongs from './userLikedSongs';
import SoundVastTitle from '../shared/title/soundVastTitle';

const Profile = ({ userName, uploads, likedSongs, user }) => (
  <SoundVastTitle title={`${userName} profile`}>
    <div>
      <h3>{userName} profile</h3>

      <Tabs>
        <TabList>
          <Tab>Playlists</Tab>
          <Tab>Uploads</Tab>
          <Tab>Liked Songs</Tab>
        </TabList>
        <TabPanel>
          <UserPlaylists data={user} />
        </TabPanel>
        <TabPanel>
          <UserUploads uploads={uploads} />
        </TabPanel>
        <TabPanel>
          <UserLikedSongs likedSongs={likedSongs} />
        </TabPanel>
      </Tabs>
    </div>
  </SoundVastTitle>
);

Profile.defaultProps = {
  uploads: [],
  likedSongs: [],
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  uploads: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
    }),
  ),
  likedSongs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
    }),
  ),
  user: PropTypes.object.isRequired,
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import UserUploads from './uploads/container';

const Profile = ({ userName }) => (
  <div>
    <h3>{userName} profile</h3>

    <Tabs>
      <TabList>
        <Tab>Uploads</Tab>
      </TabList>
      <TabPanel>
        <UserUploads />
      </TabPanel>
    </Tabs>
  </div>
);

Profile.defaultProps = {
  userName: null,
};

Profile.propTypes = {
  userName: PropTypes.string,
};

export default Profile;

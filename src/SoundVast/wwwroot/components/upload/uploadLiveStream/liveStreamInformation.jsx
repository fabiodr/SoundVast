import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import LiveStreamBasicInfo from './liveStreamBasicInfo';

const LiveStreamInformation = ({ id }) => (
  <Tabs>
    <TabList>
      <Tab>Basic info</Tab>
    </TabList>
    <TabPanel>
      <LiveStreamBasicInfo id={id} />
    </TabPanel>
  </Tabs>
);

LiveStreamInformation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LiveStreamInformation;

import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BasicInfo from '../../../basicInfo/container';

const FileInformation = ({ index }) => (
  <Tabs>
    <TabList>
      <Tab>Basic info</Tab>
    </TabList>
    <TabPanel>
      <BasicInfo index={index} />
    </TabPanel>
  </Tabs>
);

FileInformation.propTypes = {
  index: PropTypes.number.isRequired,
};

export default FileInformation;

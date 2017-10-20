import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FileBasicInfo from './fileBasicInfo';

const FileInformation = ({ id }) => (
  <Tabs>
    <TabList>
      <Tab>Basic info</Tab>
    </TabList>
    <TabPanel>
      <FileBasicInfo id={id} />
    </TabPanel>
  </Tabs>
);

FileInformation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FileInformation;

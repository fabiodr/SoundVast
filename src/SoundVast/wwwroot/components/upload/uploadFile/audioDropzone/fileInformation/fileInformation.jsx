import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BasicInfo from '../../../basicInfo/basicInfoContainer';

const FileInformation = () => (
  <Tabs>
    <TabList>
      <Tab>Basic info</Tab>
      <Tab>Metadata</Tab>
      <Tab>Permissions</Tab>
    </TabList>
    <TabPanel>
      <BasicInfo />
    </TabPanel>
    <TabPanel>
      MetaData
    </TabPanel>
    <TabPanel>
      Permissions
    </TabPanel>
  </Tabs>
);

export default FileInformation;

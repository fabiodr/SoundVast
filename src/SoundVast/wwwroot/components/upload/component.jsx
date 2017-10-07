import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './component.less';
import AudioDropzone from './uploadFile/audioDropzone/container';
import UploadLiveStream from './uploadLiveStream/container';
import authorizedComponent from '../shared/authorizedComponent/container';

const Upload = () => (
  <div className={styles.upload}>
    <h3>Upload</h3>

    <Tabs>
      <TabList>
        <Tab>From File</Tab>
        <Tab>From Live Stream</Tab>
      </TabList>
      <br />

      <TabPanel><AudioDropzone /></TabPanel>
      <TabPanel><UploadLiveStream /></TabPanel>
    </Tabs>
  </div>
);

export default authorizedComponent(Upload);

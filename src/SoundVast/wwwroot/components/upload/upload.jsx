import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './upload.less';
import AudioDropzone from './uploadFile/audioDropzone/audioDropzone';

const Upload = () => (
  <div className={styles.upload}>
    <h3>Upload</h3>

    <Tabs>
      <TabList>
        <Tab>From File</Tab>
        <Tab>From Live Stream</Tab>
      </TabList>
      <br />

      <TabPanel>
        <AudioDropzone />
      </TabPanel>
      <TabPanel>
        Html.RenderPartial("Upload/_UploadLiveStream");
      </TabPanel>
    </Tabs>
  </div>
);

export default Upload;

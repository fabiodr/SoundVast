import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './upload.less';
import AudioDropzone from './uploadFile/audioDropzoneContainer';
import UploadLiveStream from './uploadLiveStream/uploadLiveStreamContainer';

const Upload = ({ songGenres, liveStreamGenres }) => (
  <div className={styles.upload}>
    <h3>Upload</h3>

    <Tabs>
      <TabList>
        <Tab>From File</Tab>
        <Tab>From Live Stream</Tab>
      </TabList>
      <br />

      <TabPanel><AudioDropzone genres={songGenres} /></TabPanel>
      <TabPanel><UploadLiveStream genres={liveStreamGenres} /></TabPanel>
    </Tabs>
  </div>
);

Upload.propTypes = {
  songGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
  liveStreamGenres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Upload;

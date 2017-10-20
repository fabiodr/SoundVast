import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import styles from './upload.less';
import AudioDropzone from './uploadFile/audioDropzone/audioDropzoneContainer';
import UploadLiveStream from './uploadLiveStream/uploadLiveStreamContainer';
import authorizedComponent from '../shared/authorizedComponent/authorizedComponentContainer';
import { addLiveStream } from './actions';

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

const lifecycleFunctions = {
  componentDidMount() {
    this.props.addLiveStream();
  },
};

export default compose(
  authorizedComponent,
  connect(null, {
    addLiveStream,
  }),
  lifecycle(lifecycleFunctions),
)(Upload);

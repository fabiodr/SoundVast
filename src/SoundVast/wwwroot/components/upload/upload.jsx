import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { graphql } from 'react-relay';

import styles from './upload.less';
import AudioDropzone from './uploadFile/audioDropzone/audioDropzoneContainer';
import UploadLiveStream from './uploadLiveStream/uploadLiveStreamContainer';
import authorizedComponent from '../shared/authorizedComponent/authorizedComponentContainer';
import { addLiveStream } from './actions';
import { setGenres } from '../genre/actions';

const Upload = (props) => (
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
    this.props.setGenres(this.props.genres);
  },
};

export const query = graphql`
  query uploadQuery {
    genres {
      ...genreFieldContainer_genres
    }
  }
`;

export default compose(
  authorizedComponent,
  connect(null, {
    addLiveStream,
    setGenres,
  }),
  lifecycle(lifecycleFunctions),
)(Upload);

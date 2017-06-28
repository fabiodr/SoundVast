import React from 'react';
import Dropzone from 'react-dropzone';

import styles from './audioDropzone.less';

const AudioDropzone = () => (
  <Dropzone className={styles.audioDropzone} accept="audio/*">
    <div>
      Drag and Drop or Click to upload files
    </div>
  </Dropzone>
);

export default AudioDropzone;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './audioDropzone.less';
import Dropzone from '../../shared/dropzone/dropzone';
import Form from './uploadFileFormContainer';
import Progress from '../../shared/loaders/progress';
import PreviewImage from '../common/previewImage/previewImageContainer';

const AudioDropzone = ({ onDrop, files }) => (
  <div>
    <Dropzone
      className={styles.audioDropzone}
      title="Upload audio"
      accept="audio/*"
      onDrop={onDrop}
    >
      {files.map(file => (
        <figure key={file.id}>
          <PreviewImage id={file.id} />
          {<figcaption>{file.title}</figcaption>}
        </figure>
      ))}
    </Dropzone>
    <aside>
      {files.map((file, i) => (
        <div key={file.id}>
          <Progress {...file.progress} />
          <Form
            form={`upload_${file.id}`}
            id={file.id}
            index={i}
          />
        </div>
      ))}
    </aside>
  </div>
);

AudioDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default AudioDropzone;

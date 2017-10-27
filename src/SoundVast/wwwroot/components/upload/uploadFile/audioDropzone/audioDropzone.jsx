import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './audioDropzone.less';
import dropzoneStyles from '../../../shared/dropzone/dropzone.less';
import Form from './uploadFileFormContainer';
import Progress from './progress/progress';
import PreviewImage from '../../common/previewImage/previewImageContainer';

const AudioDropzone = ({ onDrop, files }) => (
  <div>
    <Dropzone
      className={styles.audioDropzone}
      accept="audio/*"
      onDrop={onDrop}
    >
      <div className={styles.placeholderContainer}>
        <div className={dropzoneStyles.placeholder}>
          Upload audio
        </div>
      </div>
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

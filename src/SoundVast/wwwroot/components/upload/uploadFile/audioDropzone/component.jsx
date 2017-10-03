import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './component.less';
import dropzoneStyles from '../../../shared/dropzone/component.less';
import Form from './form/container';
import Progress from './progress/component';

const AudioDropzone = ({ onDrop, files, coverImageFiles, removeAudioFile }) => (
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
          <img alt="" src={coverImageFiles[file.id].preview} />
          <figcaption>{coverImageFiles[file.id].title}</figcaption>
        </figure>
      ))}
    </Dropzone>
    <aside>
      {files.map((file, i) => (
        <div key={file.id}>
          <Progress {...file.progress} />
          <Form
            form={`upload_${file.id}`}
            index={i}
            id={file.id}
            remove={removeAudioFile}
          />
        </div>
      ))}
    </aside>
  </div>
);

AudioDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  removeAudioFile: PropTypes.func.isRequired,
  coverImageFiles: PropTypes.shape({
    id: PropTypes.string,
    preview: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      progressPercent: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default AudioDropzone;

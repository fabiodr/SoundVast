import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './audioDropzone.less';
import dropzoneStyles from '../../../shared/dropzone/dropzone.less';
import FileInformation from './fileInformation/fileInformation';
import Form from './form/formContainer';
import Progress from './progress/progressContainer';

const AudioDropzone = ({ onDrop, files, removeFile }) => (
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
        file.preview && <img key={file.key} alt="" src={file.preview} />
      ))}
    </Dropzone>
    <aside>
      {files.map((file, i) => (
        <div>
          <Progress key={file.key} index={i} />
          <Form
            key={file.key}
            form={`upload_${file.key}`}
            index={i}
            removeFile={removeFile}
          >
            <FileInformation index={i} />
          </Form>
        </div>
      ))}
    </aside>
  </div>
);

AudioDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string,
    }),
  ).isRequired,
};

export default AudioDropzone;

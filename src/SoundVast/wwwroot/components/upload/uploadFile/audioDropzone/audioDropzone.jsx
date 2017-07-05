import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './audioDropzone.less';
import dropzoneStyles from '../../../shared/dropzone/dropzone.less';
import FileInformation from './fileInformation/fileInformation';
import Form from './form/formContainer';

const AudioDropzone = ({ onDrop, files, removeFile }) => (
  <div>
    <Dropzone
      className={styles.audioDropzone}
      accept="audio/*"
      onDrop={onDrop}
    >
      <div className={dropzoneStyles.placeholder}>
        Drag and Drop or Click to upload files
      </div>
    </Dropzone>
    <aside>
      {files.map((file, i) => (
        <Form
          key={file.key}
          form={`upload_${file.key}`}
          index={i}
          removeFile={removeFile}
        >
          <FileInformation index={i} />
        </Form>
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
    }),
  ).isRequired,
};

export default AudioDropzone;

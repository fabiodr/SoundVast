import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './audioDropzone.less';
import FileInformation from './fileInformation/fileInformation';
import Form from './form/formContainer';

const AudioDropzone = ({ onDrop, files }) => (
  <div className="dropzone-container">
    <Dropzone
      className="dropzone"
      accept="audio/*"
      onDrop={onDrop}
    >
      <div className={styles.placeholder}>
        Drag and Drop or Click to upload files
      </div>
    </Dropzone>
    <aside>
      {files.map((file, i) => (
        <Form key={file.key} index={i}>
          <FileInformation {...file} />
        </Form>
      ))}
    </aside>
  </div>
);

AudioDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AudioDropzone;

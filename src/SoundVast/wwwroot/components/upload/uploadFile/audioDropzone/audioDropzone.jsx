import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import dropzoneStyles from '../../../shared/dropzone/dropzone.less';
import FileInformation from './fileInformation/fileInformation';
import Form from './form/formContainer';

const AudioDropzone = ({ onDrop, files, removeFile }) => (
  <div>
    <Dropzone
      className="dropzone"
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
          name={file.name}
        >
          <FileInformation {...file} />
        </Form>
      ))}
    </aside>
  </div>
);

AudioDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AudioDropzone;

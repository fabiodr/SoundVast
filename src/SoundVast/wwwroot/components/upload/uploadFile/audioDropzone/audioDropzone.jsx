import React from 'react';
import Dropzone from 'react-dropzone';

import styles from './audioDropzone.less';
import FileInformation from './fileInformation/fileInformation';

let fileKey = 0;

class AudioDropzone extends React.Component {
  constructor() {
    super();

    this.state = {
      files: [],
    };
  }
  onDrop = (files) => {
    this.setState((prevState) => {
      const allFiles = prevState.files.concat(files);

      allFiles.forEach((file) => {
        const newFile = file;

        newFile.key = fileKey;
        fileKey += 1;
        return newFile;
      });

      return {
        ...prevState,
        files: allFiles,
      };
    });
  }
  render() {
    return (
      <div className="dropzone-container">
        <Dropzone
          className="dropzone"
          accept="audio/*"
          onDrop={this.onDrop}
        >
          <div className={styles.placeholder}>
            Drag and Drop or Click to upload files
          </div>
        </Dropzone>
        <aside>
          {this.state.files.map(file => <FileInformation key={file.key} {...file} />)}
        </aside>
      </div>
    );
  }
}

export default AudioDropzone;

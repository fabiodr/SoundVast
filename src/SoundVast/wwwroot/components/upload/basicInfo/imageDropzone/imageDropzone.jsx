import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import dropzoneStyles from '../../../shared/dropzone/dropzone.less';
import styles from './imageDropzone.less';

const ImageDropzone = ({ onDrop, index, preview }) => (
  <Dropzone
    className={styles.imageDropzone}
    accept="image/*"
    multiple={false}
    onDrop={files => onDrop(files[0], index)}
  >
    {preview && <img alt="" src={preview} />}
    <div className={dropzoneStyles.placeholder}>
      Update image
    </div>
  </Dropzone>
);

ImageDropzone.defaultProps = {
  preview: null,
};

ImageDropzone.propTypes = {
  index: PropTypes.number.isRequired,
  onDrop: PropTypes.func.isRequired,
  preview: PropTypes.string,
};

export default ImageDropzone;

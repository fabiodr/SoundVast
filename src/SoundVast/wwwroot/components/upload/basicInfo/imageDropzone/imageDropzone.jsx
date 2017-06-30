import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import dropzoneStyles from '../../../shared/dropzone/dropzone.less';
import styles from './imageDropzone.less';

const ImageDropzone = ({ onDrop }) => (
  <Dropzone
    className={styles.imageDropzone}
    accept="image/*"
    onDrop={onDrop}
  >
    <div className={dropzoneStyles.placeholder}>
      Update image
    </div>
  </Dropzone>
);

ImageDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default ImageDropzone;

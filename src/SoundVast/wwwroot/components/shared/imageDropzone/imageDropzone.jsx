import React from 'react';
import PropTypes from 'prop-types';

import Dropzone from '../dropzone/dropzone';
import styles from './imageDropzone.less';

const ImageDropzone = ({ onDrop, children }) => (
  <div className={styles.imageDropzoneContainer}>
    <span>Cover Image</span>
    <Dropzone
      className={styles.imageDropzone}
      title="Update image"
      accept="image/*"
      multiple={false}
      onDrop={onDrop}
    >
      {children}
    </Dropzone>
  </div>
);

ImageDropzone.defaultProps = {
  children: null,
};

ImageDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ImageDropzone;

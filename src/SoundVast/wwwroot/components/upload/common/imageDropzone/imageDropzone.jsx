import React from 'react';
import PropTypes from 'prop-types';

import Dropzone from '../../../shared/dropzone/dropzone';
import styles from './imageDropzone.less';
import PreviewImage from '../previewImage/previewImageContainer';

const ImageDropzone = ({ onDrop, id }) => (
  <div className={styles.imageDropzoneContainer}>
    <span>Cover Image</span>
    <Dropzone
      className={styles.imageDropzone}
      title="Update image"
      accept="image/*"
      multiple={false}
      onDrop={files => onDrop(id, files[0])}
    >
      <PreviewImage id={id} />
    </Dropzone>
  </div>
);

ImageDropzone.propTypes = {
  id: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default ImageDropzone;

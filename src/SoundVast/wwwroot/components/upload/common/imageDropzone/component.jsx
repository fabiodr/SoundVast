import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import dropzoneStyles from '../../../shared/dropzone/component.less';
import styles from './component.less';
import PreviewImage from '../previewImage/container';

const ImageDropzone = ({ onDrop, id }) => (
  <div className={styles.imageDropzoneContainer}>
    <span>Cover Image</span>
    <Dropzone
      className={styles.imageDropzone}
      accept="image/*"
      multiple={false}
      onDrop={files => onDrop(files[0], id)}
    >
      <PreviewImage id={id} />
      <div className={dropzoneStyles.placeholder}>
        Update image
      </div>
    </Dropzone>
  </div>
);

ImageDropzone.propTypes = {
  id: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default ImageDropzone;

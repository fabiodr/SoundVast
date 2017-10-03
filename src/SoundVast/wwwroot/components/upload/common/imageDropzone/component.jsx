import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import dropzoneStyles from '../../../shared/dropzone/component.less';
import styles from './component.less';

const ImageDropzone = ({ onDrop, id, preview }) => (
  <div className={styles.imageDropzoneContainer}>
    <span>Cover Image</span>
    <Dropzone
      className={styles.imageDropzone}
      accept="image/*"
      multiple={false}
      onDrop={files => onDrop(files[0], id)}
    >
      <img alt="" src={preview} />
      <div className={dropzoneStyles.placeholder}>
        Update image
      </div>
    </Dropzone>
  </div>
);

ImageDropzone.defaultProps = {
  preview: null,
};

ImageDropzone.propTypes = {
  id: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  preview: PropTypes.string,
};

export default ImageDropzone;

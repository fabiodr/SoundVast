import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Dropzone from '../dropzone/dropzone';
import styles from './imageDropzone.less';

const ImageDropzone = ({ onDrop, children, className }) => (
  <div className={classnames(styles.imageDropzoneContainer, className)}>
    <Dropzone
      className={styles.imageDropzone}
      title="Update cover image"
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
  className: null,
};

ImageDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ImageDropzone;

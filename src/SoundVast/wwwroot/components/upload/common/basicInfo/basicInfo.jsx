import React from 'react';
import PropTypes from 'prop-types';

import styles from './basicInfo.less';
import FormGroup from '../../../shared/form/formGroup';
import ImageDropzone from '../imageDropzone/imageDropzoneContainer';
import PreviewImage from '../previewImage/previewImageContainer';

const BasicInfo = ({ id, children, change }) => (
  <div className={styles.basicInfo}>
    <ImageDropzone change={change} className={styles.imageDropzone} id={id}>
      <PreviewImage id={id} />
    </ImageDropzone>
    <FormGroup className={styles.formGroup}>
      {children}
    </FormGroup>
  </div>
);

BasicInfo.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  change: PropTypes.func.isRequired,
};

export default BasicInfo;

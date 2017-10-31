import React from 'react';
import PropTypes from 'prop-types';

import styles from './basicInfo.less';
import FormGroup from '../../../shared/form/formGroup';
import ImageDropzone from '../imageDropzone/imageDropzoneContainer';

const BasicInfo = ({ id, children }) => (
  <div className={styles.basicInfo}>
    <ImageDropzone id={id} />
    <FormGroup className={styles.formGroup}>
      {children}
    </FormGroup>
  </div>
);

BasicInfo.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicInfo;

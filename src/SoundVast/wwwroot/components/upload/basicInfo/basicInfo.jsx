import React from 'react';
import { Field } from 'redux-form';

import styles from './basicInfo.less';
import ImageDropzone from './imageDropzone/imageDropzone';
import FormInput from '../../shared/form/elements/input';

const BasicInfo = () => (
  <div>
    <div className={styles.imageDropzoneContainer}>
      <ImageDropzone />
    </div>
    <div className={styles.formGroup}>
      <Field name="name" component={FormInput} />
      <Field name="artist" component={FormInput} />
      {/* TODO: Genre's dropdown */}
    </div>
  </div>
);

export default BasicInfo;

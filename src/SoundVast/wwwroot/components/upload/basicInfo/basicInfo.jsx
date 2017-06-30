import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import styles from './basicInfo.less';
import ImageDropzone from './imageDropzone/imageDropzone';
import FormInput from '../../shared/form/elements/input';

const BasicInfo = ({ genres }) => (
  <div className={styles.basicInfo}>
    <div className={styles.imageDropzoneContainer}>
      <ImageDropzone />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="name">Name *</label>
      <Field name="name" component={FormInput} />

      <label htmlFor="artist">Artist</label>
      <Field name="artist" component={FormInput} />

      <label htmlFor="genre">Genre</label>
      <Field name="genre" component="select">
        <option />
        {genres.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>,
        )}
      </Field>
    </div>
  </div>
);

BasicInfo.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BasicInfo;

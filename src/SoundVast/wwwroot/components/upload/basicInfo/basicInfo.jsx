import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import styles from './basicInfo.less';
import ImageDropzone from './imageDropzone/imageDropzoneContainer';
import FormInput from '../../shared/form/elements/editableField/input/input';
import FormSelect from '../../shared/form/elements/editableField/select/select';

const BasicInfo = ({ genres, index }) => (
  <div className={styles.basicInfo}>
    <div className={styles.imageDropzoneContainer}>
      <span>Cover Image</span>
      <ImageDropzone index={index} />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor={`name_${index}`}>Name *
        <Field name="name" id={`name_${index}`} component={FormInput} />
      </label>

      <label htmlFor={`artist_${index}`}>Artist
        <Field name="artist" id={`artist_${index}`} component={FormInput} />
      </label>

      <label htmlFor={`genre_${index}`}>Genre
        <Field name="genre" id={`genre_${index}`} component={FormSelect}>
          <option />
          {genres.map(genre => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
        </Field>
      </label>
    </div>
  </div>
);

BasicInfo.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default BasicInfo;

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import styles from '../../../../../common/basicInfo/component.less';
import ImageDropzone from './imageDropzone/container';
import FormInput from '../../../../../../shared/form/editableField/input/component';
import FormSelect from '../../../../../../shared/form/editableField/select/component';

const BasicInfo = ({ genres, id }) => (
  <div className={styles.basicInfo}>
    <ImageDropzone id={id} />
    <div className={styles.formGroup}>
      <label htmlFor={`name_${id}`}>Name *
        <Field name="name" id={`name_${id}`} component={FormInput} />
      </label>

      <label htmlFor={`artist_${id}`}>Artist
        <Field name="artist" id={`artist_${id}`} component={FormInput} />
      </label>

      <label htmlFor={`genre_${id}`}>Genre
        <Field name="genreId" id={`genre_${id}`} component={FormSelect}>
          <option value="">None</option>
          {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
        </Field>
      </label>
    </div>
  </div>
);

BasicInfo.propTypes = {
  id: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BasicInfo;

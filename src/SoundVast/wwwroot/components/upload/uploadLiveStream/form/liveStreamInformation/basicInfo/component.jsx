import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import styles from '../../../../common/basicInfo/component.less';
import ImageDropzone from './imageDropzone/container';
import FormInput from '../../../../../shared/form/editableField/input/component';
import FormSelect from '../../../../../shared/form/editableField/select/component';

const BasicInfo = ({ genres, id }) => (
  <div className={styles.basicInfo}>
    <ImageDropzone id={id} />
    <div className={styles.formGroup}>
      <label htmlFor={`stationName_${id}`}>Station Name *
        <Field name="stationName" id={`stationName_${id}`} component={FormInput} />
      </label>

      <label htmlFor={`liveStreamURL_${id}`}>Live Stream URL
        <Field name="liveStreamURL" id={`liveStreamURL_${id}`} component={FormInput} />
      </label>

      <label htmlFor={`genre_${id}`}>Genre
        <Field name="genreId" id={`genre_${id}`} component={FormSelect}>
          <option value="">None</option>
          {/* {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)} */}
        </Field>
      </label>
    </div>
  </div>
);

BasicInfo.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default BasicInfo;

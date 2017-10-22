import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import genreTypeNames from '../../../genre/genreTypeNames';
import styles from '../../common/basicInfo/basicInfo.less';
import ImageDropzone from '../../common/imageDropzone/imageDropzoneContainer';
import FormInput from '../../../shared/form/editableField/input/input';
import NameField from '../../common/fields/nameField';
import GenreField from '../../common/fields/genreFieldContainer';

const BasicInfo = ({ id }) => (
  <div className={styles.basicInfo}>
    <ImageDropzone id={id} />
    <div className={styles.formGroup}>
      <NameField id={id} />

      <label htmlFor={`artist_${id}`}>Artist
        <Field name="artist" id={`artist_${id}`} component={FormInput} />
      </label>

      <GenreField id={id} type={genreTypeNames.music} />
    </div>
  </div>
);

BasicInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BasicInfo;

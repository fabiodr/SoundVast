import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import styles from '../../../../common/basicInfo/component.less';
import ImageDropzone from '../../../../common/imageDropzone/container';
import FormInput from '../../../../../shared/form/editableField/input/component';
import NameField from '../../../../common/basicInfo/fields/name/component';
import GenreField from './fields/genre/container';

const BasicInfo = ({ id }) => (
  <div className={styles.basicInfo}>
    <ImageDropzone id={id} />
    <div className={styles.formGroup}>
      <NameField id={id} label="Station Name" />

      <label htmlFor={`liveStreamURL_${id}`}>Live Stream URL *
        <Field name="liveStreamURL" id={`liveStreamURL_${id}`} component={FormInput} />
      </label>

      <GenreField id={id} />
    </div>
  </div>
);

BasicInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BasicInfo;

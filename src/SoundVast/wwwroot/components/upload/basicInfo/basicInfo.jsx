import React from 'react';
import { Field } from 'redux-form';

import formStyles from '../../shared/form/form.less';
import FormInput from '../../shared/form/elements/input';

const BasicInfo = () => (
  <div className={formStyles.formGroup}>
    <Field name="name" component={FormInput} />
    <Field name="artist" component={FormInput} />
    {/* TODO: Genre's dropdown */}
  </div>
);

export default BasicInfo;

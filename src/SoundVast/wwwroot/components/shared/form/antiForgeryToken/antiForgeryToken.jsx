import React from 'react';
import { Field } from 'redux-form';

const AntiForgeryToken = () =>
  <Field name="__RequestVerificationToken" component="input" type="hidden" />;

export default AntiForgeryToken;

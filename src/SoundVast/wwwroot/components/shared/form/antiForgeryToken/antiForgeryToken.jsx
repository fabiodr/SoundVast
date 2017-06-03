import React from 'react';
import { Field } from 'redux-form';

const AntiForgeryToken = () =>
  <Field component="input" type="hidden" name="__RequestVerificationToken" />;

export default AntiForgeryToken;

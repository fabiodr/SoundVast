import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import CancelButton from '../shared/button/cancelButton';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './commentBox.less';
import Textarea from '../shared/fields/textarea/textarea';

const CommentBox = ({ handleSubmit, form, reset }) => (
  <form className={styles.commentBox} onSubmit={handleSubmit} action="">
    <Field name="body" component={Textarea} />

    <SpinnerSubmit formName={form}>Comment</SpinnerSubmit>
    <CancelButton onClick={reset} />
  </form>
);

CommentBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

export default CommentBox;

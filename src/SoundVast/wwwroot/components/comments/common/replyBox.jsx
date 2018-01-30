import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../../shared/button/button';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './replyBox.less';
import Textarea from '../../shared/fields/inputField/inputTextareaField';

const ReplyBox = ({ handleSubmit, form, cancel }) => (
  <form className={styles.replyBox} onSubmit={handleSubmit} action="">
    <Field name="body" component={Textarea} placeholder="Add your reply..." />

    <SpinnerSubmit formName={form} styleName="secondary">Reply</SpinnerSubmit>
    <Button onClick={cancel} styleName="secondary">Cancel</Button>
  </form>
);

ReplyBox.defaultProps = {
  cancel: null,
};

ReplyBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  cancel: PropTypes.func,
};

export default ReplyBox;

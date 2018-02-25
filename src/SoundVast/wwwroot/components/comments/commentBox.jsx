import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../shared/button/buttonContainer';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './commentBox.less';
import Textarea from '../shared/fields/inputField/inputTextareaField';

const CommentBox = ({ handleSubmit, form, cancel }) => (
  <form className={styles.commentBox} onSubmit={handleSubmit} action="">
    <Field name="body" component={Textarea} placeholder="Add your comment..." />

    <SpinnerSubmit authRequired formName={form} styleName="secondary">Comment</SpinnerSubmit>
    <Button type="button" onClick={cancel} styleName="secondary">Cancel</Button>
  </form>
);

CommentBox.defaultProps = {
  cancel: null,
};

CommentBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  cancel: PropTypes.func,
};

export default CommentBox;

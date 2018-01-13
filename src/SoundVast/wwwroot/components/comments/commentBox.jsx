import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../shared/button/button';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './commentBox.less';
import Textarea from '../shared/fields/textarea/textarea';

const CommentBox = ({ handleSubmit, form, cancel }) => (
  <form className={styles.commentBox} onSubmit={handleSubmit} action="">
    <Field name="body" component={Textarea} placeholder="Add your comment..." />

    <SpinnerSubmit formName={form} styleName="secondary">Comment</SpinnerSubmit>
    <Button onClick={cancel} styleName="secondary">Cancel</Button>
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

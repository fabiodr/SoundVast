import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import ResizableTextArea from 'react-fluid-textarea';

import CancelButton from '../shared/button/cancelButton';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './commentBox.less';

const CommentBox = ({ handleSubmit, form }) => (
  <form className={styles.commentBox} onSubmit={handleSubmit} action="">
    <Field name="commentBox" component={() => <ResizableTextArea placeholder="Add your comment..." />} />

    <SpinnerSubmit formName={form}>Comment</SpinnerSubmit>
    <CancelButton />
  </form>
);

CommentBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
};

export default CommentBox;

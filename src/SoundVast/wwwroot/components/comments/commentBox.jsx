import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { compose, withHandlers, setPropTypes, defaultProps } from 'recompose';

import CancelButton from '../shared/button/cancelButton';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './commentBox.less';
import Textarea from '../shared/fields/textarea/textarea';

const CommentBox = ({ handleSubmit, form, cancelOnClick }) => (
  <form className={styles.commentBox} onSubmit={handleSubmit} action="">
    <Field name="body" component={Textarea} placeholder="Add your comment..." />

    <SpinnerSubmit formName={form}>Comment</SpinnerSubmit>
    <CancelButton onClick={cancelOnClick} />
  </form>
);

CommentBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  cancelOnClick: PropTypes.func.isRequired,
};

const propTypes = {
  reset: PropTypes.func.isRequired,
  cancelOnClick: PropTypes.func.isRequired,
};

const handlers = {
  cancelOnClick: ({ reset, cancelOnClick }) => (...args) => {
    reset();
    cancelOnClick(...args);
  },
};

export default compose(
  setPropTypes(propTypes),
  defaultProps({
    cancelOnClick: Function.prototype,
  }),
  withHandlers(handlers),
)(CommentBox);

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Button from '../shared/button/button';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './commentBox.less';
import Textarea from '../shared/fields/textarea/textarea';

const CommentBox = ({ handleSubmit, form, cancel, saveCommentText, bodyPlaceholder }) => (
  <form className={styles.commentBox} onSubmit={handleSubmit} action="">
    <Field name="body" component={Textarea} placeholder={bodyPlaceholder} />

    <div className={styles.commentButtonContainer}>
      <SpinnerSubmit formName={form} styleName="secondary">{saveCommentText}</SpinnerSubmit>
      <Button onClick={cancel} styleName="secondary">Cancel</Button>
    </div>
  </form>
);

CommentBox.defaultProps = {
  cancel: null,
  saveCommentText: 'Comment',
  bodyPlaceholder: 'Add your comment...',
};

CommentBox.propTypes = {
  saveCommentText: PropTypes.string,
  bodyPlaceholder: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  cancel: PropTypes.func,
};

export default CommentBox;

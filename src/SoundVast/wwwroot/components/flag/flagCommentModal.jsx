import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FlagModal from './flagModalContainer';

const FlagCommentModal = ({ onSubmit, isAuthorized }) => (
  <FlagModal modalId="flagComment" onSubmit={onSubmit} isAuthorized={isAuthorized}>
    <label htmlFor="spam">
      <Field name="reason" id="spam" value="spam" component="input" type="radio" />
      Spam - Advertising, spamming or bots
    </label>
    <label htmlFor="porn">
      <Field name="reason" id="porn" value="porn" component="input" type="radio" />
      Pornography - Inappropriate content for this site
    </label>
    <label htmlFor="abuse">
      <Field name="reason" id="abuse" value="abuse" component="input" type="radio" />
      Abuse - This comment is abusive
    </label>
    <label htmlFor="noValue">
      <Field name="reason" id="noValue" value="noValue" component="input" type="radio" />
      No value - The comment adds no value to the discussion or is fishing for likes
    </label>
  </FlagModal>
);

FlagCommentModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default FlagCommentModal;

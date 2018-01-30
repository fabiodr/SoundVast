import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FlagModal from './flagModalContainer';
import Textarea from '../shared/fields/inputField/inputTextareaField';

const FlagAudioModal = ({ onSubmit, isAuthorized }) => (
  <FlagModal modalId="flagAudio" onSubmit={onSubmit} isAuthorized={isAuthorized}>
    <label htmlFor="quality">
      <Field name="reason" id="quality" value="quality" component="input" type="radio" />
      Quality - Low quality audio
    </label>
    <label htmlFor="duplicate">
      <Field name="reason" id="duplicate" value="duplicate" component="input" type="radio" />
      Duplicate - An exact duplicate of another audio
    </label>
    <label htmlFor="copyright">
      <Field name="reason" id="copyright" value="copyright" component="input" type="radio" />
      Copyright - Breaks copyright laws
    </label>
    <label htmlFor="abuse">
      <Field name="reason" id="abuse" value="abuse" component="input" type="radio" />
      Inappropriate/Abuse - Content that does not belong on this site
    </label>
    <Field name="additionalDetails" placeholder="Any additional details for why this audio is being flagged" component={Textarea} />
  </FlagModal>
);

FlagAudioModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default FlagAudioModal;

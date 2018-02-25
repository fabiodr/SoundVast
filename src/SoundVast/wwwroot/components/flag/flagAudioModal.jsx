import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FlagModal from './flagModalContainer';
import Textarea from '../shared/fields/inputField/inputTextareaField';
import InputRadioButtonGroup from '../shared/fields/inputField/inputRadioButtonGroup';
import styles from './flagAudioModal.less';

const FlagAudioModal = ({ onSubmit }) => (
  <FlagModal
    modalId="flagAudio"
    onSubmit={onSubmit}
  >
    <Field
      component={InputRadioButtonGroup}
      name="flag"
      groupClassName={styles.radioButtonGroup}
      options={[
        { label: 'Duplicate - An exact duplicate of another audio', id: 'duplicate', customValue: 'duplicate' },
        { label: 'Copyright - Breaks copyright laws', id: 'copyright', customValue: 'copyright' },
        { label: 'Inappropriate - Content that does not belong on this site', id: 'inappropriate', customValue: 'inappropriate' },
      ]}
    />
    <Field
      name="additionalDetails"
      placeholder="Any additional details for why this audio is being flagged"
      component={Textarea}
      className={styles.textarea}
    />
  </FlagModal>
);

FlagAudioModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FlagAudioModal;

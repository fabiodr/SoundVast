import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FlagModal from './flagModalContainer';
import InputRadioButtonGroup from '../shared/fields/inputField/inputRadioButtonGroup';
import styles from './flagCommentModal.less';

const FlagCommentModal = ({ onSubmit }) => (
  <FlagModal
    modalId="flagComment"
    onSubmit={onSubmit}
  >
    <Field
      component={InputRadioButtonGroup}
      name="flag"
      groupClassName={styles.radioButtonGroup}
      options={[
        { label: 'Spam - Advertising, spamming or bots', id: 'spam', customValue: 'spam' },
      ]}
    />
  </FlagModal>
);

FlagCommentModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FlagCommentModal;

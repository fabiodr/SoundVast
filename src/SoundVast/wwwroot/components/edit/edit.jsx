import React from 'react';
import PropTypes from 'prop-types';

import ModalButton from '../shared/button/modalButtonContainer';
import styles from './edit.less';

const Edit = ({ modalId, id }) => (
  <ModalButton
    styleName="secondary"
    className={styles.edit}
    title="Request changes"
    modalId={modalId}
    variables={{ id }}
  >
    edit
  </ModalButton>
);

Edit.propTypes = {
  modalId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Edit;

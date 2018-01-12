import React from 'react';
import PropTypes from 'prop-types';

import ModalLink from '../shared/modal/modalLinkContainer';
import EditIcon from '../icons/edit';
import styles from './edit.less';

const Edit = ({ modalId, id }) => (
  <ModalLink title="Request changes" modalId={modalId} variables={{ id }}>
    <EditIcon className={styles.editIcon} />
  </ModalLink>
);

Edit.propTypes = {
  modalId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Edit;

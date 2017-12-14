import React from 'react';
import PropTypes from 'prop-types';

import ModalLink from '../shared/modal/modalLinkContainer';
import FlagIcon from '../icons/flag';
import styles from './flag.less';

const Flag = ({ modalId, id }) => (
  <ModalLink modalId={modalId} variables={{ id }}>
    <FlagIcon className={styles.flagIcon} />
  </ModalLink>
);

Flag.propTypes = {
  modalId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Flag;

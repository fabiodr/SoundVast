import React from 'react';
import PropTypes from 'prop-types';

import ModalLink from '../shared/modal/modalLinkContainer';
import FlagIcon from '../icons/flag';
import styles from './flag.less';

const Flag = ({ modalId, id, className }) => (
  <ModalLink title="Report this" modalId={modalId} variables={{ id }} className={className}>
    <FlagIcon className={styles.flagIcon} />
  </ModalLink>
);

Flag.defaultProps = {
  className: null,
};

Flag.propTypes = {
  modalId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Flag;

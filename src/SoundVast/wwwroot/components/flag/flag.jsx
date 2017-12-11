import React from 'react';
import PropTypes from 'prop-types';

import ModalLink from '../shared/modal/modalLinkContainer';
import FlagIcon from '../icons/flag';
import styles from './flag.less';

const Flag = ({ id }) => (
  <ModalLink modalId="flag" variables={{ id }}>
    <FlagIcon className={styles.flagIcon} />
  </ModalLink>
);

Flag.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Flag;

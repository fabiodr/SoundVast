import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalButton from '../shared/button/modalButtonContainer';
import styles from './flag.less';

const Flag = ({ modalId, id, className }) => (
  <ModalButton
    styleName="secondary"
    className={classnames(styles.flag, className)}
    title="Report this"
    modalId={modalId}
    variables={{ id }}
  >
    flag
  </ModalButton>
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

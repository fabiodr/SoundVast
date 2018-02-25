import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../shared/modal/modalContainer';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import styles from './flagModal.less';

const FlagModal = ({
  modalId,
  handleSubmit,
  form,
  children,
  className,
}) => (
  <Modal authRequired title="Flag." id={modalId} className={className}>
    <form onSubmit={handleSubmit} action="">
      <div className={styles.fields}>
        {children}
      </div>
      <SpinnerSubmit styleName="primary" formName={form}>Flag</SpinnerSubmit>
    </form>
  </Modal>
);

FlagModal.defaultProps = {
  className: null,
};

FlagModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FlagModal;

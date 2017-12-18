import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import EditIcon from '../icons/edit';
import styles from './edit.less';

const Edit = ({ onClick }) => (
  <Link
    to="/"
    tabIndex={0}
    role="button"
    onClick={onClick}
  >
    <EditIcon className={styles.editIcon} />
  </Link>
);

Edit.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Edit;

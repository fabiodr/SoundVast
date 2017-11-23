import React from 'react';
import PropTypes from 'prop-types';

import DislikeIcon from '../../icons/dislike';
import styles from './dislike.less';

const Dislike = ({ className, onClick }) => (
  <span className={className} role="button" tabIndex={0} onClick={onClick}>
    <DislikeIcon className={styles.dislikeIcon} />
  </span>
);

Dislike.defaultProps = {
  className: null,
};

Dislike.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Dislike;

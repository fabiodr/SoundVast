import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DislikeIcon from '../../icons/dislike';
import styles from './dislike.less';

const Dislike = ({ className, onClick }) => (
  <button className={classnames(styles.dislike, className)} title="I dislike this" onClick={onClick}>
    <DislikeIcon className={styles.dislikeIcon} />
  </button>
);

Dislike.defaultProps = {
  className: null,
};

Dislike.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Dislike;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DislikeIcon from '../../icons/dislike';
import styles from './dislike.less';
import Button from '../../shared/button/buttonContainer';

const Dislike = ({ className, onClick }) => (
  <Button authRequired className={classnames(styles.dislike, className)} title="I dislike this" onClick={onClick}>
    <DislikeIcon className={styles.dislikeIcon} />
  </Button>
);

Dislike.defaultProps = {
  className: null,
};

Dislike.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Dislike;

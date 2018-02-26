import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LikeIcon from '../../icons/like';
import styles from './like.less';
import Button from '../../shared/button/buttonContainer';

const Like = ({ className, onClick }) => (
  <Button authRequired className={classnames(styles.like, className)} title="I like this" onClick={onClick}>
    <LikeIcon className={styles.likeIcon} />
  </Button>
);

Like.defaultProps = {
  className: null,
};

Like.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Like;

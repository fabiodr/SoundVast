import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import classnames from 'classnames';

import styles from './playCount.less';

const PlayCount = ({ className, playCount }) => (
  <div className={classnames(styles.playCount, className)}>
    {playCount} {pluralize('play', playCount)}
  </div>
);

PlayCount.defaultProps = {
  className: null,
};

PlayCount.propTypes = {
  className: PropTypes.string,
  playCount: PropTypes.number.isRequired,
};

export default PlayCount;

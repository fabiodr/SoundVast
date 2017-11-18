import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PlayIcon from '../../../icons/play';
import styles from './playControls.less';

const Play = ({ isCurrent, hasPlayed }) => {
  const className = classNames(styles.play, {
    [styles.currentlyPlayed]: isCurrent && hasPlayed,
  });

  return <PlayIcon className={className} data-role="hover" />;
};

Play.defaultProps = {
  hasPlayed: false,
};

Play.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  hasPlayed: PropTypes.bool,
};


export default Play;

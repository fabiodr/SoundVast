import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './component.less';
import PlayIcon from '../../../../../images/audioControls/play.svg';

const Play = ({ isCurrent, hasPlayed }) => {
  const className = classNames(styles.play, {
    [styles.currentlyPlayed]: isCurrent && hasPlayed,
  });

  return <PlayIcon width={50} height={50} className={className} data-role="hover" />;
};

Play.defaultProps = {
  hasPlayed: false,
};

Play.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  hasPlayed: PropTypes.bool,
};


export default Play;

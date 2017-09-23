import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import DislikeIcon from '../../../../../images/ratingControls/dislike.svg';

const Dislike = ({ dislike, dislikes, width, height }) => (
  <div>
    <DislikeIcon className={styles.dislikeIcon} width={width} height={height} onClick={dislike} />
    <div className={styles.dislikes}>
      {dislikes}
    </div>
  </div>
);

Dislike.defaultProps = {
  width: 14,
  height: 14,
};

Dislike.propTypes = {
  dislikes: PropTypes.number.isRequired,
  dislike: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Dislike;

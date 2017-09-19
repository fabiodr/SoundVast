import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import DislikeIcon from '../../../../../images/ratingControls/dislike.svg';

const Dislike = ({ width, height }) => (
  <DislikeIcon className={styles.dislike} width={width} height={height} />
);

Dislike.defaultProps = {
  width: 14,
  height: 14,
};

Dislike.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Dislike;

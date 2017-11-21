import React from 'react';
import PropTypes from 'prop-types';

import DislikeIcon from '../../icons/dislike';
import styles from './dislike.less';

const Dislike = ({ onClick, dislikes }) => (
  <div>
    <span role="button" tabIndex={0} onClick={onClick}>
      <DislikeIcon className={styles.dislikeIcon} />
    </span>
    <div className="dislikes">
      {dislikes}
    </div>
  </div>
);

Dislike.propTypes = {
  dislikes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Dislike;

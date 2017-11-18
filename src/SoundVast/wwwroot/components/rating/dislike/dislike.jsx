import React from 'react';
import PropTypes from 'prop-types';

import DislikeIcon from '../../icons/dislike';
import styles from './dislike.less';

const Dislike = ({ onClick, dislikes }) => (
  <div>
    <DislikeIcon className={styles.dislikeIcon} onClick={onClick} />
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

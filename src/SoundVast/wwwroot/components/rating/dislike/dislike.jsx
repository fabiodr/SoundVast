import React from 'react';
import PropTypes from 'prop-types';

import DislikeIcon from '../../../images/ratingControls/dislike.svg';

const Dislike = ({ onClick, dislikes, width, height }) => (
  <div>
    <DislikeIcon width={width} height={height} onClick={onClick} />
    <div className="dislikes">
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
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Dislike;

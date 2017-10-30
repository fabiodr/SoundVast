import React from 'react';
import PropTypes from 'prop-types';

import LikeIcon from '../../../images/ratingControls/like.svg';

const Like = ({ onClick, likes, width, height, ...props }) => (
  <div>
    <LikeIcon width={width} height={height} onClick={onClick}>{likes}</LikeIcon>
    <div className="likes">
      {likes}
    </div>
  </div>
);

Like.defaultProps = {
  width: 14,
  height: 14,
};

Like.propTypes = {
  // likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Like;

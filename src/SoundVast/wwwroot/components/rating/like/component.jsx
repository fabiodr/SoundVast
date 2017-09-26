import React from 'react';
import PropTypes from 'prop-types';

import LikeIcon from '../../../images/ratingControls/like.svg';

const Like = ({ like, likes, width, height }) => (
  <div>
    <LikeIcon width={width} height={height} onClick={like}>{likes}</LikeIcon>
    {likes}
  </div>
);

Like.defaultProps = {
  width: 14,
  height: 14,
};

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Like;

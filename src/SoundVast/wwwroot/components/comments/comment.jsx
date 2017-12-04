import React from 'react';
import PropTypes from 'prop-types';

import Like from '../rating/like/likeCommentContainer';
import Dislike from '../rating/dislike/dislikeCommentContainer';
import Rating from '../rating/audioRating';

const Comments = ({ userName, date, body, id, likes, dislikes }) => (
  <div>
    <div>
      <span>{userName}</span>
      <span>{date}</span>
    </div>
    <div>{body}</div>
    <Rating likes={likes} dislikes={dislikes}>
      <Like commentId={id} />
      <Dislike commentId={id} />
    </Rating>
  </div>
);

Comments.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Comments;

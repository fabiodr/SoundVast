import React from 'react';
import PropTypes from 'prop-types';

import Like from '../rating/like/likeCommentContainer';
import Dislike from '../rating/dislike/dislikeCommentContainer';
import Rating from '../rating/audioRating';
import Flag from '../flag/flag';
import styles from './comment.less';

const Comment = ({
  user,
  dateAdded,
  body,
  commentId,
  likes,
  dislikes,
  reply,
  replies,
}) => (
  <div className={styles.commentTree}>
    <div className={styles.comment} data-component="comment">
      <div>
        <span className={styles.userName}>{user.userName}</span>
        <span className={styles.dateAdded}>{dateAdded}</span>
      </div>
      <div className={styles.body}>{body}</div>
      <div className={styles.controls}>
        <Rating likes={likes} dislikes={dislikes}>
          <Like commentId={commentId} />
          <Dislike commentId={commentId} />
        </Rating>
        {reply}
        <Flag modalId="flagComment" id={commentId} className={styles.flag} />
      </div>
    </div>
    {replies}
  </div>
);

Comment.defaultProps = {
  replies: null,
};

Comment.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  dateAdded: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  reply: PropTypes.element.isRequired,
  replies: PropTypes.node,
};

export default Comment;

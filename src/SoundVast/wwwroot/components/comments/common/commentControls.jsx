import React from 'react';
import PropTypes from 'prop-types';

import Like from '../../rating/like/likeCommentContainer';
import Dislike from '../../rating/dislike/dislikeCommentContainer';
import Rating from '../../rating/audioRating';
import Flag from '../../flag/flag';
import styles from './commentControls.less';

const CommentControls = ({ comment, commentId, likes, dislikes }) => (
  <div className={styles.commentControls}>
    <Rating
      likes={likes}
      dislikes={dislikes}
      like={<Like comment={comment} />}
      dislike={<Dislike comment={comment} />}
    />
    <Flag modalId="flagComment" id={commentId} className={styles.flag} />
  </div>
);

CommentControls.propTypes = {
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
};

export default CommentControls;

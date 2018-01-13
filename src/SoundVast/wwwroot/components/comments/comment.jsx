import React from 'react';
import PropTypes from 'prop-types';

import styles from './comment.less';
import ReplyBox from './common/replyBoxContainer';
import Replies from './repliesContainer';
import CommentHeader from './common/commentHeaderContainer';
import CommentBody from './common/commentBody';
import CommentControls from './common/commentControls';

const Comment = ({
  comment,
  audio,
  user,
  dateAdded,
  body,
  commentId,
  likes,
  dislikes,
}) => (
  <div className={styles.commentTree}>
    <div data-component="comment">
      <CommentHeader userName={user.userName} dateAdded={dateAdded} />
      <CommentBody>{body}</CommentBody>
      <CommentControls commentId={commentId} likes={likes} dislikes={dislikes} />
      <ReplyBox
        rootComment={comment}
        originalComment={comment}
        audio={audio}
      />
    </div>
    <Replies comment={comment} audio={audio} />
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  audio: PropTypes.object.isRequired,
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  dateAdded: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
};

export default Comment;

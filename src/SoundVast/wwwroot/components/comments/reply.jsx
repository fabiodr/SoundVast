import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';
import classnames from 'classnames';

import styles from './reply.less';
import Button from '../shared/button/button';
import ReplyBox from './common/replyBoxContainer';
import CommentHeader from './common/commentHeaderContainer';
import CommentBody from './common/commentBody';
import CommentControls from './common/commentControls';

const Reply = ({
  reply,
  audio,
  rootComment,
  user,
  dateAdded,
  commentId,
  likes,
  dislikes,
  body,
  originalComment,
  originalCommentExpanded,
  toggleOriginalCommentOverflow,
}) => (
  <div className={styles.reply}>
    <CommentHeader userName={user.userName} dateAdded={dateAdded} />
    <CommentBody>
      <div className={styles.userNameContainer}>
        <Link to={`/profile/${originalComment.user.userName}`}>
          @{originalComment.user.userName}
        </Link>
        <Button
          onClick={toggleOriginalCommentOverflow}
          className={styles.expandOriginalCommentButton}
        >
          {originalCommentExpanded ? <div>Collapse</div> : <div>Expand</div>}
        </Button>
      </div>
      <blockquote
        className={classnames(
          styles.originalComment,
          originalCommentExpanded && styles.originalCommentExpanded)}
      >
        {originalComment.body}
      </blockquote>
      {body}
    </CommentBody>
    <CommentControls commentId={commentId} likes={likes} dislikes={dislikes} />
    <ReplyBox
      rootComment={rootComment}
      originalComment={reply}
      audio={audio}
    />
  </div>
);

Reply.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  dateAdded: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  rootComment: PropTypes.object.isRequired,
  audio: PropTypes.object.isRequired,
  reply: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  originalComment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      userName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  originalCommentExpanded: PropTypes.bool.isRequired,
  toggleOriginalCommentOverflow: PropTypes.func.isRequired,
};

export default Reply;

import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers } from 'recompose';

import Like from '../rating/like/likeCommentContainer';
import Dislike from '../rating/dislike/dislikeCommentContainer';
import Rating from '../rating/audioRating';
import CommentBox from './commentBoxContainer';

const Comments = ({
  userName,
  date,
  body,
  id,
  likes,
  dislikes,
  reply,
  cancel,
  showReplyBox,
}) => (
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
    {showReplyBox ? <CommentBox form="replyBox" cancelOnClick={cancel} originalCommentId={id} /> : (
      <div role="button" tabIndex={0} onClick={reply}>
        reply
      </div>
    )}
  </div>
);

Comments.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  reply: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  showReplyBox: PropTypes.bool.isRequired,
};

const stateHandlers = {
  reply: () => () => ({
    showReplyBox: true,
  }),
  cancel: () => () => ({
    showReplyBox: false,
  }),
};

export default compose(
  withStateHandlers({
    showReplyBox: false,
  }, stateHandlers),
)(Comments);

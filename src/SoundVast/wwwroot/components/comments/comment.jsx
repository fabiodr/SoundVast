import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, setPropTypes } from 'recompose';

import Like from '../rating/like/likeCommentContainer';
import Dislike from '../rating/dislike/dislikeCommentContainer';
import Rating from '../rating/audioRating';
import CommentBox from './commentBoxContainer';
import FormattedNumberText from '../shared/numbers/formattedNumberText';
import Button from '../shared/button/button';
import Flag from '../flag/flag';

const Comment = ({
  user,
  dateAdded,
  body,
  commentId,
  likes,
  dislikes,
  reply,
  cancel,
  showReplyBox,
  repliesCount,
  isTopLevelComment,
  showRepliesButton,
  showRepliesOnClick,
  hideRepliesOnClick,
}) => {
  let repliesButton;

  if (isTopLevelComment && repliesCount) {
    repliesButton = showRepliesButton ? (
      <Button onClick={showRepliesOnClick}>
        Show <FormattedNumberText number={repliesCount} singularText="reply" pluralText="replies" />
      </Button>
    ) : (
      <Button onClick={hideRepliesOnClick}>
        Hide <FormattedNumberText number={repliesCount} singularText="reply" pluralText="replies" />
      </Button>
    );
  }

  return (
    <div>
      <div>
        <span>{user.userName}</span>
        <span>{dateAdded}</span>
      </div>
      <div>{body}</div>
      <Rating likes={likes} dislikes={dislikes}>
        <Like commentId={commentId} />
        <Dislike commentId={commentId} />
      </Rating>
      <Flag modalId="flagComment" id={commentId} />
      {showReplyBox ? <CommentBox form="replyBox" cancelOnClick={cancel} originalCommentId={commentId} /> : (
        <div role="button" tabIndex={0} onClick={reply}>
          reply
        </div>
      )}
      {repliesButton}
    </div>
  );
};

Comment.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  dateAdded: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  reply: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  showReplyBox: PropTypes.bool.isRequired,
  repliesCount: PropTypes.number.isRequired,
  showRepliesOnClick: PropTypes.func.isRequired,
  hideRepliesOnClick: PropTypes.func.isRequired,
  showRepliesButton: PropTypes.bool.isRequired,
  isTopLevelComment: PropTypes.bool.isRequired,
};

const stateHandlers = {
  showRepliesOnClick: (state, props) => () => {
    props.setReplies(props.id);

    return {
      showRepliesButton: !state.showRepliesButton,
    };
  },
  hideRepliesOnClick: (state, props) => () => {
    props.setReplies();

    return {
      showRepliesButton: !state.showRepliesButton,
    };
  },
  reply: () => () => ({
    showReplyBox: true,
  }),
  cancel: () => () => ({
    showReplyBox: false,
  }),
};

export default compose(
  setPropTypes({
    setReplies: PropTypes.func.isRequired,
  }),
  withStateHandlers({
    showReplyBox: false,
    showRepliesButton: true,
  }, stateHandlers),
)(Comment);

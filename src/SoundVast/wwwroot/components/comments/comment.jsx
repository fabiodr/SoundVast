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
        <span>{userName}</span>
        <span>{date}</span>
      </div>
      <div>{body}</div>
      <Rating likes={likes} dislikes={dislikes}>
        <Like commentId={id} />
        <Dislike commentId={id} />
      </Rating>
      <Flag modalId="flagComment" id={id} />
      {showReplyBox ? <CommentBox form="replyBox" cancelOnClick={cancel} originalCommentId={id} /> : (
        <div role="button" tabIndex={0} onClick={reply}>
          reply
        </div>
      )}
      {repliesButton}
    </div>
  );
};

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
)(Comments);

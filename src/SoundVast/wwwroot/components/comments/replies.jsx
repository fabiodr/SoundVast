import React from 'react';
import PropTypes from 'prop-types';

import Comment from './commentContainer';
import LoadReplyButton from './loadReplyButton';

const Replies = ({ replies, audio, showLoadRepliesButton }) => (
  <div>
    {showLoadRepliesButton ? <LoadReplyButton text="Show" /> : <LoadReplyButton text="Hide" />}
    {replies.items.map(({ node }) => (
      <Comment
        key={node.commentId}
        comment={node}
        audio={audio}
      />
    ))}
  </div>
);

Replies.propTypes = {
  replies: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.object.isRequired,
    ).isRequired,
  }).isRequired,
  audio: PropTypes.object.isRequired,
  showLoadRepliesButton: PropTypes.bool.isRequired,
};

export default Replies;

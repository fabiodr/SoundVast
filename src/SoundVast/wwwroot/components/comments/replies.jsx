import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

import Reply from './commentContainer';
import Button from '../shared/button/button';
import styles from './replies.less';
import ReplyBox from './replyBoxContainer';

const Replies = ({
  comment,
  replies,
  audio,
  showReplies,
  toggleReplies,
}) => (
  <div>
    {!!replies.totalCount && (
      !showReplies ? (
        <Button onClick={toggleReplies} className={styles.toggleReplies}>
          Show {replies.totalCount} {pluralize('reply', replies.totalCount)}
        </Button>
      ) : (
        <Button onClick={toggleReplies} className={styles.toggleReplies}>
          Hide {pluralize('reply', replies.totalCount)}
        </Button>
      )
    )}
    <div className={styles.replies}>
      {replies.edges.map(({ node }) => (
        <Reply
          key={node.commentId}
          comment={node}
          reply={
            <ReplyBox
              rootComment={comment}
              comment={node}
              audio={audio}
            />
          }
        />
      ))}
    </div>
  </div>
);

Replies.propTypes = {
  comment: PropTypes.object.isRequired,
  replies: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        commentId: PropTypes.number.isRequired,
      }),
    })),
  }).isRequired,
  audio: PropTypes.object.isRequired,
  showReplies: PropTypes.bool.isRequired,
  toggleReplies: PropTypes.func.isRequired,
};

export default Replies;

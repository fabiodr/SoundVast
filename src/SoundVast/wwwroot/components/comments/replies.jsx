import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

import Reply from './replyContainer';
import Button from '../shared/button/button';
import styles from './replies.less';

const Replies = ({
  comment,
  replies,
  audio,
  showingReplies,
  toggleReplies,
}) => (
  <div>
    {!!replies.totalCount && (
      <Button onClick={toggleReplies} className={styles.toggleReplies}>
        {!showingReplies ? (
          <div>
            Show {replies.totalCount} {pluralize('reply', replies.totalCount)}
          </div>
        ) : (
          <div>
            Hide {pluralize('reply', replies.totalCount)}
          </div>
        )}
      </Button>
    )}
    <div className={styles.replies}>
      {replies.edges.map(({ node }) => (
        <Reply
          key={node.commentId}
          reply={node}
          rootComment={comment}
          audio={audio}
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
  showingReplies: PropTypes.bool.isRequired,
  toggleReplies: PropTypes.func.isRequired,
};

export default Replies;

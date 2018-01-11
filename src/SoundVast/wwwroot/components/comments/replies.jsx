import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { Link } from 'found';
import classnames from 'classnames';

import Reply from './commentContainer';
import Button from '../shared/button/button';
import styles from './replies.less';
import ReplyBox from './replyBoxContainer';

const Replies = ({
  comment,
  replies,
  audio,
  showingReplies,
  originalCommentExpanded,
  toggleReplies,
  toggleOriginalCommentOverflow,
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
          comment={node}
          body={
            <div className={styles.bodyContainer}>
              <div className={styles.userNameContainer}>
                <Link to={`/profile/${node.originalComment.user.userName}`}>
                  @{node.originalComment.user.userName}
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
                {node.originalComment.body}
              </blockquote>
              {node.body}
            </div>
          }
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
  showingReplies: PropTypes.bool.isRequired,
  originalCommentExpanded: PropTypes.bool.isRequired,
  toggleReplies: PropTypes.func.isRequired,
  toggleOriginalCommentOverflow: PropTypes.func.isRequired,
};

export default Replies;

import React from 'react';
import PropTypes from 'prop-types';

import Comment from './comment';
import styles from './comments.less';

const Comments = ({ comments }) => (
  <div className={styles.comments}>
    {comments.map(comment => (
      <Comment
        key={comment.commentId}
        id={comment.commentId}
        body={comment.body}
        date={comment.date}
        likes={comment.likes}
        dislikes={comment.dislikes}
        userName={comment.user.userName}
      />
    ))}
  </div>
);

Comments.defaultProps = {
  comments: [],
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      commentId: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      dislikes: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      user: PropTypes.shape({
        userName: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

export default Comments;

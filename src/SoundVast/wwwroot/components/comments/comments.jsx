import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Comment from './commentContainer';
import styles from './comments.less';
import Loader from '../shared/loaders/loader';

const Comments = ({ comments, setReplies, loadMore }) => (
  <div className={styles.comments}>
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={comments.pageInfo.hasNextPage}
      loader={<Loader />}
      initialLoad={false}
    >
      {comments.edges.map(({ node }) => (
        <Comment
          key={node.commentId}
          comment={node}
          setReplies={setReplies}
        />
      ))}
    </InfiniteScroll>
  </div>
);

Comments.propTypes = {
  comments: PropTypes.shape({
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool.isRequired,
    }).isRequired,
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          commentId: PropTypes.number.isRequired,
        }),
      }),
    ),
  }).isRequired,
  setReplies: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Comments;

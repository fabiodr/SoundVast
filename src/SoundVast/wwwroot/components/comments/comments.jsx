import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Comment from './commentContainer';
import styles from './comments.less';
import Loader from '../shared/loaders/loader';

const Comments = ({ audio, loadMore }) => (
  <div className={styles.comments}>
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={audio.comments.pageInfo.hasNextPage}
      loader={<Loader />}
      initialLoad={false}
    >
      {audio.comments.edges.map(({ node }) => (
        <Comment
          key={node.commentId}
          comment={node}
          audio={audio}
        />
      ))}
    </InfiniteScroll>
  </div>
);

Comments.propTypes = {
  audio: PropTypes.shape({
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
    }),
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Comments;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Comment from './comment';
import styles from './comments.less';
import Loader from '../shared/loaders/loader';

const Comments = ({ data, setReplies, loadMore }) => (
  <div className={styles.comments}>
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={data.comments.pageInfo.hasNextPage}
      loader={<Loader />}
      initialLoad={false}
    >
      {data.comments.edges.map(({ node }) => (
        <Comment
          key={node.commentId}
          id={node.commentId}
          body={node.body}
          dateAdded={new Date(node.dateAdded).toLocaleDateString()}
          likes={node.likes}
          dislikes={node.dislikes}
          userName={node.user.userName}
          repliesCount={node.repliesCount}
          isTopLevelComment={!node.originalComment}
          setReplies={setReplies}
        />
      ))}
    </InfiniteScroll>
  </div>
);

Comments.propTypes = {
  data: PropTypes.shape({
    comments: PropTypes.shape({
      pageInfo: PropTypes.shape({
        hasNextPage: PropTypes.bool.isRequired,
      }).isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            commentId: PropTypes.number.isRequired,
            body: PropTypes.string.isRequired,
            dateAdded: PropTypes.string.isRequired,
            dislikes: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            repliesCount: PropTypes.number.isRequired,
            originalComment: PropTypes.object,
            user: PropTypes.shape({
              userName: PropTypes.string.isRequired,
            }).isRequired,
          }),
        }),
      ),
    }),
  }).isRequired,
  setReplies: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Comments;

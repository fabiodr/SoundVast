import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import styles from './infiniteScrollGrid.less';

const InfiniteScrollGrid = ({ loadMore, hasMore, children, ...props }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadMore}
    hasMore={hasMore}
    loader={<div>Loading ...</div>}
    className={styles.infiniteScrollGrid}
    {...props}
  >
    {children}
  </InfiniteScroll>
);

InfiniteScrollGrid.propTypes = {
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default InfiniteScrollGrid;

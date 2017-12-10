import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import Grid from './grid';

const InfiniteScrollGrid = ({ loadMore, hasMore, children, ...props }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadMore}
    hasMore={hasMore}
    loader={<div>Loading ...</div>}
    {...props}
  >
    <Grid>
      {children}
    </Grid>
  </InfiniteScroll>
);

InfiniteScrollGrid.propTypes = {
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default InfiniteScrollGrid;

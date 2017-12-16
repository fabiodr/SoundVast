import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Radio from './radio';
import Grid from '../shared/grid/grid';
import AudioHeader from '../audio/audioHeader';
import genreTypeNames from '../shared/utilities/genreTypeNames';
import Loader from '../shared/loaders/loader';

const Radios = ({ data, loadMore }) => (
  <SoundVastTitle title="Radios">
    <div>
      <AudioHeader type={genreTypeNames.liveStream} />
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={data.radios.pageInfo.hasNextPage}
        loader={<Loader />}
        initialLoad={false}
      >
        <Grid>
          {data.radios.edges.map(({ node }) => <Radio key={node.audioId} radio={node} />)}
        </Grid>
      </InfiniteScroll>
    </div>
  </SoundVastTitle>
);

Radios.propTypes = {
  data: PropTypes.shape({
    radios: PropTypes.shape({
      pageInfo: PropTypes.shape({
        hasNextPage: PropTypes.bool.isRequired,
      }).isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            audioId: PropTypes.number.isRequired,
          }),
        }),
      ),
    }),
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Radios;

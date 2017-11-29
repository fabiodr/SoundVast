import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Radio from './radio';
import InfiniteScrollGrid from '../shared/grid/infiniteScrollGrid';
import Filters from '../audio/filtersContainer';
import genreTypeNames from '../shared/utilities/genreTypeNames';

const Radios = ({ radios, loadMore, hasMore }) => (
  <SoundVastTitle title="Radios">
    <div>
      <Filters type={genreTypeNames.liveStream} />
      <InfiniteScrollGrid
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
      >
        {radios.map(radio => (
          <Radio
            key={radio.audioId}
            audioId={radio.audioId}
            coverImageUrl={radio.coverImageUrl}
            name={radio.name}
            likes={radio.likes}
            dislikes={radio.dislikes}
          />
        ))}
      </InfiniteScrollGrid>
    </div>
  </SoundVastTitle>
);

Radios.propTypes = {
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Radios;

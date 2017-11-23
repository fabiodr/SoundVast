import React from 'react';
import PropTypes from 'prop-types';

import GridCell from '../../shared/grid/gridCell';
import Play from '../../audio/playContainer';
import CoverImage from '../../audio/coverImage';
import Rating from '../../rating/rating';
import Name from '../../audio/name';

const LiveStream = ({ coverImageUrl, likes, dislikes, name, audioId }) => (
  <GridCell>
    <Play id={audioId}>
      <CoverImage coverImageUrl={coverImageUrl} />
    </Play>
    <Name name={name} />
    <Rating audioId={audioId} likes={likes} dislikes={dislikes} />
  </GridCell>
);

LiveStream.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
  audioId: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default LiveStream;

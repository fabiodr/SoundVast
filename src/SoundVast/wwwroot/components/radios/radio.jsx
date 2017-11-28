import React from 'react';
import PropTypes from 'prop-types';

import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImage';
import Rating from '../rating/rating';
import Name from '../audio/name';

const Radio = ({ coverImageUrl, likes, dislikes, name, audioId }) => (
  <div>
    <Play id={audioId}>
      <CoverImage coverImageUrl={coverImageUrl} />
    </Play>
    <Name name={name} />
    <Rating audioId={audioId} likes={likes} dislikes={dislikes} />
  </div>
);

Radio.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
  audioId: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Radio;

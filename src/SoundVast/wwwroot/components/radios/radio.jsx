import React from 'react';
import PropTypes from 'prop-types';

import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImage';
import Rating from '../rating/audioRating';
import Like from '../rating/like/likeAudioContainer';
import Dislike from '../rating/dislike/dislikeAudioContainer';
import Name from '../audio/name';

const Radio = ({ coverImageUrl, likes, dislikes, name, audioId }) => (
  <div>
    <Play id={audioId}>
      <CoverImage coverImageUrl={coverImageUrl} />
    </Play>
    <Name name={name} />
    <Rating likes={likes} dislikes={dislikes}>
      <Like audioId={audioId} />
      <Dislike audioId={audioId} />
    </Rating>
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

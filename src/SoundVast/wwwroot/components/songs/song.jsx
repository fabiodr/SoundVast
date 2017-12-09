import React from 'react';
import PropTypes from 'prop-types';

import styles from './song.less';
import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImage';
import Rating from '../rating/audioRating';
import Like from '../rating/like/likeAudioContainer';
import Dislike from '../rating/dislike/dislikeAudioContainer';
import Name from '../audio/name';
import CommentBox from '../comments/commentBoxContainer';
import Comments from '../comments/commentsContainer';

const Song = ({ song }) => (
  <div>
    <Play id={song.audioId}>
      <CoverImage coverImageUrl={song.coverImageUrl} />
    </Play>
    <Name name={name} />
    <div className={styles.artist}>{song.artist}</div>
    <Rating likes={song.likes} dislikes={song.dislikes}>
      <Like audioId={song.audioId} />
      <Dislike audioId={song.audioId} />
    </Rating>
    {/* <CommentBox /> */}
    <Comments data={song} />
  </div>
);

Song.propTypes = {
  song: PropTypes.shape({
    coverImageUrl: PropTypes.string.isRequired,
    audioId: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default Song;

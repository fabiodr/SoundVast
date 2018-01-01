import React from 'react';
import PropTypes from 'prop-types';

import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImage';
import Rating from '../rating/audioRating';
import Like from '../rating/like/likeAudioContainer';
import Dislike from '../rating/dislike/dislikeAudioContainer';
import PlayCount from '../audio/playCount';
import Name from '../audio/name';
import Artists from '../audio/artists';
import AddToPlaylist from '../playlist/addToPlaylistContainer';

const Artist = ({ artist }) => (
  <div>
    <Play id={artist.audioId}>
      <CoverImage coverImageUrl={artist.coverImageUrl} />
    </Play>
    <Name name={artist.name} />
    <PlayCount playCount={artist.playCount} />
    <Artists artists={artist.artists} />
    <Rating likes={artist.likes} dislikes={artist.dislikes}>
      <Like audioId={artist.audioId} />
      <Dislike audioId={artist.audioId} />
    </Rating>
    <AddToPlaylist songId={artist.audioId} />
  </div>
);

Artist.propTypes = {
  artist: PropTypes.shape({
    coverImageUrl: PropTypes.string.isRequired,
    audioId: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    playCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Artist;

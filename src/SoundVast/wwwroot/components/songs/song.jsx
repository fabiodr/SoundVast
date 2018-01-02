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
import Flag from '../flag/flag';
import Edit from '../edit/edit';
import AddToPlaylist from '../playlist/addToPlaylistContainer';

const Song = ({ song, footerPlaylist }) => (
  <div>
    <Play id={song.audioId} footerPlaylist={footerPlaylist}>
      <CoverImage coverImageUrl={song.coverImageUrl} />
    </Play>
    <Name name={song.name} />
    <PlayCount playCount={song.playCount} />
    <Artists artists={song.artists} />
    <Rating likes={song.likes} dislikes={song.dislikes}>
      <Like audioId={song.audioId} />
      <Dislike audioId={song.audioId} />
    </Rating>
    <AddToPlaylist songId={song.audioId} />
    <Edit modalId="editSong" id={song.audioId} />
    <Flag modalId="flagAudio" id={song.audioId} />
  </div>
);

Song.propTypes = {
  song: PropTypes.shape({
    coverImageUrl: PropTypes.string.isRequired,
    audioId: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    playCount: PropTypes.number.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  footerPlaylist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string,
      sources: PropTypes.object.isRequired,
      poster: PropTypes.string.isRequired,
      free: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Song;
